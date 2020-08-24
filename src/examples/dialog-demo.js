#target illustrator
#targetengine session

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

try {
	var $window = function(type) {
	
		/*
		 * Iterate over Window properties and create 
		 * wrapper functions on $window to set the values.
		 */
		for (var prop in Window) {
			this[prop] = (function(window, prop) {
				return function(value) {
					window.instance[prop] = value;
					return window;
				}
			})(this, prop);
		}
				
		/*
		 * Create pass-thru versions of Window.prototype.method on 
		 * the $window object.
		 */
		for (var prop in Window.prototype) {
		    if (Window.prototype[prop] instanceof Function) {
				this.prototype[prop] = (function(window, prop) {
					return function(value) {
						Window.prototype[prop].call(window, arguments);
						return window;
					}
				})(this, prop);
		    }
		}
			
		try {
		    this.instance = new Window(type || 'palette');
		    return this;
		}
		catch(e) {alert(e)}
	}

	$window.prototype.center = function() {
	    try {
	        this.instance.center();
	        return this;
	    }
	    catch(e) {alert(e)}
	}
	
	$window.prototype.show = function() {
	    try {
	        this.instance.show();
	        return this;
	    }
	    catch(e) {alert(e)}
	}
	
	$window.prototype.close = function() {
	    try {
	        this.instance.close();
	    }
	    catch(e) {alert(e)}
	}
	
	try { dialog.close() } catch(e){}
	
	dialog = new $window('palette')
		.orientation('column')
	    .text('New Window ' + new Date().getTime())
	    .preferredSize([350, 300])
	    .center();
	    
	// var button = dialog.add('button', [0, 100, 0, 24], 'Cancel');
	// 	button.onClick = function() { dialog.close(); }
	
	dialog.show();
}
catch(e) {alert(e)}