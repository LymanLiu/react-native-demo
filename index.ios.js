'use strict';

var React = require('react-native');
var { AppRegistry } = React;

global.$ = require('./application/basic/fate');


var HelloWorld = require('./application/V/RouteView');

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);


