
/**
 * Dialog field types.
 * @type {{
 *     CHECKBOX : string,
 *     BUTTON   : string,
 *     LABEL    : string,
 *     RADIO    : string,
 *     TEXT     : string,
 *     LIST     : string
 * }}
 */
var FieldTypes = {
    TEXT       : 'edittext',
    LABEL      : 'statictext',
    LIST       : 'listbox',
    CHECKBOX   : 'checkbox',
    BUTTON     : 'button',
    ICONBUTTON : 'iconButton',
    RADIO      : 'radiobutton',
    PANEL      : 'panel',
    GROUP      : 'group'
};

/**
 * Dialog types.
 * @type {{
 *    DIALOG  : string,
 *    PALETTE : string,
 *    CUSTOM  : string,
 *    MODAL   : string
 * }}
 */
var WindowTypes = {
    DIALOG  : "dialog",
    PALETTE : "palette",
    MODAL   : "modal",
    CUSTOM  : "custom"
}

/**
 * Console object wrapper for the logger.
 * @type {Console | console}
 */
var console = console || (function() {

    var Console  = function(){}
    var callback = function(logger) {

        if (! logger) return function(){};
        if (typeof Folder === 'undefined') return function(){};

        return function() {
            var args = [].slice.call(arguments);
            logger.info(args.join(' '));
        }
    }(logger);

    Console.prototype.log   = callback;
    Console.prototype.info  = callback;
    Console.prototype.error = callback;

    return new Console();
})();

/**
 * Extends one object with members from another.
 * @param   {object}    Parent
 * @param   {object}    Child
 * @returns {*}
 */
function extend(Parent, Child) {
    try {
        var __prototype__ = merge(Child.prototype || {},  Parent.prototype, true);

        Object.setPrototypeOf ?
            Object.setPrototypeOf(Child, __prototype__) :
            Child.__proto__ = __prototype__;
    }
    catch(e) { alert(e) }
}

var RandomColor = function() {
    function getRandomHexColor() {
        var hexes = [
            'A', 'B', 'C', 'D', 'E', 'F',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        function random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return [
            "#",
            hexes[random(0,15)],
            hexes[random(0,15)],
            hexes[random(0,15)]
        ].join('');
    }
    return getRandomHexColor()
}

/**
 * Merges `target` with values from `source`.
 * @param   {object}    target      The target object (this will be updated and returned)
 * @param   {object}    source      The new values to add to target.
 * @param   {boolean}   overwrite   If false, value of target.key will be preserved.
 * @returns {target}
 */
function merge(target, source, overwrite) {
    overwrite = overwrite === undefined ? true : false;
    for (var key in source) {
        if (target.hasOwnProperty(key) && ! overwrite) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Inherit from a superclass
 * @param subClass
 * @param superClass
 * @private
 */
function _inherits(SuperClass, SubClass) {
    if (typeof SuperClass !== "function" && SuperClass !== null) {
        throw new Error("Super expression must either be null or a function, not " + typeof SuperClass);
    }
    SubClass.prototype = Object.create(SuperClass && SuperClass.prototype, {
        constructor: {
            value        : SubClass,
            enumerable   : false,
            writable     : true,
            configurable : true
        }
    });
    if (SuperClass) {
        Object.setPrototypeOf ?
            Object.setPrototypeOf(SubClass, SuperClass) :
            SubClass.__proto__ = SuperClass;
    }
}

/**
 * Noop function.
 */
var noop = function noop() {};

/**
 * Get screen dimensions.
 * @returns {*}
 */
function getScreenSize() {
    var screen;

    for (i=0; i<$.screens.length; i++) {
        if ($.screens[i].primary == true) {
            screen = $.screens[i];
            screen.width = screen.right - screen.left;
            screen.height = screen.bottom - screen.top;
        }
    }
    return screen;
};

/**
 * Shortcut for JSON.stringify(*)
 * @param object
 * @returns {string}
 */
function stringify(object) {
    return JSON.stringify(object);
}
