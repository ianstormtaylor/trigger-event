describe('trigger-event', function () {

var assert = require('assert')
  , bind = require('event').bind
  , trigger = require('trigger-event');

it('should trigger a click event', function (done) {
  bind(window, 'click', function (e) {
    assert(true === e.ctrlKey);
    done();
  });
  trigger('click', window, { ctrl: true });
});

it('should trigger a dblclick event', function (done) {
  bind(window, 'dblclick', function (e) {
    assert(true === e.ctrlKey);
    done();
  });
  trigger('dblclick', window, { ctrl: true });
});

it('should trigger a keydown event', function (done) {
  bind(window, 'keydown', function (e) {
    assert(27 === e.keyCode);
    done();
  });
  trigger('keydown', window, { key: 'esc' });
});

it('should trigger a keyup event', function (done) {
  bind(window, 'keyup', function (e) {
    assert(27 === e.keyCode);
    done();
  });
  trigger('keyup', window, { key: 'esc' });
});

});