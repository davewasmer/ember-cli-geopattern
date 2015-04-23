/* global GeoPattern */

import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: 'style',

  style: Ember.computed('value', function() {
    var pattern = GeoPattern.generate(this.get('value'), {
      color: this.get('color'),
      baseColor: this.get('baseColor'),
      generator: this.get('generator')
    });
    return `background-image: ${pattern.toDataUrl()}`;
  }),

  value: ''

});
