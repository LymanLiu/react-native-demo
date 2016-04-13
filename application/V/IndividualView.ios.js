'use strict';
//model

//view

//control
var UIC = $.c('!UI');

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  NavigatorIOS,
  Image,
  ScrollView,
} = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var Individual = React.createClass({

  //system func
  componentDidMount: function(){

    $.vm('!Individual').find().then(datas => {

      if(!datas){

        $.vm('!Individual').init().then(data=>{
          this.reflashView(data);
        });

      }else{

        this.reflashView(datas[0]);

      }

    }, err => {

      //console.log('----------lmx_xml-----------');
      //console.log(err);
      //console.log('----------lmx_xml-----------');

    });


  },

  getInitialState: function() {

    //console.log(m.headImg);

    return ({
      vm:{
        headImg : '/Users/Alex/react/HelloWorld/application/source/images/head_default.png',
        username : 'no name',
        money : 0,
        experience : 0,
      },
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    });

  },


  //self func
  reflashView: function(data){

    this.state.vm = data;
    this.setState(this.state);

  },


  onHeadImgPress: function(target){

    UIC.imgPicker({target});

  },

  _loadPage(options){
    //console.log(options);
    if(options.id){

      this.props.navigator.push({id:options.id});
    }
  },



  //render func
  render: function() {

    function itemsView(args){
      var {

        lefts,
        rights,
        items,

      } = args;

      var views = [];
      var topBorder = {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      };
      for(var k in items){

        views.push(
          <TouchableHighlight key={items[k]} >
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
      lefts:[ require('image!biye') ],
      rights:['#F4000B', '#17B4FF', '#FFD900', '#F00000'],
      items:[$.LN.FINANCE_FLOW],
    });    //console.log(this.state.vm.headImg);
    //console.log($.CF);

    var views1 = itemsView({
      lefts:[ require('image!biye') ],
      rights:['#F4000B'],
      items:[$.LN.IDENTITY_AUTHENTICATION],
    });



    return (
      <ScrollView style={styles.main}>

        <TouchableHighlight onPress ={()=>this._loadPage({id:'info'})}   style={styles.pressInfo} >
          <View style={styles.info} >

              <TouchableHighlight style={styles.headPress} onPress={()=>this.onHeadImgPress(this)}>
                <Image
                  style={styles.headIcon}
                  source={ {uri:this.state.vm.headImg} }
                />
              </TouchableHighlight>
              <Text style={styles.headText} >{this.state.vm.username}</Text>
              <Image
                style={styles.headRight}
                source={require('image!right')} />
          </View>
        </TouchableHighlight>
        
        <View style={[styles.show,styles.hide]}>
          <TouchableHighlight style={styles.tauchWrap}>
            <View style={styles.finance}>
              <Text style={styles.money}>{this.state.vm.money+$.LN.YUAN}</Text>
              <Text style={styles.moneyDes}>{$.LN.MY_MONEY}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tauchWrap} >
            <View style={styles.experience}>
              <Text style={styles.exper}>{this.state.vm.experience}</Text>
              <Text style={styles.experDes}>{$.LN.MY_EXPERIENCE}</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.wraper}>
          {views0}
        </View>

        <View style={[styles.wraper,{marginBottom:100}]}>
          {views1}
        </View>

      </ScrollView>

      
      
    );
  },

});

var styles = StyleSheet.create({
  hide:{
    width:0,
    height:0,
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
  wraper:{
    marginTop:30,
  },
  exper:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'500',
    color:'#00FF00',
    //backgroundColor:'#AAEEDD',
  },
  experDes:{
    textAlign:'center',
    color:'#D0D0D0',
    fontSize:12,
  },
  money:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'500',
    color:'#FF0000',
    //backgroundColor:'#AAEEDD',
  },
  moneyDes:{
    textAlign:'center',
    color:'#D0D0D0',
    fontSize:12,
    //backgroundColor:'#AAEEDD',
  },
  main:{
    //flexDirection:'row',
    flex:1,
    //alignItems:'stretch',
    backgroundColor:'#FAFAFA',

  },


  pressInfo:{
    //flexDirection:'row',
    //alignItems:'center',
    marginTop:0,
    height:110,
    paddingTop:0,
    borderTopWidth:0,
    borderBottomColor:'#DFDFDA',
    borderBottomWidth:0,
    backgroundColor:'#44B4FF',
  },

  info:{
    alignSelf:'auto',
    flexDirection:'row',
    alignItems:'center',
    height:110,
    borderTopWidth:0,
    borderBottomColor:'#DFDFDA',
    borderBottomWidth:0,
    backgroundColor:'#44B4FF',
  },

  show:{
    //flex:,
    flexDirection:'row',
    height:80,

    backgroundColor:'#FFFFFF',
  },
  tauchWrap:{
    flex:0.5,
    borderRightWidth:1,
    borderRightColor:'#DDD',
    backgroundColor:'#FFFFFF',
    borderBottomWidth:1,
    borderBottomColor:'#DDD',
  },
  finance:{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    backgroundColor:'#FFFFFF',

  },
  experience:{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
  },
  headPress: {
    marginTop:5,
    marginLeft:10,
    borderRadius:40,
    width: 80,
    height: 80,

  },

  headRight:{
    width:30,
    height: 81,
    //backgroundColor:'w',
    marginTop:0,
    marginLeft:10,
  },

  headIcon: {
    marginLeft:0,
    borderRadius:40,
    borderColor:'#DDDDDD',
    borderWidth:1,
    width: 81,
    height: 81,
  },

  headText:{
    width:150,
    marginTop:23,
    fontSize:14,
    marginLeft:10,
    borderColor:'#BBBBBB',
    //flexDirection:'row',
    textAlign: 'center',
  },

  base: {
    width: 38,
    height: 38,
  },
  progress: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 100
  },
  leftMargin: {
    marginLeft: 10,
  },
  background: {
    backgroundColor: '#222222'
  },
  sectionText: {
    marginVertical: 6,
  },
  nestedText: {
    marginLeft: 12,
    marginTop: 20,
    backgroundColor: 'transparent',
    color: 'white'
  },
  resizeMode: {
    width: 90,
    height: 60,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  resizeModeText: {
    fontSize: 11,
    marginBottom: 3,
  },

  horizontal: {
    flexDirection: 'row',
  },
  gif: {
    flex: 1,
    height: 200,
  },
  base64: {
    flex: 1,
    height: 50,
    resizeMode: 'contain',
  },
});

module.exports = Individual;

