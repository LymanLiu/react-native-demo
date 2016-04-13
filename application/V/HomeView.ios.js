'use strict';
//view
//var ForScan = require('./ForScanView');//个人信息
var WorkView = $('v:Work');
var IndividualView = $('v:Individual');
var FinanceView = $('v:Finance');
var OrderView = $('v:Order');
var TabbarView = $('v:Tabbar');


//others
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

//init
var React = require('react-native');
React.ScrollableTabView = require('react-native-scrollable-tab-view');
var {
  StyleSheet,
  ScrollableTabView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} = React;

var Home = React.createClass({
  componentDidMount: function() {


    var $this= this;
    //test login and if fasle jump to login view;
    $('c!DM').login({
      username: $.gvals.username,
      password: $.gvals.password
    })
    .then(function(res){

      //console.log('=========login========');
      //console.log($.fs.MainBundlePath);
      //console.log('=========/login========');
      var revals = res.data;
      var timer = null;
      if(revals.status!='0'){
        //console.log('=========login========');
        clearInterval(timer);
        timer = setTimeout(function(){
          //args.scene.props.navigator.popToTop();
          //args.scene.props.navigator.replace({id:'login'})

          $this.props.navigator.replace({id:'login'});

        },1000);
      }

    });

    //this.props.navigator.replace({id:'login'});
  },

  render: function(){

    return (

      <ScrollableTabView key='93434' initialPage={3} tabBarPosition='bottom' renderTabBar={ () => <TabbarView  /> }   style={styles.home}>

        <WorkView navigator={this.props.navigator} tabLabel={$.LN.WORK}/>
        <OrderView navigator={this.props.navigator} tabLabel={$.LN.ORDER}/>
        <FinanceView navigator={this.props.navigator} tabLabel={$.LN.FINANCE}/>
        <IndividualView navigator={this.props.navigator} tabLabel={$.LN.INDIVIDUAL}/>

      </ScrollableTabView>

    );
  }

});



var styles = StyleSheet.create({
  home:{
    marginTop:20,
    backgroundColor:'#fff',
  },
  nav:{
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = Home;

