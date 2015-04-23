# ember-cli-geopattern

Component wrapper for the [geopattern library](https://github.com/btmills/geopattern).

## Installing

```sh
$ ember install ember-cli-geopattern
```

## Usage

Use to generate randomized tiling SVG backgrounds. Use the component in your templates:

```hbs
{{! username = '@davewasmer' }}
{{geo-pattern value=username}}
```

which produces the following pattern, applied as a `background-image` to the component's element:

![@davewasmer pattern](http://i.imgur.com/6YT929j.png)

You can use pattern by itself, by adding a CSS class with a `width` and `height` to the component:

```hbs
{{geo-pattern value=username class='avatar'}}
```

Or you can provide content to go inside the component's element (i.e. appear on top of the patterned background):

```hbs
{{#geo-pattern value=username}}
  Your username is: {{username}}
{{/geo-pattern}}
```

## Options

All the [geopattern library options](https://github.com/btmills/geopattern#api) are available as options to the component itself (i.e. `{{geo-pattern value='foo' generator='hexagons'}}`):

* **color** - the exact CSS hexadecimal color value to use
* **baseColor** - the base CSS hexadecimal color to work from. Think of this like the seed to a random number generator - this won't be the output color, but will be used to generate the output color.
* **generator** - the pattern to use. Available patterns ([view samples](https://github.com/jasonlong/geo_pattern#available-patterns)):
  * `octogons`
  * `overlappingCircles`
  * `plusSigns`
  * `xes`
  * `sineWaves`
  * `hexagons`
  * `overlappingRings`
  * `plaid`
  * `triangles`
  * `squares`
  * `concentricCircles`
  * `diamonds`
  * `tessellation`
  * `nestedSquares`
  * `mosaicSquares`
  * `chevrons`
