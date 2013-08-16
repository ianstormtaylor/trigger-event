
# trigger-event

  Programmatically trigger a DOM event. Useful for testing mostly.

## Installation

    $ component install ianstormtaylor/trigger-event

## Example
  
```js
var trigger = require('trigger-event');
trigger('keydown', { key: 'enter' });
```

## API

### trigger(type, [element], [options])

  `type` can be either `click`, `dblclick`, `keydown` or `keyup`.

  `element` defaults to `window`.

  For `options`, check out [`ianstormtaylor/create-event`](https://github.com/ianstormtaylor/create-event).

## License

  MIT
