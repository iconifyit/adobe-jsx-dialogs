/**
 * Dialog class.
 * @param settings
 * @param logger
 * @returns {Window}
 * @constructor
 */
var Dialog = function(settings, logger, __GLOBALS) {

    var module,
        response,
        bounds,
        width,
        height,
        top,
        left,
        rows,
        columns,
        margins,
        spacing,
        windowSize;

    var MIN_ROW_HEIGHT = 24,
        MIN_COL_WIDTH  = 80,
        BUTTON_HEIGHT  = 24;

    /*
     * Capture `this` in symbol for scoping issues.
     */

    module          = this;
    module.logger   = logger;
    module.settings = settings;

    /*
     * The window type.
     */

    module.windowType = settings.get('windowType', 'dialog');

    /*
     * For storing field names & types.
     */

    module._fields  = [];

    /*
     * Store button names.
     */

    module._buttons = [];

    /*
     * Rows
     */

    module._rows = [];

    /*
     * Event listeners table.
     */

    module._eventListeners = {};

    /**
     * The current row.
     * @type {number}
     */
    module.currentRow = 1;

    /**
     * The current column.
     * @type {number}
     */
    module.currentColumn = 1;

    /**
     * Does the current element have a containing panel?
     * @type {boolean}
     */
    module.hasPanel = false;

    /*d
     * Test if field type is checkbox or radio.
     */

    this._hasValueProperty = function(theField) {
        return typeof theField.value === 'boolean';
    }

    /*
     * Set local variables for dimensions.
     */

    width      = settings.width || 450;
    height     = settings.height || 450;
    left       = 550;
    top        = 300;
    rows       = settings.rows || 2;
    columns    = settings.columns || 2,
    margins    = settings.margins || 20,
    spacing    = settings.spacing || 4,
    dblMargins = - (settings.margins * 2);

    /*
     * Calculate screen center.
     */
    try {
        if (windowSize = getScreenSize()) {
            left = Math.abs(Math.ceil( (windowSize.width - width) / 2 ));
            top  = Math.abs(Math.ceil( (windowSize.height - height) / 2 ));
        }
    }
    catch(e) {alert(e)}

    /*
     * Initialize response value.
     */

    response = false;

    /**
     * Dialog bounds: [ Left, TOP, RIGHT, BOTTOM ]
     * default: //550, 350, 1000, 800
     * @type {Window}
     *
     * type, title, bounds, properties
     */
    module.window = new Window(
        module.windowType,
        settings.name || 'Dialog',
        {
            x      : settings.margins,
            y      : settings.margins,
            width  : settings.width,
            height : settings.height
        },
        {
            margins : settings.margins,
            spacing : settings.spacing,
            alignChildren : ['fill', 'top'],
            orientation   : 'column'
        });

    /*
     * Calculate grid dimensions.
     */

    var fullWidth = settings.width - (settings.margins * 2),
        rowHeight = Math.floor(
            (settings.height - (settings.margins * 2) - (settings.spacing * (settings.rows - 1)) )/ settings.rows
        ),
        colWidth  = Math.floor((settings.width - (settings.columns * (settings.spacing - 1))) / settings.columns);

    if (rowHeight - dblMargins < MIN_ROW_HEIGHT) {
        settings.rows = Math.floor((settings.width - dblMargins) / MIN_ROW_HEIGHT);
        rowHeight = Math.floor((settings.width - dblMargins) / settings.rows);
    }

    if (colWidth - dblMargins < MIN_COL_WIDTH) {
        settings.columns = Math.floor((settings.width - dblMargins) / MIN_COL_WIDTH);
        colWidth = Math.floor((settings.width - dblMargins) / settings.columns);
    }

    /*
     * Add empty rows.
     */
    var currentPanel, previousPanel;

    for (var i = 0; i < settings.rows; i++) {

        previousPanel = i > 0 ? module.window['row__' + (i -1)] : null ;

        currentPanel = module.window.add(
            FieldTypes.GROUP,
            {
                x      : settings.margins,
                y      : i == 0 ? settings.margins : previousPanel.bounds.y + rowHeight + settings.spacing,
                width  : fullWidth,
                height : rowHeight
            },
            'Row ' + i,
            {
                helpTip : "Help tip for panel " + i
            }
        );

        module.window['row__' + i] = currentPanel;
        module._rows.push(currentPanel);
    }

    /*
     * Create new window instance.
     */

    module.form = new Base({
        rows    : settings.rows    || 1,
        columns : settings.columns || 1 ,
        margins : settings.margins || 10,
        spacing : settings.spacing || 4,
        width   : settings.width   || 450,
        height  : settings.height  || 450
    });

    module.form.getRowHeight = function() {
        return Math.min(
            Math.floor(this.get('height') / this.get('rows')),
            30
        );
    }

    module.form.getColumnWidth = function() {
        return Math.floor(this.get('width') / this.get('columns'));
    }

    module.form.getMargins = function() {
        return this.get('margins', 0);
    }

    module.form.getSpacing = function() {
        return this.get('spacing', 0);
    }

    module.form.getWidth = function() {
        return this.get('width', 450);
    }

    module.form.getHeight = function() {
        return this.get('height', 450);
    }

    /*
     * Public API
     */

    return {
        getWindow : function() {
            return module.window;
        },
        getRow : function(index) {
            return module.getRow(index);
        },
        getRows : function() {
            return module.getRows();
        },
        addPanel : function(options) {
            return module.window.addPanel(options)
        },
        add : function(options) {
            return module.add(options);
        },
        show : function() {
            module.window.show();
        },
        center : function() {
            module.window.center();
        },
        close : function() {
            module.window.close();
        },
        getFormValue : function() {
            return module.getFormValue();
        }
    };
}

