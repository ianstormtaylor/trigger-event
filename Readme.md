# trigger-event

  Programmatically trigger a DOM event. Useful for testing mostly.

## Installation

    $ component install ianstormtaylor/trigger-event

## Example
  
```js
var trigger = require('trigger-event');
trigger('keydown', { key: 'enter' });
trigger('click', button, { meta: true });
```

## API

### trigger(type, [element], [options])

  Types:

    'click'
    'dblclick'
    'keydown'
    'keyup'

  Element will default to `window` if none is provided.

  Default `options`:

    alt        : false,
    bubbles    : true,
    button     : 0,
    cancelable : true,
    clientX    : 0,
    clientY    : 0,
    ctrl       : false,
    detail     : 1,
    key        : 0, // can be a string like 'enter' for convenience
    meta       : false,
    screenX    : 0,
    screenY    : 0,
    shift      : false,
    view       : window

## License

  MIT
