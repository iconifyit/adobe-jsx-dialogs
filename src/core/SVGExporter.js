/**
 * SVGExporter class
 * @constructor
 */
var SVGEporter = function() {

    var originalInteractionLevel = userInteractionLevel;
    userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

    /**
     * User data folder.
     * @type {string}
     */
    var USER_DATA = Folder.userData + '/com.atomic.ai-tools';


    // Make sure the user data folder exists

    Utils.folder(USER_DATA);

    /**
     * Settings file.
     * @type {string}
     */
    var SETTINGS_FILE = USER_DATA + '/settings.js';

    /**
     * Default config object.
     * @type {{sizes: number[], source: string, target: string}}
     */
    var Config = getSettings(SETTINGS_FILE);

    // Get user input for output sizes.

    try {
        Config.sizes = getTargetSizes(Config);
    }
    catch(e) {
        logger(e.message);
        return new UserCancelledError(e);
    }

    /**
     * The actual size of the icons
     * @type {number}
     */
    var baseFileSize   = 64;

    /**
     * Log output mode:
     * 0 = off, no logging
     * 1 = on, logging enabled
     */
    var logging = 1;

    /**
     *  1 = forward
     * -1 = reverse
     * @type {number}
     */
    var runOrder     = -1;

    /**
     * Files array.
     * @type {Array}
     */
    var theFiles     = [];


    // Main routine

    try {

        var theSourceFolder,
            theTargetFolder;

        theSourceFolder = Folder.selectDialog("Select a folder of SVG files.", Config.source);

        if (theSourceFolder instanceof Folder)  {
            theTargetFolder = Folder.selectDialog("Choose a destination folder", theSourceFolder);
            // if (theSourceFolder instanceof Folder)  {
            //     theTargetFolder = new Folder(theTargetFolder.absoluteURI + '/png');
            //     Utils.folder(theTargetFolder.absoluteURI);
            // }
        }

        logger("SVG->PNG Start: " + (new Date()));
        logger("Source: " + theSourceFolder.absoluteURI);
        logger("Target: " + theTargetFolder.absoluteURI);

        // Save the settings

        logger('SETTINGS_FILE : ' + SETTINGS_FILE);
        logger('Config : ' + JSON.stringify({
            sizes  : Config.sizes,
            target : theTargetFolder.absoluteURI,
            source : theSourceFolder.absoluteURI
        }));

        // Save the settings.

        Utils.write_file(SETTINGS_FILE, JSON.stringify({
            sizes  : Config.sizes,
            target : theTargetFolder.absoluteURI,
            source : theSourceFolder.absoluteURI
        }), true);

        // Get list of files in folder & subfolders.

        theFiles = new FileList(theSourceFolder).getFiles(true, [FileTypes.SVG]);

        // Set the run order (ASC or DESC)

        if (runOrder == -1) theFiles.reverse();

        // Loop through the files.

        var _theFiles = new Iterator(theFiles);

        logger(
            'Iterator items : ' + _theFiles.size() +
            ', theFiles.length : ' + theFiles.length
        );

        for (var i = 0; i < theFiles.length; i++) {

            var f = theFiles[i];
            var fileName = f.name;

            try {

                for (var x = 0; x < Config.sizes.length; x++) {

                    var theTargetSize = Config.sizes[x];
                    var sizeFolder = "/" + theTargetSize + "px";

                    var theRelativeFilePath = f.toString().replace(
                        theSourceFolder.toString(),
                        ""
                    );

                    theRelativeFilePath = sizeFolder + theRelativeFilePath;

                    var theRelativeFolderPath = theRelativeFilePath.replace(
                        f.name,
                        ""
                    );

                    newFolder = new Folder(theTargetFolder + theRelativeFolderPath);

                    if (! newFolder.exists) {

                        logger("Creating folder " + newFolder.path);
                        newFolder.create();
                    }

                    var theTargetFile = theTargetFolder + theRelativeFilePath.replace(".svg", ".png");

                    if (! new File(theTargetFile).exists) {

                        logger("Saving PNG file " + theTargetFile);

                        if (app.documents.length === 0) {

                            doc = app.open(f);
                        }

                        exportPNG(
                            theTargetFile,
                            100 * (theTargetSize / baseFileSize)
                        );
                    }
                }
            }
            catch(ex) {
                logger("ERROR: " + ex.message);
            }

            try {
                doc.close(SaveOptions.DONOTSAVECHANGES);
            }
            catch(ex) {/* ¯\_(ツ)_/¯ */}
        }
    }
    catch(ex) {

        logger("ERROR: " + ex.message);
    }

    userInteractionLevel = originalInteractionLevel;

    logger("SVG->PNG Finish: " + (new Date()));

    /**
     *  Functions
     */

    function exportPNG(theFilePath, theScale) {

        if (app.documents.length > 0) {

            app.activeDocument.exportFile(
                new File(theFilePath),
                ExportType.PNG24,
                getPNGOptions(theScale)
            );
        }
    }

    // Folder.selectDialog('Select Folder to Save Files')

    function exportSVG(name) {

        var doc = activeDocument;

        var exportOptions = new ExportOptionsSVG();
        svgOptions.embedRasterImages = false;
        svgOptions.cssProperties = SVGCSSPropertyLocation.PRESENTATIONATTRIBUTES;
        svgOptions.fontSubsetting = SVGFontSubsetting.None;
        svgOptions.documentEncoding = SVGDocumentEncoding.UTF8;
        svgOptions.coordinatePrecision = 4;

        var file = new File( exportFolder.fsName + '/' + name );
        doc.exportFile( file, ExportType.SVG, exportOptions );
    }

    /**
     * Get stored settings.
     * @param SETTINGS_FILE
     * @returns {{sizes: number[], source: string, target: string}}
     */
    function getSettings(SETTINGS_FILE) {
        /**
         * Default config object.
         * @type {{sizes: number[], source: string, target: string}}
         */
        var Settings = {
            sizes  : [64, 128, 256, 512],
            target : '~/Downloads',
            source : '~/Downloads'
        };

        // Read the settings file if it exists.

        try {
            var _settings = Utils.read_json_file(SETTINGS_FILE);

            Settings.target = get(_settings, 'target', Settings.target);
            Settings.source = get(_settings, 'source', Settings.source);
            Settings.sizes  = get(_settings, 'sizes',  Settings.sizes);
        }
        catch(e) { /* File does not exist */ }

        return Settings;
    }

    /**
     *
     * @returns {number[]}
     */
    function getTargetSizes(Config) {
        var tmp,
            result = [];

        tmp = prompt('Enter comma-separated sizes (ex : 32, 64, 128)', Config.sizes);

        if (typeof tmp == 'undefined' || tmp === null) {
            throw new UserCancelledError('User Cancelled');
        }

        return tmp.split(',').map(parseInt);
    }

    /**
     * getPNGOptions: Function to set the PNG saving options of the
     * files using the PDFSaveOptions object.
     */
    function getPNGOptions(theScale) {

        var options = new ExportOptionsPNG24();

        options.antiAliasing     = true;
        options.artBoardClipping = false;
        options.horizontalScale  = theScale;
        options.verticalScale    = theScale;
        options.saveAsHTML       = false;
        options.transparency     = true;

        return options;
    }

    function logger(txt) {

        if (logging === 0) return;
        var file = new File(theTargetFolder + "/ai-icon-tools.log");
        file.open("e", "TEXT", "????");
        file.seek(0,2);
        $.os.search(/windows/i)  != -1 ? file.lineFeed = 'windows'  : file.lineFeed = 'macintosh';
        file.writeln("[" + new Date().toUTCString() + "] " + txt);
        file.close();
    }
};



