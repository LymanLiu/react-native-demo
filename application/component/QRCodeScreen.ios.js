'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VibrationIOS,
} = React;

var Camera = require('react-native-camera');

var QRCodeScreen = React.createClass({
  count:0,
  propTypes: {
    barCodeFlag:React.PropTypes.bool,
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      cancelButtonVisible: true,
      cancelButtonTitle: 'Cancel',
    };
  },

  _onPressCancel: function() {
    var $this = this;

    $this.props.navigator.pop();
    if ($this.props.onCancel) {
      $this.props.onCancel();
    }
  },

  _onBarCodeRead: function(result) {
    var $this = this;

    if (this.barCodeFlag) {
      this.barCodeFlag = this.props.barCodeFlag;
      //console.log('____qrcondscree.js:amos____****____');
      console.log(result);
      VibrationIOS.vibrate();
        //if(4<=$this.count++)$this.props.navigator.pop();
        
        
      $this.props.onSucess(result.data);
      /*setTimeout(function() {
        
      }, 1000);*/
    }
  },

  render: function() {
    var cancelButton = null;
    this.barCodeFlag = true;//if continue
    
    if (this.props.cancelButtonVisible) {
      cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;
    }

    return (
      <Camera barCodeFlag={false} onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
          {cancelButton}
        </View>
        
      </Camera>
    );
  },
});

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  camera: {
    flex:1,
    justifyContent: 'center',
    alignItems:'stretch',
    //alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    marginTop:20,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
  },

  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
  
});

module.exports = QRCodeScreen;
