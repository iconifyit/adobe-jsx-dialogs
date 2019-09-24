var polyfills = {loaded: true};
/**
 * Adds replaceAll method to String
 * @param search
 * @param replacement
 * @returns {string}
 */
if (! String.prototype.replaceAll) {
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
}

/**
 * Adds trim function to the String class.
 * @returns {string}
 */
if (! String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

/**
 * Adds a method to star out a string (like a password).
 * @returns {string}
 */
if (! String.prototype.obfuscate) {
    String.prototype.obfuscate = function() {
        return this.replace(/./g, "*");
    };
}

/**
 * Add method to test if a number is between two values.
 */
if (! Number.prototype.between) {
    Number.prototype.between = function(a, b, inclusive) {
        var min = Math.min(a, b),
            max = Math.max(a, b);
        return inclusive ? this >= min && this <= max : this > min && this < max;
    }
}

if (! Array.prototype.map) {
    /**
     * Add map method to Array prototype.
     * @param fn
     */
    Array.prototype.map = function(fn) {
        for (var i = 0; i < this.length; i++) {
            this[i] = fn.call(this, this[i]);
        }
        return this;
    }
}

/**
 * Add Array.indexOf support if not supported natively.
 */
if (! Array.prototype.indexOf) {
    /**
     * Gets the index of an element in an array.
     * @param what
     * @param i
     * @returns {*}
     */
    Array.prototype.indexOf = function(what, i) {
        i = i || 0;
        var L = this.length;
        while (i < L) {
            if(this[i] === what) return i;
            ++i;
        }
        return -1;
    };
}

/**
 * Add Array.remove support.
 * @returns {Array}
 */
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


if (! Object.prototype.get) {
    /**
     * Get a value from an object or array.
     * @param   {object|array}    subject
     * @param   {string}          key
     * @param   {*}               fallback
     * @returns {*}
     */
    Object.prototype.get = function(key, fallback) {
        var value = fallback;
        if (this.hasOwnProperty(key)) {
            value = this[key];
        }
        return value;
    }
}

if (! Object.prototype.set) {
    /**
     * Set a member value.
     * @param key
     * @param value
     * @returns {*}
     */
    Object.prototype.set = function(key, value) {
        this[key] = value;
        return this[key];
    }
}

if (! Object.prototype.has) {
    /**
     * Test if an object has a given property.
     * @param   {string}          key
     * @returns {boolean}
     */
    Object.prototype.has = function(key) {
        return this.hasOwnProperty(key);
    }
}

if (! Object.prototype.update) {
    /**
     * Extends {Object} target with properties from {Object} source.
     * No new properties are added to the object meaning only properties that
     * exist in both source and target will be updated.
     * @param source
     * @returns {*}
     */
    Object.prototype.update = function(source) {
        for (var key in source) {
            if (this.hasOwnProperty(key)) {
                this[key] = source[key];
            }
        }
        return this;
    }
}

if (! Object.prototype.extend) {
    /**
     * Extends {Object} target with properties from {Object} source.
     * Any values that are already set will not be updated. New properities
     * will be added to the object.
     * @param source
     * @returns {*}
     */
    Object.prototype.extend = function(source) {
        for (var key in source) {
            if (this.get(key, false)) {
                continue;
            }
            this[key] = source[key];
        }
        return this;
    }
}
