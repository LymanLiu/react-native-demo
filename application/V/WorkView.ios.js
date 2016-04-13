/* @flow */
'use strict';
var React = require('react-native');

//control
var _UIC = require('../C/UIControl');
var UIC  = new _UIC();


var {
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Image,
} = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var Work = React.createClass({
  _loadPage(options){
   	//console.log(options);
   	if(options.id){

   		this.props.navigator.push({id:options.id});
   	}
  },
  render: function() {
  	var T = this;
  	function itemsView(args){
		var {
			lefts,
			rights,
			items,
			components,
		} = args;
		//var components = [FinanceFlow,MyCredit,MyPosition];
		//onPress={this._loadPage.bind(this, components[k], items[i])}>
		var views = [];
		var topBorder = {
			borderTopWidth: 1,
			borderTopColor: '#ddd',
		};
		for(var k in items){
			
		    views.push(
		      <TouchableHighlight key={items[k]} onPress={T._loadPage.bind(T, {id: (components[k]?components[k]:null), title:items[k]} ) } >
		          <View style={[styles.item,{flexDirection:'row'},topBorder]}>
		          	<Image
		          	  style={styles.tag}
		          	  source={lefts[k]} />
		            <Text style={[styles.font]}>{items[k]}</Text>
		          </View>
		      </TouchableHighlight>
		    );
		    if(k==0){
				topBorder = null;
			}
		};
		return views;
	}

	var views0 = itemsView({
		lefts:[ require('image!biye'), require('image!eat'), require('image!head'),'D'],
		rights:['#F4000B', '#17B4FF', '#FFD900', '#F00000'],
		components:[],
		items:[$.LN.ELECTRICITY_BIEY_RIDER,$.LN.DELIVER,$.LN.GANGER],
	});

	var views1 = itemsView({
		lefts:[require('image!scan')],
		rights:['#00FA0F'],
		components:['scan'],
		items:[$.LN.QR_CODE],
	});
	//console.log(this.props);
    return (
      <ScrollView style={styles.container}>

      	<View style={styles.wrapper}>
      	{views0}
      	</View>

      	<View style={styles.wrapper}>
      	{views1}
      	</View>


      </ScrollView>
    );
  },
  

});


var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FAFAFA',
	},
	item:{
		height:60,
		//justifyContent: 'center',

		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		backgroundColor:'#fff',
		alignItems:'center',
	},
	font:{
		//lineHeight:38,
		//backgroundColor:'#FFDDFF',
		//height:38,
		fontSize:20,
		marginLeft:10,
		marginRight:10,
	},
	tag:{
		//backgroundColor:'#FFDDdd',
		//lineHeight:28,
		//height:38,
		width:40,
		marginLeft:20,
	},
	wrapper:{
		marginTop:30,
	}

});


module.exports = Work;
