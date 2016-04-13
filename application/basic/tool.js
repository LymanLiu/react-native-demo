/* @flow */
'use strict';

//var React = require('react-native');
function Tool(){
	var Alert = require('react-native').Alert;
	var Prompt = require('react-native-prompt');

	this.alert = function(title,msg,funs,type){
		console.log(title);
		Alert.alert(title,msg,funs,type);
	}

}


module.exports = Tool;