/**
 * Get reference to a previousl added
 * @param index
 * @returns {*}
 */
Dialog.prototype.getRow = function(index) {
    try {
        return this._rows[index];
    }
    catch(e) { this.logger.error(e); throw e; }
}

/**
 * Get reference to form rows.
 * @returns {Panel[]|Group[]}
 */
Dialog.prototype.getRows = function() {
    try {
        return this._rows;
    }
    catch(e) { this.logger.error(e); throw e; }
}

/**
 * Add a row to dialog form.
 * @param options
 * @returns {*}
 */
Dialog.prototype.addRow = function(options) {
    try {

        /*
         * Reference to `this`
         */

        var module = this;

        /*
         * Create getter/setter version of options.
         */

        options = new Base(options || {});

        /*
         * Set up local variables.
         */

        var title     = options.get('title', false);
        var fieldType = title ? FieldTypes.PANEL : FieldTypes.GROUP ;

        var _options = new Base({
            title   : value,
            value   : value,
            ID      : 'row__' + Utils.shortUUID(),
            type    : fieldType,
            row     : options.get('row',      1),
            column  : options.get('column',   1),
            span    : options.get('span',     1),
            rowspan : options.get('rowspan',  1),
            margins : options.get('margins',  0),
            spacing : options.get('spacing',  0)
        });

        var _row = module.add(_options);

        _row.margin  = _options.get('margins');
        _row.spacing = _options.get('spacing');

        module.logger.info(_row);

        module._rows.push(_row);

        return _row;
    }
    catch(e) { this.logger.error(e); throw e; }
}

/**
 * Add panel field.
 * @param options
 * @returns {*}
 */
Dialog.prototype.addPanel = function(options) {
    try {

        /*
         * Reference to `this`
         */

        var module = this;

        /*
         * Create getter/setter version of options.
         */

        options = new Base(options || {});

        /*
         * Set up local variables.
         */

        var value = options.get('title',    'Field ' + Utils.shortUUID());

        var _options = new Base({
            title   : value,
            value   : value,
            ID      : 'panel__' + Utils.shortUUID(),
            type    : FieldTypes.PANEL,
            row     : options.get('row',      1),
            column  : options.get('column',   1),
            span    : options.get('span',     1),
            rowspan : options.get('rowspan',  1),
            margins : options.get('margins',  0),
            spacing : options.get('spacing',  0)
        });

        var _panel = module.add(_options);

        _panel.margin  = _options.get('margins');
        _panel.spacing = _options.get('spacing');

        module.logger.info(_panel);

        module._rows.push(_panel);

        return _panel;
    }
    catch(e) { this.logger.error(e); throw e; }
}

