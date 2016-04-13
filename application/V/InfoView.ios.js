/* @flow */
'use strict';
var React = require('react-native');

//control
var NavbarView  = $('v:Navbar');

React.Prompt = require('react-native-prompt');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Image,
  TextInput,
  Prompt,
} = React;


var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var Work = React.createClass({

	_loadPage(options){
		//console.log(options);
		if(options.id){

			this.props.navigator.push({id:options.id});
		}
	},

	getInitialState: function() {
		return {

			user_name: '',
			nick_name: '',
			real_name: '',
			sex: '',
			tel_phone: '',
			mobile_phone: '',
			agent_phone: '',
			qq: '',
			email: '',
			school: '',
			entrance_year: '',
			major: '',
			age: '',
			birthday: '',
			height: '',
			ali_account: '',
			bank_account: '',
			figure: '',
			cer_id: '',
			prv_image: '',
			id_back_image: '',
			id_front_image: '',
			head_image: '',

			u:'dfssfdsfs',

			promptKey: 'user_name',
			promptHolder: $.LN.PLEASE_TYPE,
			promptVisible:false,
		};
	},

	componentDidMount: function() {
		$('c!DM').getInfo({
			username:$.gvals.username,
			callBack:this._initData,
		})
		.then(function(data){
			//console.log(data);
		})
		.catch(function(err){
			console.log(err);
		});
	},

	_initData: function (data) {
		var data = data[0];
		this.setState({
			user_name: data['user_name'],
			nick_name: data['nick_name'],
			real_name: data['real_name'],
			sex: data['sex'],
			tel_phone: data['tel_phone'],
			mobile_phone: data['mobile_phone'],
			agent_phone: data['agent_phone'],
			qq: data['qq'],
			email: data['email'],
			school: data['school'],
			entrance_year: data['entrance_year'],
			major: data['major'],
			age: data['age'],
			birthday: data['birthday'],
			height: data['height'],
			ali_account: data['ali_account'],
			bank_account: data['bank_account'],
			figure: data['figure'],
			cer_id: data['cer_id'],
			prv_image: data['prv_image'],
			id_back_image: data['id_back_image'],
			id_front_image: data['id_front_image'],
			head_image: data['head_image'],
		});
		//console.log(data);
	},


	_initItemsView: function(){ 
		var T = this;
		return this.itemsView({

			items:[{
				key:'head_image',
				type:'image',
				left:$.LN.HEAD_IMAGE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'user_name',
				left:$.LN.USERNAME,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'nick_name',
				left:$.LN.NICK_NAME,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'real_name',
				left:$.LN.REAL_NAME,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'sex',
				left:$.LN.SEX,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'tel_phone',
				left:$.LN.TEL_PHONE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'mobile_phone',
				left:$.LN.MOBILE_PHONE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'agent_phone',
				left:$.LN.AGENT_PHONE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'qq',
				left:$.LN.QQ,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'email',
				left:$.LN.EMAIL,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'school',
				left:$.LN.SCHOOL,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'entrance_year',
				left:$.LN.ENTRANCE_YEAR,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'major',
				left:$.LN.MAJOR,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'age',
				left:$.LN.AGE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'birthday',
				left:$.LN.BIRTHDAY,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'height',
				left:$.LN.HEIGHT,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'ali_account',
				left:$.LN.ALI_ACCOUNT,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'bank_account',
				left:$.LN.BANK_ACCOUNT,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'figure',
				left:$.LN.FIGURE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'cer_id',
				left:$.LN.CER_ID,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'prv_image',
				left:$.LN.PRAVITE_IMAGE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'id_back_image',
				left:$.LN.ID_BACK_IMAGE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},{
				key:'id_front_image',
				left:$.LN.ID_FRONT_IMAGE,
				center:'',
				right:$.LN.USERNAME,
				func:T._openPrompt,
			},],
		});
	},


	_openPrompt: function(key){

		this.state.promptVisible = true;
		this.state.promptHolder = '';
		this.state.promptKey = key;
		this.setState(this.state);
	},

	_cancelPrompt: function (key) {

		console.log('=============');
		console.log(key);
		console.log('=============');

		this.state.promptVisible = false;
		this.setState(this.state);
	},

	_confirmPrompt: function (key,val) {

		console.log('=============');
		console.log(key);
		console.log(val);

		console.log('=============');
		var T = this;
		if(val){
			$('c!DM').updateInfo({
				key,
				val,
			})
			.then(function(data){

				T.state.promptVisible = false;
				T.state[key] = val;
				T.setState(T.state);
				//console.log(data);
			})
			.catch(function(err){

				console.log(err);
				T.state.promptVisible = false;
				T.setState(this.state);
			})
			

		}else{

			$('#!tool').alert($.LN.INDIVIDUAL_INFOMATION, $.LN.NO_EMPTY);
			T.state.promptVisible = false;
			T.setState(this.state);
		}

	},

	itemsView: function(args){
    	var T = this;
		var {
			items,
		} = args;
		//var components = [FinanceFlow,MyCredit,MyPosition];
		//onPress={this._loadPage.bind(this, components[k], items[i])}>
		var views = [];
		var topBorder = {
			borderTopWidth: 1,
			borderTopColor: '#ddd',
		};
		return items.map(function(elem, index) {

			
			//T.state[elem['key']] = elem['right'];
			if(elem.type=='image'){

				return (
					<TouchableHighlight key={elem['key']} onPress={ ()=>elem['func'](elem['key']) } >
			          <View style={[styles.item,{flexDirection:'row',height:60},topBorder]}>
			          	<Text style={styles.tagLeft}>{elem['left']}</Text>
			          	<Text>:</Text>
			          	<Image
			          	  style={{width:50,height:50,borderRadius:25}}
			          	  source={require('image!eat')} />
			          	
			          </View>
			        </TouchableHighlight>
				);

			}else{
				
				return (
					<TouchableHighlight key={elem['key']} onPress={ ()=>elem['func'](elem['key']) } >
			          <View style={[styles.item,{flexDirection:'row'},topBorder]}>
			          	<Text style={styles.tagLeft}>{elem['left']}</Text>
			          	<Text>:</Text>
			          	<Text ref={'input:'+elem['key']} style={[styles.valueRight]} >{T.state[elem['key']]}</Text>
			          </View>
			        </TouchableHighlight>
				);
			}

		});
	},

	
	render: function() {
		
		var T = this;
		var items_0 = this._initItemsView();

		return (
			<View style={styles.wrap}>
				<NavbarView
					leftImage = {require('image!eat')}
					leftText = {$.LN.BACK}
					centerText = {$.LN.INDIVIDUAL_INFOMATION}
					navigator = {this.props.navigator}
					rightImage = {require('image!eat')} />

				<ScrollView style={styles.scroll}>
					<Text>{this.state.u}</Text>

					<View style={styles.wrapper}>
						{items_0}
					</View>

				</ScrollView>
				 <Prompt
		            title={$.LN.PLEASE_TYPE}
		            titleStyle={{textAlign:'center'}}
		            inputStyle={{textAlign:'center'}}
		            placeholder={this.state.promptHolder}
		            defaultValue=""
		            promptKey={this.state.promptKey}
		            visible={this.state.promptVisible}
		            ref='prompt'
		            onCancel={() => this._cancelPrompt(this.refs.prompt.props.promptKey)}
		            onSubmit={(value) => this._confirmPrompt(this.refs.prompt.props.promptKey,value)}/>
			</View>
		);
	},
  

});


var styles = StyleSheet.create({
	wrap:{
		flex:1,
	},
	scroll:{

		flex:1,
		backgroundColor:'#FAFAFA',
	},
	center:{
		height:60,
		flex:0.9,
		//justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		backgroundColor:'#fff',
		alignItems:'center',
	},
	valueRight:{
		//lineHeight:38,
		//backgroundColor:'#FFDDFF',
		//height:38,
		flex:0.9,
		fontSize:14,
		marginLeft:10,
		marginRight:10,
	},
	item:{
		height:40,
		alignItems:'center',
		borderBottomColor:'#ededed',
		borderBottomWidth:1,
	},
	tagLeft:{
		//backgroundColor:'#FFDDdd',
		//lineHeight:28,
		//height:38,
		fontSize:14,
		width:80,
		marginLeft:20,
	},
	wrapper:{
		paddingTop:20,
		marginTop:30,
	}

});


module.exports = Work;
