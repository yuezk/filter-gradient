# filter-gradient
> Generate filter gradients for the old IE

[![Build Status][ci-img]][ci]

## Install

```sh
npm install filter-gradient --save
```

## Usage

```js
var filterGradient = require('filter-gradient');
var gradient = filterGradient('#7abcff', '#4096ee');

console.log(gradient);
// progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#FF7ABCFF', EndColorStr='#FF4096EE')
```

## API

### filterGradient(startColor, endColor?, gradientType?);

#### startColor

Type: `string`

The start color. Any CSS color formats, like `blue`, `rgb()`, `rgba()`, `#RRGGBBAA`, `hsl()`

### endColor

Type `string`

The end color. Like `startColor`, but it's optional. If you omit this, it will use the `startColor`, it will be useful if you 
want generate `rgba()` fallback for old IE.

### gradientType

Type `number`

`0` or `1`. `0` is vertical gradient, `1` is horizontal gradient, default value is `0`;

## CHANGELOG

### 2015-11-11

- First release.

## LICENSE

[MIT]


[ci-img]:       https://travis-ci.org/yuezk/filter-gradient.svg
[ci]:           https://travis-ci.org/yuezk/filter-gradient
[MIT]:          LICENSE
