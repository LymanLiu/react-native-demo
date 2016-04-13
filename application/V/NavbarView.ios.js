/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image
} = React;

var NavbarView = React.createClass({
	propTypes: {
	    leftText: React.PropTypes.string,
	    centerText: React.PropTypes.string,
	    rightImage: React.PropTypes.object,
	    leftImage: React.PropTypes.object,
	    pushBack: React.PropTypes.func,
	    navigator: React.PropTypes.object.isRequired,
	},
	getDefaultProps: function() {
		var $this = this;
		return {

			leftText: React.PropTypes.string,
			pushBack: function () {
				$this.navigatorPop();
				
			}

		};
	},

	navigatorPop:function(){
		this.props.navigator.pop();
	},

	render: function() {



		return (

			
			<View style={styles.wrap}>
				<TouchableOpacity onPress={()=>this.navigatorPop()} style={styles.wrapPush} >
					<View style={styles.left}>
						<Image
						  style={styles.leftImage }
						  source={ this.props.leftImage } />
						<Text> {this.props.leftText} </Text>
					</View>
				</TouchableOpacity>

				<View style={styles.center}>
					<Text style={styles.centerText}>{this.props.centerText}</Text>
				</View>
				<TouchableOpacity onPress={()=>this.navigatorPop()} style={styles.rightPush} >
					
					<View style={styles.right}>

						<Image
							style  = {styles.rightImage}
							source = {this.props.rightImage} />
					</View>

				</TouchableOpacity>
				
			</View>
			

		);
	}
});


var styles = StyleSheet.create({
	wrap:{
		backgroundColor:'#FFF',
		paddingTop:10,
		height: 50,
	    flexDirection: 'row',
	    //justifyContent: 'space-around',
	    borderWidth: 1,
	    borderTopWidth: 0,
	    borderLeftWidth: 0,
	    borderRightWidth: 0,
	    borderBottomColor: '#ccc',
	    //paddingBottom:10,
	},
	wrapPush:{
		width:50,
		marginBottom:10,
	},
	left:{
		width:50,
		height:30,
		flexDirection: 'row',
		alignItems:'center',
	},
	leftImage:{
		width:20,
	},
	leftText:{
		width:30,
	},
	center:{
		justifyContent:'center',
		//backgroundColor:'#dedeed',
		flex:1,
	},
	centerText:{
		textAlign:'center',
	},
	rightImage:{
		width:20,
		height:30,
	},
	rightPush:{
		width:50,
		marginBottom:10,
	},	
	right:{
		alignItems:'flex-end',
		width:50,
		height:30,
		//backgroundColor:'red',
	},
});


module.exports = NavbarView;
	