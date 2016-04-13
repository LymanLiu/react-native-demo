/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,

} = React;

var $this = {

	getInitialState: function() {
	  return {
	    username: '',
	    password: '',
	    repassword: '',
	    phone: '',
	    PIN: '',
	  };
	},

  	inputFocused:function (refName,offset) {
	  //console.log(this.refs.scrollView);
	  var T = this;
	  setTimeout(() => {
	    let scrollResponder = this.refs.scrollView.getScrollResponder();
	    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
	      React.findNodeHandle(this.refs[refName]),
	      offset, //additionalOffset
	      true
	    );
	  }, 50);
	},

	sendPIN: function(){

		$('c!DM').sendPIN({

			mobile_phone: this.refs.mobilePhone.props.value,
			forseek:'1',

		})
		.then(function(res){

			if(res.data.status=='0'){
				$('#!tool').alert($.LN.SEEK_BACK_RESPONDE,$.LN.SEND_MESSAGE_SUCCESS);
			}else{
				$('#!tool').alert($.LN.SEEK_BACK_RESPONDE,res.data.msg);
			}
		});


	},

	seekBack: function(){
		var $this = this;
		$('c!DM').seekBack({

			mobile_phone : this.refs.mobilePhone.props.value,
			new_password : $.md5(this.refs.password.props.value),
			re_password : $.md5(this.refs.repassword.props.value),
			PIN : this.refs.PIN.props.value,

		})
		.then(function(res){

			if(res.data.status=='0'){
				$('#!tool').alert(
					$.LN.SEEK_BACK_RESPONDE,		
					res.data.msg,
					[
						{
							text: $.LN.OK,
							onPress: function (){
								$this.props.navigator.pop();
							},
						},
						{
							text: $.LN.CANCEL,
							onPress: function (){
								$this.props.navigator.pop();
							},
						},
					]
				);
			}else{

				$('#!tool').alert($.LN.SEEK_BACK_RESPONDE,res.data.msg);
			}

		});

	},

	navigatorPop: function () {
		this.props.navigator.pop();
	},


	render: function() {
		return (
			<ScrollView ref='scrollView' contentContainerStyle={styles.main}  >
				<View style={[styles.uWrap]}>
			  		<Image
			  		  style={styles.uImg}
			  		  source={require('../source/images/phone.png')} />
			  		<TextInput
			  			ref='mobilePhone'
			  			autoCapitalize='none'
			  			keyboardType='phone-pad'
			  			onChangeText={(text) => {this.state.mobilePhone=text;this.setState(this.state)}}
						value={this.state.mobilePhone}
			            onFocus={this.inputFocused.bind(this, 'mobilePhone',80) }
			            onBlur={this.inputFocused.bind(this, 'mobilePhone',0) }
			  			style={styles.uInput}
			  			placeholder={$.LN.MOBILEPHONE} />
			  	</View>

			  	<View style={[styles.uWrap,{marginTop:13,}]}>
			  		<Image
			  		  style={styles.uImg}
			  		  source={require('../source/images/lock.png')} />
			  		<TextInput
			  			ref='password' 
			  			autoCapitalize='none'
			            onFocus={this.inputFocused.bind(this, 'password',80) }
			            onBlur={this.inputFocused.bind(this, 'password',0) }
			            onChangeText={(text) => {this.state.password=text;this.setState(this.state)}}
						value={this.state.password}
			  			autoCapitalize='none'
			  			secureTextEntry={true}
			  			style={styles.uInput}
			  			placeholder={$.LN.PASSWORD} />
			  	</View>
			  	<View style={[styles.uWrap,{marginTop:13,}]}>
			  		<Image
			  		  style={styles.uImg}
			  		  source={require('../source/images/lock.png')} />
			  		<TextInput
			  			ref='repassword' 
			  			autoCapitalize='none'
			            onFocus={this.inputFocused.bind(this, 'repassword',80) }
			            onBlur={this.inputFocused.bind(this, 'repassword',0) }
			            onChangeText={(text) => {this.state.repassword=text;this.setState(this.state)}}
						value={this.state.repassword}
			  			autoCapitalize='none'
			  			secureTextEntry={true}
			  			style={styles.uInput}
			  			placeholder={$.LN.RE_PASSWORD} />
			  	</View>
			  	<View style={[styles.uWrap,{marginTop:13,}]}>
			  		<TouchableOpacity onPress={()=> this.sendPIN() }>
			  			<Text style={styles.getPIN}>{$.LN.GET_PIN}</Text>
			  		</TouchableOpacity>
			  		<TextInput
			  			ref='PIN'
			  			autoCapitalize='none'
			  			keyboardType='number-pad'
			            onFocus={this.inputFocused.bind(this, 'PIN',80) }
			            onBlur={this.inputFocused.bind(this, 'PIN',0) }
			            onChangeText={(text) => {this.state.PIN = text;this.setState(this.state)}}
						value={this.state.PIN}
			  			style={styles.uInput}
			  			placeholder={$.LN.PIN} />
			  	</View>

			  	<View style={styles.bWrap}>
			        <View style={styles.bDivide}>
			  	  		<TouchableOpacity onPress={() => this.navigatorPop() } style={styles.bTauch}>
			            	<Text style={styles.bText}>{$.LN.LOGIN}</Text>
			      		</TouchableOpacity>
			        </View>
			        <View style={styles.bDivide}>
			      		<TouchableOpacity onPress={() => this.seekBack() } style={[styles.bTauch,{backgroundColor:'#00B2EB',}]} >
			          		<Text style={[styles.bText,{color:'#FFFFFF',}]}>{$.LN.SEEK_BACK}</Text>
			      		</TouchableOpacity>
			        </View>
			    </View>

			</ScrollView>
		);
	}
};

var Seek = React.createClass($this);


var styles = StyleSheet.create({
    main:{
    //flexDirection:'row',
    flex:1,
    alignItems:'stretch',
    backgroundColor:'#F9F9F9',

  },
  getPIN:{
  	color:'#64C8F1',
  	fontSize:14,
  	marginBottom:-7,
  },
  bWrap:{
  	marginTop:53,
  	flexDirection:'row',
  },
  bDivide:{
  	flex:0.5,
  	alignItems:'center',
  },
  bTauch:{
  	width:96,
  	height:35,
  	borderRadius:6,
  	justifyContent:'center',
  	alignItems:'center',
  	backgroundColor:'#FFFFFF',
  	borderWidth:1,
  	borderColor:'#EAEAEA',
  },
  bText:{
  	width:80,
  	height:33,
  	//borderRadius:5,
  	fontSize:14,
  	lineHeight:22,
  	textAlign:'center',

  	
  },
  uWrap:{
  	marginTop:95,
  	alignItems:'center',
  	alignSelf:'center',
  	width:248,
  	justifyContent:'center',
  	flexDirection:'row',
  	height: 34,
    borderBottomWidth:1,
  	borderBottomColor:'#64C8F1',
  },
  uImg:{

  	height: 23,
  	width:23,
  },

  uInput:{

  	marginBottom:1,
  	paddingLeft:8,
  	alignSelf:'auto',
  	fontSize:12,
  	lineHeight:30,
  	//backgroundColor:'#a3aFa4',
  	flex:0.9,
  	paddingBottom:-12,
  	//width:80,
  	height: 30,

  },


});


module.exports = Seek;
