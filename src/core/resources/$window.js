
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

var $window = function(options) {

    this.instance = {}; // new Window();

    this.props = [
        'type',
        'width',
        'height',
        'orientation',
        'alignChildren',
        'preferredSize',
        'text',
        'margins',
        'graphics',
        'visible',
        'bounds',
        'frameBounds',
        'frameLocation',
        'frameSize',
        'location',
        'maximumSize',
        'minimumSize',
        'preferredSize',
        'size',
        'windowBounds',
        'characters',
        'justify',
        'active',
        'shortcutKey',
        'cancelElement',
        'defaultElement',
        'maximized',
        'minimized',
        'spacing',
        'indent',
        'alignment',
        'enabled',
        'helpTip',
        'opacity',
        'children'
    ];

    this.props.map(function(name) {
        $window.prototype[name] = function(value) {
            $window.instance[name] = value;
            return this;
        }
    });

    this.defaults = extend({
        type           : 'palette',
        width          : 300,
        height         : 350,
        orientation    : 'column',
        alignChildren  : 'left',
        preferredSize  : [300, 350],
        text           : 'New Dialog',
        margins        : 10,
        graphics       : null,
        visible        : true,
        bounds         : [0, 300, 0, 350],
        frameBounds    : [0, 300, 0, 350],
        frameLocation  : null,
        frameSize      : null,
        location       : null,
        maximumSize    : null,
        minimumSize    : null,
        preferredSize  : null,
        size           : null,
        windowBounds   : null,
        characters     : null,
        justify        : null,
        active         : null,
        shortcutKey    : null,
        cancelElement  : null,
        defaultElement : null,
        maximized      : null,
        minimized      : null,
        spacing        : null,
        indent         : null,
        alignment      : null,
        enabled        : null,
        helpTip        : null,
        opacity        : null,
        children       : null
    }, options);

    for (var key in options) {
        if (this.props.indexOf(key) != -1) {
            this.instance[name] = options[key];
        }
    }

    return this;
}

$window.prototype.orientation = function(value) {
    this.orientation = value;
    return this;
}

$window.prototype.alignChildren = function() {
    this.orientation = value;
    return this;
}

$window.prototype.preferredSize = function() {
    this.orientation = value;
    return this;
}

$window.prototype.text = function() {
    this.orientation = value;
    return this;
}

$window.prototype.margins = function() {
    this.orientation = value;
    return this;
}

$window.prototype.graphics = function() {
    this.orientation = value;
    return this;
}

$window.prototype.visible = function() {
    this.orientation = value;
    return this;
}

$window.prototype.bounds = function() {
    this.orientation = value;
    return this;
}

$window.prototype.frameBounds = function() {
    this.orientation = value;
    return this;
}

$window.prototype.frameLocation = function() {
    this.orientation = value;
    return this;
}

$window.prototype.frameSize = function() {
    this.orientation = value;
    return this;
}

$window.prototype.location = function() {
    this.orientation = value;
    return this;
}

$window.prototype.maximumSize = function() {
    this.orientation = value;
    return this;
}

$window.prototype.minimumSize = function() {
    this.orientation = value;
    return this;
}

$window.prototype.preferredSize = function() {
    this.orientation = value;
    return this;
}

$window.prototype.size = function() {
    this.orientation = value;
    return this;
}

$window.prototype.windowBounds = function() {
    this.orientation = value;
    return this;
}

$window.prototype.characters = function() {
    this.orientation = value;
    return this;
}

$window.prototype.justify = function() {
    this.orientation = value;
    return this;
}

$window.prototype.active = function() {
    this.orientation = value;
    return this;
}

$window.prototype.shortcutKey = function() {
    this.orientation = value;
    return this;
}

$window.prototype.cancelElement = function() {
    this.orientation = value;
    return this;
}

$window.prototype.defaultElement = function() {
    this.orientation = value;
    return this;
}

$window.prototype.maximized = function() {
    this.orientation = value;
    return this;
}

$window.prototype.minimized = function() {
    this.orientation = value;
    return this;
}

$window.prototype.spacing = function() {
    this.orientation = value;
    return this;
}

$window.prototype.indent = function() {
    this.orientation = value;
    return this;
}

$window.prototype.alignment = function() {
    this.orientation = value;
    return this;
}

$window.prototype.enabled = function() {
    this.orientation = value;
    return this;
}

$window.prototype.helpTip = function() {
    this.orientation = value;
    return this;
}

$window.prototype.opacity = function() {
    this.orientation = value;
    return this;
}

$window.prototype.children = function() {
    this.orientation = value;
    return this;
}

var win = new $window();

console.log('ok');
