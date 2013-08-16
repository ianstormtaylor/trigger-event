
var create = require('create-event');


/**
 * Expose `trigger`.
 */

module.exports = trigger;


/**
 * Trigger an event of `type` on an `el` with optional `options`.
 *
 * @param {String} type
 * @param {Element} el
 * @param {Object} options
 */

function trigger (type, el, options) {

  // default el is `window`
  if (2 === arguments.length) {
    options = el;
    el = window;
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