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

} = React;

var Login = React.createClass({

	getInitialState: function() {
	  return {
	    username:'',
	    password:'',
	  };
	},

	componentDidMount: function() {

	},

  inputFocused: function(refName,offset) {

	  setTimeout(() => {

	    let scrollResponder = this.refs.scrollView.getScrollResponder();
	    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
	      React.findNodeHandle(this.refs[refName]),
	      offset, //additionalOffset
	      true
	    );

	  }, 50);
	},

  login: function(){
    var username = this.refs.username.props.value;
    var password = $.md5(this.refs.password.props.value);
    var $this=this;

    $('c!DM').login({
      username,
      password
    })
    .then(function(res){

      if(res.data.status=='0'){

        $.gvals.username = username;
        $.gvals.password = password;
        $this.props.navigator.replace({id:'home'});

      }else{

        $('#!tool').alert($.LN.LOGIN,res.data.msg);

      }

    });

  },

  pushSeek: function () {
    this.props.navigator.push( {id:'seek'} );
  },

  pushRegister: function () {
    this.props.navigator.push( {id:'register'} );
  },

  
	render: function() {
    return (
      <ScrollView ref='scrollView' contentContainerStyle={styles.main}  >

	      	<View style={styles.uWrap}>
	      		<Image
	      		  style={styles.uImg}
	      		  source={require('../source/images/person.png')} />
            <TextInput
	      		  autoCapitalize='none' 
	      		  ref='username' 
              onFocus={this.inputFocused.bind(this, 'username',100) }
              onBlur={this.inputFocused.bind(this, 'username',0) }
              onChangeText={(text) => {this.state.username=text;this.setState(this.state)}}
			        value={this.state.username}
              style={styles.uInput} 
              placeholder={$.LN.USERNAME} />
	      	</View>

	      	<View style={[styles.uWrap,{marginTop:10,}]}>
	      		<Image
	      		  style={styles.uImg}
	      		  source={require('../source/images/lock.png')} />
	      		<TextInput
	      			ref='password' 
              onFocus={this.inputFocused.bind(this, 'password',100) }
              onBlur={this.inputFocused.bind(this, 'password',0) }
	      			autoCapitalize='none'
	      			onChangeText={(text) => {this.state.password=text;this.setState(this.state)}}
  				    value={this.state.password}
	      			secureTextEntry={true}
	      			style={styles.uInput}
	      			placeholder={$.LN.PASSWORD} />
	      	</View>

	      	<View style={styles.bWrap}>
	            <View style={styles.bDivide}>
	      	  		<TouchableOpacity onPress={() => this.pushRegister() } style={styles.bTauch}>
	                	<Text style={styles.bText}>{$.LN.REGISTER}</Text>
	          		</TouchableOpacity>
	            </View>
	            <View style={styles.bDivide}>
	          		<TouchableOpacity onPress={() => this.login() } style={[styles.bTauch,{backgroundColor:'#00B2EB',}]} >
	              		<Text style={[styles.bText,{color:'#FFFFFF',}]}>{$.LN.LOGIN}</Text>
	          		</TouchableOpacity>
	            </View>
	        </View>

	        <View style={styles.oWrap}>
	        	<View style={styles.oDivide}>
	      	  		<TouchableOpacity  style={styles.oTauch}>
	                	<Text style={styles.oText}>{$.LN.PROBLEM_REPORT}</Text>
	          		</TouchableOpacity>
	            </View>
	            <View style={styles.oDivide}>
	          		<TouchableOpacity onPress={ ()=>this.pushSeek() }  style={[styles.oTauch,]} >
	              		<Text style={[styles.oText]}>{$.LN.FORGET_PASSWORD}</Text>
	          		</TouchableOpacity>
	            </View>
	        </View>

      </ScrollView>
    );
	}
});


var styles = StyleSheet.create({
   
  main:{
    //flexDirection:'row',
    flex:1,
    alignItems:'stretch',
    backgroundColor:'#F9F9F9',
    position:'relative',

  },
  oWrap:{
  	flex:1,
  	//alignSelf:'flex-end',
  	marginBottom:14,
  	//fontSize:12,
  	alignItems:'flex-end',
  	//backgroundColor:'red',
  	flexDirection:'row',
  },
  oDivide:{
  	flex:0.5,
  	alignItems:'center',
  },
  oTauch:{

  },
  oText:{
  	fontSize:10,
  	color:'#64C8F1',
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
  	marginTop:155,
  	alignItems:'center',
  	alignSelf:'center',
  	width:258,
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
  	//width:100,
  	height: 30,

  },

});


module.exports = Login;
