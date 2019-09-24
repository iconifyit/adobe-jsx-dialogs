/**
 * Find & Replace class.
 * @param logger
 * @returns {*}
 * @constructor
 */
var FindAndReplace = function(Config, logger) {

    this.__NAME__  = 'FindAndReplace';
    this.__STORE__ = Config.PRESETS + '/' + this.__NAME__ + '.json';

    try {
        var settings = {
            width   : 300,
            height  : 335,
            rows    : 7,
            columns : 3,
            margins : 20,
            spacing : 2
        };

        logger.info(' ');
        logger.info(' ================================= [ ' + (new Date()).toUTCString() + ' ] ================================= ');
        logger.info(' ');
        logger.info('Config ' + JSON.stringify(Config));
        logger.info('Console test ' + typeof console);

        /*
         * Presets (storage) object.
         */
        var presets = new Presets(this.__STORE__, {
            find      : 'Enter search text',
            replace   : 'Enter replace text',
            regex     : false,
            artboards : true,
            layers    : true
        });

        logger.info(presets.toString());

        /*
         * The Dialog object.
         */

        var dialog = new Dialog(settings, logger);

        /*
         * Add pancels first.
         */
        var searchPanel = dialog.addPanel({
            title   : 'Search',
            row     : 1,
            column  : 1,
            span    : 3,
            rowspan : 4,
            margins : 16,
            spacing : 4
        });

        /*
         * Add Dialog controls.
         */

        dialog.add({
            title  : 'Find Text',
            type   : FieldTypes.LABEL,
            row    : 1,
            column : 1,
            span   : 1,
            value  : 'Find Text',
            parent : searchPanel
        });

        var findField = dialog.add({
            title  : 'find',
            type   : FieldTypes.TEXT,
            row    : 1,
            column : 2,
            span   : 2,
            value  : presets.get('find', ''),
            onChange : function(theValue, theField) {
                logger.info('find.onChange ' + theValue);
                logger.info('theField.type ' + typeof theField);
                presets.set('find', theValue)
            },
            parent : searchPanel
        });

        findField.active = true;

        dialog.add({
            title  : 'Replace Text',
            type   : FieldTypes.LABEL,
            row    : 2,
            column : 1,
            span   : 1,
            value  : 'Replace Text',
            parent : searchPanel
        });

        dialog.add({
            title  : 'replace',
            type   : FieldTypes.TEXT,
            row    : 2,
            column : 2,
            span   : 2,
            value  : presets.get('replace', ''),
            onChange : function(theValue, theField) {
                logger.info('replace.onChange ' + theValue);
                logger.info('theField.type ' + typeof theField);
                presets.set('replace', theValue)
            },
            parent : searchPanel
        });

        dialog.add({
            title  : 'Use Regex',
            type   : FieldTypes.LABEL,
            row    : 3,
            column : 1,
            span   : 1,
            value  : 'Use Regex',
            parent : searchPanel
        });

        dialog.add({
            title  : 'regex',
            type   : FieldTypes.CHECKBOX,
            row    : 3,
            column : 2,
            span   : 1,
            value  : presets.get('regex', ''),
            onChange : function(theValue) {
                logger.info('regex.onChange ' + theValue);
                presets.set('regex', theValue)
            },
            nudge : function(bounds) {
                logger.info('ORIGINAL BOUNDS : ' + JSON.stringify(bounds));
                return [
                    bounds[0],
                    bounds[1] + 8,
                    bounds[2],
                    bounds[3] + 8
                ];
            },
            parent : searchPanel
        });

        dialog.add({
            title  : 'Scope',
            type   : FieldTypes.LABEL,
            row    : 4,
            column : 1,
            span   : 1,
            value  : 'Search Scope',
            parent : searchPanel
        });

        dialog.add({
            title  : 'artboards',
            type   : FieldTypes.CHECKBOX,
            row    : 4,
            column : 2,
            span   : 1,
            value  : 'Artboards',
            onChange : function(theValue) {
                logger.info('artboards.onChange ' + theValue);
                presets.set('artboards', theValue)
            },
            nudge : function(bounds) {
                logger.info('ORIGINAL BOUNDS : ' + JSON.stringify(bounds));
                return [
                    bounds[0],
                    bounds[1] + 8,
                    bounds[2],
                    bounds[3] + 8
                ];
            },
            parent : searchPanel
        });

        dialog.add({
            title  : 'layers',
            type   : FieldTypes.CHECKBOX,
            row    : 4,
            column : 3,
            span   : 1,
            value  : 'Layers',
            onChange : function(theValue) {
                logger.info('layers.onChange ' + theValue);
                presets.set('layers', theValue)
            },
            nudge : function(bounds) {
                return [
                    bounds[0],
                    bounds[1] + 8,
                    bounds[2],
                    bounds[3] + 8
                ];
            },
            parent : searchPanel
        });

        /*
         * Prepend & Append Controls
         */

        /*
        dialog.add({
            title  : 'Prepend Text',
            type   : FieldTypes.LABEL,
            row    : 5,
            column : 1,
            span   : 1,
            value  : 'Prepend Text'
        });

        var prependField = dialog.add({
            title  : 'prepend',
            type   : FieldTypes.TEXT,
            row    : 5,
            column : 2,
            span   : 2,
            value  : presets.get('prepend', ''),
            onChange : function(theValue, theField) {
                logger.info('prepend.onChange ' + theValue);
                logger.info('prepend.type ' + typeof theField);
                presets.set('prepend', theValue)
            }
        });

        prependField.active = true;

        dialog.add({
            title  : 'Append Text',
            type   : FieldTypes.LABEL,
            row    : 6,
            column : 1,
            span   : 1,
            value  : 'Append Text'
        });

        var appendField = dialog.add({
            title  : 'append',
            type   : FieldTypes.TEXT,
            row    : 6,
            column : 2,
            span   : 2,
            value  : presets.get('append', ''),
            onChange : function(theValue, theField) {
                logger.info('append.onChange ' + theValue);
                logger.info('append.type ' + typeof theField);
                presets.set('append', theValue)
            }
        });

        appendField.active = true;
         */

        /*
         * Main Buttons
         */

        dialog.add({
            title  : 'Cancel',
            type   : FieldTypes.BUTTON,
            row    : 8,
            column : 1,
            span   : 1,
            value  : 'Cancel'
        });

        dialog.add({
            title  : 'Ok',
            type   : FieldTypes.BUTTON,
            row    : 8,
            column : 3,
            span   : 1,
            value  : 'Ok'
        });

        /**
         * Cancel button handler.
         * @returns {boolean}
         */
        dialog.window.Cancel.onClick = function() {
            dialog.window.close();
            response = false;
            return false;
        }

        /**
         * Ok button handler.
         * @returns {boolean}
         */
        dialog.window.Ok.onClick = function() {

            var formValue = dialog.getFormValue();

            logger.info('FORM VALUE : ' + JSON.stringify(formValue));
            logger.info('PRESETS : ' + presets.toString());

            presets.save();
            dialog.window.close();
        }

        dialog.show();
    }
    catch(e) { return e.message }

}

FindAndReplace.prototype.doFindAndReplace = function(find, replace, scopes, regex) {

    if (! (scopes instanceof Array)) return;

    if (app.documents.length === 0) {
        alert('There are no open documents');
        return;
    }

    function _findAndReplace(name, find, replace, regex) {
        var doc = app.activeDocument;
        for (var i = 0; doc[entities].length; i++) {
            var entity = doc[entities][i];
            if (regex) find = new RegExp(find, ig);
            entity.name = entity.name.replace(find, replace);
        }
    }

    if (scopes.inArray('artboards') != -1) {
        _findAndReplace('artboard', find, replace, regex);
    }

    if (scopes.inArray('layers') != -1) {
        _findAndReplace('layer', find, replace, regex);
    }
}

new FindAndReplace(
    Config,
    new Logger('find-replace', '/Users/scott/Downloads')
);
