/* @flow */
'use strict';

//control
var React = require('react-native');

var {
  StyleSheet,
  View,
  Navigator,
} = React;

var UIC = $.c('!UI');
var Route = React.createClass({

  componentDidMount: function() {
    
    
  },

  getInitialState: function() {
    //console.log('dfdfdfdf');
    return {
      selectedTab: 'individual',
      notifCount: 0,
      id:'home',
    };

  },

  _renderScene: function(route, navigator) {

    var V = null;
    switch(route.id){
        case 'home':
          V = $('v:Home');
          break;

        case 'individual':
          V = $('v:Individual');
          break;
        
        case 'work':
          V = $('v:Work');
          break;

        case 'login':
          V = $('v:Login');
          break;

        case 'seek':
          V = $('v:Seek');
          break;

        case 'register':
          V = $('v:Register');
          break;

        case 'info':
          V = $('v:Info');
          break;

        case 'scan':
          V = $.com('QRCodeScreen');
          break;
      }

    //console.log('======');
    //console.log(V.props);
    //console.log('======');
    return <V navigator={navigator} />

  },
  render: function() {

    return (
      <Navigator
        ref="navigator"
        renderScene={this._renderScene}
        initialRoute={{id: this.state.id}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    )
  }

});


var styles = StyleSheet.create({

});


module.exports = Route;
