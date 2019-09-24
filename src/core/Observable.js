var Observable = function() {}

/**
 * Private event listeners table.
 * @type {Array}
 * @private
 */
Observable.prototype._eventListeners = [];

/**
 * Add a custom event listener.
 * @param eventName
 * @param callback
 */
Observable.prototype.addEventListener = function(eventName, callback) {
    try {
        if (typeof this._eventListeners[eventName] === 'undefined') {
            this._eventListeners[eventName] = [];
        }
        this._eventListeners[eventName].push(callback);
    }
    catch(e) { throw e }
}

/**
 * Remove custom event listener.
 * @param eventName
 * @param callback
 */
Observable.prototype.removeEventListener = function(eventName, callback) {
    try {
        if (typeof this._eventListeners[eventName] === 'undefined')  return;

        var events   = this._eventListeners[eventName];
        var filtered = [];
        var module   = this;

        for (var i = 0; i < events.length; i++) {
            if (typeof events[i] !== 'function') continue;

            if (events[i].toString() !== callback.toString()) {
                filtered.push(events[i]);
            }
        }

        this._eventListeners[eventName] = filtered;
    }
    catch(e) { throw e }
}

/**
 * Dispatch custom event.
 * @param eventName
 * @param data
 */
Observable.prototype.dispatchEvent = function(eventName, data) {
    try {
        var module = this;

        if (typeof this._eventListeners[eventName] === 'undefined')  return;

        var events = this._eventListeners[eventName];

        for (var i = 0; i < events.length; i++) {
            events[i].call(module, data);
        }
    }
    catch(e) { throw e }
}