// dialog.sizePanel = dialog.add('panel',  [p1, 16, p2, 170],   LANG.LABEL_SIZE);

/**
 * Add form element.
 * @param options
 * @returns {*}
 */
Dialog.prototype.add = function(options) {
    try {

        /*
         * Reference to `this`
         */

        var module = this,
            form   = this.form;

        // this.logger.info('options')
        // this.logger.info(JSON.stringify(options))

        /*
         * Create getter/setter version of options.
         */

        options = new Base(options || {});

        /*
         * Set up local variables.
         */

        var name     = options.get('title',    'Field ' + Utils.shortUUID()),
            type     = options.get('type',     FieldTypes.TEXT),
            row      = options.get('row',      1),
            column   = options.get('column',   1),
            span     = options.get('span',     1),
            rowspan  = options.get('rowspan',  1),
            value    = options.get('value',    null),
            nudge    = options.get('nudge',    null),
            onChange = options.get('onChange', options.get('onchange')),
            margins  = options.get('margins',  0),
            spacing  = options.get('spacing',  0),
            parent   = options.get('parent',   null);


        this.logger.info({
            name    : name,
            type    : type,
            row     : row,
            column  : column,
            span    : span,
            rowspan : rowspan,
            value   : value,
            margins : margins,
            spacing : spacing,
            parent  : parent
        })

        /*
         * Calculate height and width.
         */

        var rowHeight    = form.getRowHeight(),
            colWidth     = form.getColumnWidth(),
            windowWidth  = form.getWidth(),
            windowHeight = form.getHeight();
            // margins      = form.getMargins(),
            // spacing      = form.getSpacing();

        /*
         * Test for parent panel.
         */

        module.hasPanel = parent !== null;

        /*
         * Set current row & column.
         */

        module.currentColumn = options.get('column', 1);
        module.currentRow    = options.get('row', 1);

        /*
         * Adjust row and column offsets.
         */

        span   = span || 1;
        row    = row - 1;
        column = column - 1;

        /*
         * Calculate new coordinates.
         */

        if (type == FieldTypes.PANEL) {
            margins   = Math.floor(margins / 2);
            rowHeight = rowHeight + spacing;
        }

        var topBottomMargins = margins,
            leftRightMargins = margins;

        if (this._rows.length > 0 && type !== FieldTypes.PANEL) {
            leftRightMargins = margins;
        }

        // var x1 = leftRightMargins + ( column == 0 ? 0 : ((spacing + colWidth) * column) ),
        //     x2 = Math.min( x1 + (colWidth * span), windowWidth - leftRightMargins ),
        //     y1 = topBottomMargins + Math.floor((spacing + rowHeight) * row),
        //     y2 = Math.min( (y1 + (rowHeight * rowspan)), windowHeight - topBottomMargins );

        var x1 = leftRightMargins + ( column == 0 ? 0 : ((spacing + colWidth) * column) );

        var x2 = Math.min( x1 + (colWidth * span), windowWidth - leftRightMargins );

        var y1 = topBottomMargins;

        var y2 = Math.min( (y1 + (rowHeight * rowspan)), windowHeight - topBottomMargins );

        /*
         * Set bounds array.
         */

        // var bounds = [ x1, y1, x2, y2 ];

        var bounds = {
            x      : x1,
            y      : y1,
            width  : Math.floor(x2 - x1),
            height : Math.floor(y2 - y1)
        }

        logger.info(stringify(bounds));

        /*
         * Execute callback if there is one.
         */

        if (typeof nudge === 'function') {
            bounds = nudge.call(module, bounds);
        }

        /*
         * Add the new control element to the window.
         */

        var _target = parent ? parent : module.window;

        var properties = {
            margins : margins,
            spacing : spacing
        };

        if (parent) {
            properties.location = [20, 20];
        }

        if (type === FieldTypes.PANEL) {
            properties.margins = 20;
            properties.orientation = 'row';
            properties.alignChildren = ['fill', 'top']
        }

        _target[name] = _target.add(type, bounds, value, properties);

        var theField = _target[name];

        /*
         * If the control has a value property, set it.
         */

        if (module._hasValueProperty(theField)) {
            theField.value  = value;
        }

        /*
         * Return the field that was changed and the new value.
         */

        if (typeof onChange === 'function') {

            var eventName = 'onChange',
                fieldName = 'text';

            if (module._hasValueProperty(theField)) {
                eventName = 'onClick';
                fieldName = 'value';
            }

            theField[eventName] = function() {
                onChange.call(module, theField[fieldName], theField);
            }
        }

        /*
         * Add field desicription to fields table.
         */

        if ([FieldTypes.BUTTON, FieldTypes.LABEL, FieldTypes.PANEL].indexOf(type) == -1) {
            module._fields.push({
                target : _target,
                name : name,
                type : type
            });
        }

        /*
         * Return the form element.
         */

        return theField;
    }
    catch(e) { this.logger.error(e); throw e; }
}


