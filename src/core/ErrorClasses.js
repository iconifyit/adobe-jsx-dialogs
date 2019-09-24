/**
 * NotImplementedError custom error.
 * @param message
 * @param stack
 * @constructor
 */
var NotImplementedError = function(message, stack) {
    this.name    = "NotImplementedError";
    this.message = message || "Unspecified NotImplementedError";
    this.stack   = stack;
}
NotImplementedError.prototype = Error.prototype;

/**
 * NotImplementedError custom error.
 * @param message
 * @param stack
 * @constructor
 */
var UserCancelledError = function(message, stack) {
    this.name    = "UserCancelledError";
    this.message = message || "Unspecified UserCancelledError";
    this.stack   = stack;
}
UserCancelledError.prototype = Error.prototype;

