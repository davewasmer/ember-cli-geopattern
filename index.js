/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-geopattern',
  included: function(app) {
    app.import('bower_components/geopattern/js/geopattern.min.js');
  },
};
