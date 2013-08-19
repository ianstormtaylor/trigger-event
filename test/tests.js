describe('trigger-event', function () {

var assert = require('assert')
  , bind = require('event').bind
  , trigger = require('trigger-event');

it('should trigger a click event', function (done) {
  bind(window, 'click', function (e) {
    assert(true === e.ctrlKey);
    done();
  });
  trigger(window, 'click', { ctrl: true });
});

it('should trigger a dblclick event', function (done) {
  bind(window, 'dblclick', function (e) {
    assert(true === e.ctrlKey);
    done();
  });
  trigger(window, 'dblclick', { ctrl: true });
});

it('should trigger a keydown event', function (done) {
  bind(window, 'keydown', function (e) {
    assert(27 === e.keyCode);
    done();
  });
  trigger(window, 'keydown', { key: 'esc' });
});

it('should trigger a keyup event', function (done) {
  bind(window, 'keyup', function (e) {
    assert(27 === e.keyCode);
    done();
  });
  trigger(window, 'keyup', { key: 'esc' });
});

});