
var create = require('create-event');


/**
 * Expose `trigger`.
 */

module.exports = trigger;


/**
 * Trigger an event of `type` on an `el` with `options`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Object} options
 */

function trigger (el, type, options) {

  // default el is `document`
  if ('string' === typeof el) {
    options = type;
    type = el;
    el = document;
  }

  var e = create(type, options);
  el.dispatchEvent
    ? el.dispatchEvent(e)
    : el.fireEvent(ieify(type), e);
}


/**
 * Convert a type into an IE-specific type.
 *
 * @param {String} type
 * @return {String}
 */

function ieify (type) {
  return 'on' + type[0].toUpperCase() + type.slice(1);
}