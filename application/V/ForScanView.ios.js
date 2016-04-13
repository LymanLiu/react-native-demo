'use strict';
var React = require('react-native');
var axios = require('axios');
//var SQLite = require('react-native-sqlite-storage');
var QRCodeScreen = require('../component/QRCodeScreen');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} = React;


var ForScan = React.createClass({
  render: function() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={this._onPressQRCode}>
          <Text>Read QRCode</Text>
        </TouchableOpacity>
      </View>
    );
  },

  _onPressQRCode: function() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title:$.LN.QR_CODE,
      passProps: {
        barCodeFlag:true,//either continue;
        onSucess: this._onSucess,
      },
    });
  },

  _onSucess: function(result) {
    console.log(result);
    
    axios.post('http://127.0.0.1:8082', {
      order_code:result
    })
    .then(function (response) {
      console.log('-------------');
      console.log(response);
      console.log('-------------');
    })
    .catch(function (response) {
      console.log(response);
    });

  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = ForScan;