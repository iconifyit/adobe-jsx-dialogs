try {
    /**
     * CSInterface object.
     */
    if (typeof CSInterface !== 'undefined') {
        csInterface.evalScript("$.getenv('HOME')", function(result) {
            HOME = result;
        })
    }

    /**
     * Get the USER_DATA folder.
     */
    var userDataFolder = (function() {
        var _userDataFolder;
        try {
            console.log(
                'csInterface.getSystemPath(SystemPath.USER_DATA)',
                csInterface.getSystemPath(SystemPath.USER_DATA)
            );
            console.log(
                window.location.href
            )
            _userDataFolder = csInterface.getSystemPath(SystemPath.USER_DATA);
        }
        catch(e) {
            try {
                _userDataFolder = Folder.userData;
            }
            catch(e) {
                alert('logger.info : ' + e);
            }
        }
        return _userDataFolder;
    })();

    /**
     * Event constants.
     * @type {{KEY_SAVED: string, OPEN_URL: string}}
     */
    var Events = {
        KEY_SAVED : 'key_saved',
        OPEN_URL  : 'open_url',
        SLCT      : 'slct'
    };

    /**
     * Context constants.
     * @type {{HOST: string, CLIENT: string}}
     */
    var Contexts = {
        HOST    : 'HOST',
        CLIENT  : 'CLIENT',
        JS      : 'JS',
        JSX     : 'JSX',
        UNKNOWN : 'UNKNOWN',
        ERR     : 'ERROR'
    };

    /**
     * Operating system constants.
     * @type {{
     *     UNKNOWN : string,
     *     WIN     : string,
     *     MAC     : string
     * }}
     */
    var Platforms = {
        MAC     : 'mac',
        WIN     : 'windows',
        UNKNOWN : 'unknown'
    };

    /**
     * Mode constants.
     * @type {{
     *   TEST : string,
     *   LIVE : string
     * }}
     */
    var Modes = {
        TEST : 'test',
        LIVE : 'live'
    };

    /**
     * File Extensions constants.
     * @type {{JPG: string, PDF: string, SVG: string, GIF: string, AI: string, PNG: string, EPS: string}}
     */
    var FileTypes = {

        SVG : "SVG",
        EPS : "EPS",
        AI  : "AI",
        PDF : "PDF",
        PNG : "PNG",
        JPG : "JPG",
        GIF : "GIF",

        toRegex : function(theType) {
            if (typeof(FileTypes[theType.toUpperCase()]) == 'string') {
                return new RegExp(theType.toLowerCase(), 'ig');
            }
        }
    };

    var EXTENSION_ID = 'com.atomic.ai-icontools.panel';

    /**
     * Default configuration. Many of these values are over-written by the dialog.
     * @type {{
     *     ARTBOARD_COUNT: number,
     *     ARTBOARD_WIDTH: number,
     *     ARTBOARD_HEIGHT: number,
     *     ARTBOARD_SPACING: number,
     *     ARTBOARD_ROWSxCOLS: number,
     *     LOG_FILE_PATH: string,
     *     OUTPUT_FILENAME: string,
     *     SCALE: number,
     *     ROOT: string,
     *     SRC_FOLDER: string,
     *     ATH_SEPATATOR: string
     * }}
     */
    var Config = {

        EXTENSION_ID        : EXTENSION_ID,
        EXTENSION_VERS      : '0.0.0',
        APP_NAME            : EXTENSION_ID,
        USER_DATA           : userDataFolder + '/' + EXTENSION_ID,
        PRESETS             : userDataFolder + '/' + EXTENSION_ID + '/presets',
        LOG_FOLDER          : userDataFolder + '/' + EXTENSION_ID + '/logs',
        LOG_FILE            : userDataFolder + '/' + EXTENSION_ID + '/logs/ai-icontools.log',
        SETTINGS_FILE       : userDataFolder + '/' + EXTENSION_ID + '/presets/settings.json',

        MODE                : Modes.TEST,
        DEBUG               : true,

        USER                : $.getenv('USER'),
        HOME                : $.getenv('HOME'),
        DOCUMENTS           : Folder.myDocuments,

        LOGGING             : true,
        SYSTEM              : $.os.search(/windows/i) != -1 ? "WINDOWS" : "MAC"
    };

}
catch(e) { throw e }
