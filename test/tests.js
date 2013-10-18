describe('trigger-event', function () {

  var assert = require('assert');
  var bind = require('event').bind;
  var trigger = require('trigger-event');

  beforeEach(function () {
    this.el = document.createElement('div');
  });

  it('should trigger a click event', function (done) {
    bind(this.el, 'click', function (e) {
      assert(true === e.ctrlKey);
      done();
    });
    trigger(this.el, 'click', { ctrl: true });
  });

  it('should trigger a dblclick event', function (done) {
    bind(this.el, 'dblclick', function (e) {
      assert(true === e.ctrlKey);
      done();
    });
    trigger(this.el, 'dblclick', { ctrl: true });
  });

  it('should trigger a keydown event', function (done) {
    bind(this.el, 'keydown', function (e) {
      assert(27 === e.keyCode);
      done();
    });
    trigger(this.el, 'keydown', { key: 'esc' });
  });

  it('should trigger a keyup event', function (done) {
    bind(this.el, 'keyup', function (e) {
      assert(27 === e.keyCode);
      done();
    });
    trigger(this.el, 'keyup', { key: 'esc' });
  });

});