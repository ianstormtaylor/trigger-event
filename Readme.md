
# trigger-event

  Programmatically trigger a DOM event. Useful for testing mostly.

## Installation

    $ component install ianstormtaylor/trigger-event

## Example
  
```js
var trigger = require('trigger-event');
trigger('keydown', window, { key: 'enter' });
```

  Supported events:

    click
    dblclick
    keydown
    keyup

  For options, check out [`ianstormtaylor/create-event`](https://github.com/ianstormtaylor/create-event).

## License

  MIT
