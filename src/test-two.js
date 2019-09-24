var logger = new Logger('FineReplaceScript', '/Users/scott/Downloads');


try {
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
                width      : 350,
                height     : 300,
                rows       : 7,
                columns    : 3,
                margins    : 10,
                spacing    : 4,
                windowType : WindowTypes.PALETTE,
                name       : 'Dialog ' + Utils.shortUUID()
            };

            var MIN_ROW_HEIGHT = 24,
                MIN_COL_WIDTH  = 80,
                BUTTON_HEIGHT  = 24;

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

            var fullWidth = settings.width - (settings.margins * 2),
                rowHeight = Math.floor(
                    (settings.height - (settings.margins * 2) - (settings.spacing * (settings.rows - 1)) )/ settings.rows
                ),
                colWidth  = Math.floor((settings.width - (settings.columns * (settings.spacing - 1))) / settings.columns);

            /*
             * The Dialog object.
             */

            try { $.global['FindAndReplace'].close(); }
            catch(e) {/* Exit gracefully */}


            try {
                dialog = new Dialog(settings, logger, $.global)
            }
            catch(e) {alert('Create dialog error : ' + de)}

            try {
                var buttonWidth = colWidth - (settings.spacing * 2);

                /*
                 * Find
                 */

                var row_0 = dialog.getRow(0);

                dialog.add({
                    title  : 'Find Text',
                    type   : FieldTypes.LABEL,
                    row    : 1,
                    column : 1,
                    span   : 1,
                    value  : 'Find Text',
                    parent : row_0
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
                    parent : row_0
                });

                /*
                 * Replace
                 */

                var row_1 = dialog.getRow(1);

                findField.active = true;

                dialog.add({
                    title  : 'Replace Text',
                    type   : FieldTypes.LABEL,
                    row    : 2,
                    column : 1,
                    span   : 1,
                    value  : 'Replace Text',
                    parent : row_1
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
                    parent : row_1
                });

                /*
                 * Regex
                 */

                var row_2 = dialog.getRow(2);

                dialog.add({
                    title  : 'Use Regex',
                    type   : FieldTypes.LABEL,
                    row    : 3,
                    column : 1,
                    span   : 1,
                    value  : 'Use Regex',
                    parent : row_2
                });

                dialog.add({
                    title  : 'Regex',
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
                        if (bounds instanceof Array) {
                            return [
                                bounds[0],
                                bounds[1] + 8,
                                bounds[2],
                                bounds[3] + 8
                            ];
                        }
                        return {
                            x : bounds.x,
                            y : bounds.y + 8,
                            width : bounds.width,
                            height : bounds.height
                        }
                    },
                    parent : row_2
                });

                /*
                 * Scope
                 */

                var row_3 = dialog.getRow(3);

                dialog.add({
                    title  : 'Scope',
                    type   : FieldTypes.LABEL,
                    row    : 4,
                    column : 1,
                    span   : 1,
                    value  : 'Search Scope',
                    parent : row_3
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
                        if (bounds instanceof Array) {
                            return [
                                bounds[0],
                                bounds[1] + 8,
                                bounds[2],
                                bounds[3] + 8
                            ];
                        }
                        return {
                            x : bounds.x,
                            y : bounds.y + 8,
                            width : bounds.width,
                            height : bounds.height
                        }
                    },
                    parent : row_3
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
                        logger.info('ORIGINAL BOUNDS : ' + JSON.stringify(bounds));
                        if (bounds instanceof Array) {
                            return [
                                bounds[0],
                                bounds[1] + 8,
                                bounds[2],
                                bounds[3] + 8
                            ];
                        }
                        return {
                            x : bounds.x,
                            y : bounds.y + 8,
                            width : bounds.width,
                            height : bounds.height
                        }
                    },
                    parent : row_3
                });

                /*
                 * Cancel Button
                 */

                var row_4 = dialog.getRow(dialog.getRows().length-1);

                var cancel = row_4.add(
                    FieldTypes.BUTTON,
                    {
                        x      : settings.margins,
                        y      : settings.margins,
                        width  : colWidth - (settings.spacing * 2),
                        height : BUTTON_HEIGHT
                    },
                    'Cancel',
                    {
                        value   : 'cancel',
                        helpTip : 'Get me out of here!'
                    });

                /**
                 * Cancel button handler.
                 * @returns {boolean}
                 */
                cancel.onClick = function() {
                    dialog.close();
                }

                var save = row_4.add(
                    FieldTypes.BUTTON,
                    {
                        x      : row_4.bounds.width - buttonWidth - settings.spacing,
                        y      : 10,
                        width  : colWidth - (settings.spacing * 2),
                        height : BUTTON_HEIGHT
                    },
                    'Save',
                    {
                        value   : 'save',
                        helpTip : 'Save it!'
                    });

                /**
                 * Save button handler.
                 * @returns {boolean}
                 */
                save.onClick = function() {
                    try {
                        var formValue = dialog.getFormValue();

                        logger.info('FORM VALUE : ' + JSON.stringify(formValue));
                        logger.info('PRESETS : ' + presets.toString());

                        presets.save();
                        dialog.close();
                    }
                    catch(e){ alert(e) }
                }
            }
            catch(e) {alert('Oops! ' + e)}

            dialog.center();
            dialog.show();

            try { $.global['FindAndReplace'] = dialog; }
            catch(e) {/* Exit gracefully */}
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

}
catch(e) {alert(e)}