/**
 * Test if a field falls within the bounds of a panel.
 * @param   {object}    theField
 * @returns {boolean}
 */
Dialog.prototype.panelHitTest = function(theField) {
    try {

        var f_column  = theField.get('column', 1),
            f_row     = theField.get('row', 1),
            f_span    = theField.get('span', 1),
            f_rowspan = theField.get('rowspan', 1);

        var panels = this._rows;

        for (var i = 0; i < (panels || []).length; i++) {
            var thePanel = panels[i];

            var p_column  = thePanel.get('column', 1),
                p_row     = thePanel.get('row', 1),
                p_span    = thePanel.get('span', 1),
                p_rowspan = thePanel.get('rowspan', 1);

            var xhit, yhit;

            if (f_column.between(p_column, (p_column + (p_span - 1)), true)) {
                xhit = true;
                this.logger.info('X Hit found');
            }

            if (f_row.between(p_row, (p_row + (p_rowspan - 1)), true)) {
                yhit = true;
                this.logger.info('Y Hit found');
            }

            if (xhit && yhit) return true;
        }

        return false;
    }
    catch(e) { this.logger.error(e); throw e; }
}

/**
 * Set the field value on a Dialog object.
 * @param fieldName
 * @param value
 */
Dialog.prototype.getFormValue = function() {
    try {

        /*
         * Reference to `this`
         */

        var module = this;

        /*
         * Get field values.
         */

        var values = {};
        for (var i = 0; i < module._fields.length; i++) {
            var name     = module._fields[i].name;
            var target   = module._fields[i].target;
            var theField = target[name];
            values[name] = theField[module._hasValueProperty(theField) ? 'value' : 'text']; // module.get(name);
        }
        return values;
    }
    catch(e) { this.logger.error(e); throw e; }
}

/**
 * Set the field value on a Dialog object.
 * @param fieldName
 * @param value
 */
Dialog.prototype.set = function(fieldName, value) {
    var theField = this.window[fieldName];
    theField[this._hasValueProperty(theField) ? 'value' : 'text'] = value;
}

/**
 * Get a field value from the Dialog object.
 * @param fieldName
 * @returns {*}
 */
Dialog.prototype.get = function(fieldName) {
    var theField = this.window[fieldName];
    return theField[this._hasValueProperty(theField) ? 'value' : 'text'];
}

/**
 * Show the dialog window.
 */
Dialog.prototype.show = function() {
    this.window.show();
}

/**
 * Close the dialog window.
 */
Dialog.prototype.close = function() {

    var module = this;

    var callback = module['onClose'] || module['onclose'];

    if (typeof callback === 'function') {
        module.addEventListener('onClose', callback);
    }

    module.dispatchEvent('onclose', module);

    module.window.close();
}


extend(Observable, Dialog);
