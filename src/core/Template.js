/**
 *
 * @param path
 * @constructor
 */
var Template = function(path) {

    /**
     * The template path.
     * @type {string}
     */
    this.path   = String(path);

    /**
     * The text template.
     * @type {string}
     */
    this.tpl    = '';

    /**
     * The tokens found in the template.
     * @type {Array}
     */
    this.tokens = [];

    /**
     * The keys of the tokens in the template.
     * @type {Array}
     */
    this.keys   = [];

    /**
     * The data object to merge with the template.
     * @type {object}
     */
    this.data = {};

    if (path) {
        this.parse(path);
    }
}

/**
 * Parses the raw template.
 * @param path
 */
Template.prototype.parse = function(path) {

    if (path == undefined) path = this.path;

    this.tpl    = Utils.read_file(path);
    this.tokens = this.tpl.match(/{{([^}]+)}}/gi);
    this.keys   = this.tokens.toString().replace(/{{/gi, '').replace(/}}/gi, '').split(',');
}

/**
 * Gets the tokens found in the template.
 * @returns {Array}
 */
Template.prototype.getTokens = function() {
    return this.tokens;
}

/**
 * Gets the keys from the template.
 * @returns {Array}
 */
Template.prototype.getKeys = function() {
    return this.keys;
}

/**
 * Merges the data object with the template.
 * @param _stringdd
 * @param vars
 * @returns {*}
 */
Template.prototype.render = function(data) {

    var _string = this.tpl;

    for (var key in data) {
        _string = _string.replace(
            new RegExp('{{' + key + '}}', 'gi'),
            data[key] || ''
        );
    }

    var tokens = this.getTokens();
    var lines = _string.split(',\n');
    var clean = [];

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.indexOf('{{') === -1) {
            clean.push(line);
        }
    }

    if (clean[clean.length - 1].trim() != '}') {
        clean.push('}');
    }

    _string = clean.join(',\n') ;

    return _string;
}

/**
 * Replace tokens in a string with key => value paired vars.
 * @param theText
 * @param theVars
 * @returns {*}
 * @private
 */
function txt(theText, theVars) {
    for (var token in theVars) {
        theText = theText.replace(
            new RegExp("{" + token + "}","g"),
            theVars[token]
        );
    }
    return theText;
}
