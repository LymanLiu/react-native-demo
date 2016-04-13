/* @flow */
'use strict';
Promise = require("native-promise-only");

function Fate (sel) {
	//console.log(sel.substr(0,2)=='c!');

	if(typeof sel == 'function'){
		return new Promise(sel);
	}else if(typeof sel=='string'){

		if( sel.substr(0,2)=='v:' || sel.substr(0,2)=='v!'){
			//console.log(sel.substr(0,2)=='c!');
			var v = sel.substr(2);
			if(sel.substr(0,2)=='v:'){
				if(!Fate.views[sel]){
					switch(v){
						/*<control>*/
						case 'Home':
							Fate.views[sel] = require('../V/HomeView');
							break;

						case 'Route':
							Fate.views[sel] = require('../V/RouteView');
							break;

						case 'Work':
							Fate.views[sel] = require('../V/WorkView');
							break;

						case 'Individual':
							Fate.views[sel] = require('../V/IndividualView');
							break;
						case 'Finance':
							Fate.views[sel] = require('../V/FinanceView');
							break;
						case 'Order':
							Fate.views[sel] = require('../V/OrderView');
							break;

						case 'Login':
							Fate.views[sel] = require('../V/LoginView');
							break;

						case 'Seek':
							Fate.views[sel] = require('../V/SeekView');
							break;

						case 'Tabbar':
							Fate.views[sel] = require('../V/TabbarView');
							break;

						case 'Register':
							Fate.views[sel] = require('../V/RegisterView');
							break;

						case 'Info':
							Fate.views[sel] = require('../V/InfoView');
							break;

						case 'Navbar':
							Fate.views[sel] = require('../V/NavbarView');
							break;

						default:
							return null;
					}
				}
			}

			return Fate.views[sel];

		}else if( sel.substr(0,2)=='c!' || sel.substr(0,2)=='c:' ){
			//console.log(sel.substr(0,2));
			var c = sel.substr(2);
			//console.log(c);
			if(sel.substr(0,2)=='c!'){

				if(!Fate.ctrls[sel]){
					switch(c){
						/*<control>*/
						case 'UI':
							Fate.ctrls[sel]= new (require('../C/UIControl')) ();
							break;

						case 'DM':
							Fate.ctrls[sel]= new (require('../C/DMControl')) ();
							break;

						case 'C':
							Fate.ctrls[sel]= new (require('../C/Control')) ();
							break;
						/*</control>*/

						default:
							return null;
					}
				}

			}else if(sel.substr(0,2)=='c:'){
				if(!Fate.ctrls[sel]){
					switch(c){
						/*<control>*/
						case 'UI':
							Fate.ctrls[sel]= require('../C/UIControl');
							break;

						case 'DM':
							Fate.ctrls[sel]= require('../C/DMControl');
							break;

						case 'C':
							Fate.ctrls[sel]= require('../C/Control');
							break;
						/*</control>*/

						default:
							return null;
					}
				}
			}

			return Fate.ctrls[sel];

		}else if( sel.substr(0,3)=='vm!' || sel.substr(0,2)=='vm:' ){


			var vm = sel.substr(3);
			if(sel.substr(0,3)=='vm!'){

				if(!Fate.vmodels[sel]){
					switch(vm){

						case 'Home':
							Fate.vmodels[sel] = new (require('../VM/HomeModel'))();
							break;

						case 'Individual':
							Fate.vmodels[sel] = new (require('../VM/IndividualModel'))();
							break;

						case 'Login':
							Fate.vmodels[sel] = new (require('../VM/LoginModel'))();
							break;

						case 'V':
							Fate.vmodels[sel] = new (require('../VM/VModel'))();
							break;


						default:
							return null;
					}
				}

			}else if(sel.substr(0,3)=='vm:'){
				if(!Fate.vmodels[sel]){
					switch(vm){

						case 'Home':
							Fate.vmodels[sel] = require('../VM/HomeModel');
							break;

						case 'Individual':
							Fate.vmodels[sel] = require('../VM/IndividualModel');
							break;

						case 'Login':
							Fate.vmodels[sel] = require('../VM/LoginModel');
							break;

						case 'V':
							Fate.vmodels[sel] = require('../VM/VModel');
							break;


						default:
							return null;
					}
				}
			}

			return Fate.vmodels[sel];

		}else if(sel.substr(0,3)=='bm!' || sel.substr(0,3)=='bm:'){


			var bm = sel.substr(3);
			if(sel.substr(0,3)=='bm!'){

				if(!Fate.bmodels[sel]){
					switch(bm){


						default:
							return null;
					}
				}

			}else if(sel.substr(0,3)=='vm:'){
				if(!Fate.bmodels[sel]){
					switch(vm){

						default:
							return null;
					}
				}
			}
			return Fate.bmodels[sel];

		}else if(sel.substr(0,1)=='#'){
			//console.log(sel);
			var l = sel.substr(2);
			//console.log(l);
			if(sel.substr(0,2)=='#!'){

				if(!Fate.libs[sel]){
					switch(l){
						/*<control>*/
						case 'tool':
							Fate.libs[sel]= new (require('./tool')) ();
							break;
						default:
							return null;
					}
				}

			}else if(sel.substr(0,2)=='#:'){
				if(!Fate.libs[sel]){
					switch(l){
						/*<control>*/
						case 'tool':
							Fate.libs[sel]= require('./tool');
							break;

						default:
							return null;
					}
				}
			}

			return Fate.libs[sel];
		}

	}

}

Fate.gvals = {};
Fate.comps = {};
Fate.ctrls = {};
Fate.views = {};
Fate.bmodels = {};
Fate.vmodels = {};
Fate.libs = {};



Fate.LN = require('./language');
Fate.CF = require('./config');
Fate.DS = require('./describe');
Fate.md5 = require('../lib/md5');
Fate.fs = require("react-native-fs");

Fate.vs = require('react-native-store');// vm data store
Fate.bs = require('react-native-sqlite-storage');//bm data store
Fate.t = function(type){

	if(type='!'){
		return (new (require('./tool'))() );
	}else{
		return require('./tool');
	}

}


//test revals
Fate.gvals = {

	username:'maoziapp',
	password:Fate.md5('666666'),

};


//self setting net request

//net work
Fate.n = require('axios').create({
  baseURL: Fate.CF.baseURL,
  timeout: 5000,
  responseType:'text',
  headers:{
  	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return Fate.n.buildURL(data);

  }],
});

Fate.n.buildURL = function(data){
	//console.log(data);
	var arr = [];
	for(var key in data){
		arr.push(key+'='+data[key]);
	}
	return arr.join('&');
};






Fate.img = function(img){

	var dir = Fate.CF.dir.images;
	dir = dir+img;

}
Fate.com = function(component){
	//var dir = Fate.CF.dir.component;
	//dir = dir+component;
	if( !(Fate.comps[component]) ){

		switch(component){
			case 'QRCodeScreen':
				Fate.comps[component]=require('../component/QRCodeScreen');
				break;

			default:
				return null;
		}
	}
	return Fate.comps[component];
}
Fate.c = function(c){
	//console.log(Fate.CF);
	//var dir = Fate.CF.dir.C;
	//dir = dir+c+'Control';
	var rc = c;
	c = (c.indexOf('!')==0)?c.replace('!',''):c;
	if( !(Fate.ctrls[c]) ){
		 
		switch(c){
			/*<control>*/
			case 'UI':
				Fate.ctrls[c]=require('../C/UIControl');
				break;

			case 'DM':
				Fate.ctrls[c]=require('../C/DMControl');
				break;

			case 'C':
				Fate.ctrls[c]=require('../C/Control');
				break;
			/*</control>*/

			default:
				return null;
		}


	}
	return (rc.indexOf('!')==0) ? (new Fate.ctrls[c]()) : (Fate.ctrls[c]);

}
Fate.v = function(v){

	//var dir = Fate.CF.dir.V;
	//dir = dir+v+'View';

	if( !(Fate.views[v]) ){
		switch(v){
			case 'Home':
				Fate.views[v] = require('../V/HomeView');
				break;

			case 'Route':
				Fate.views[v] = require('../V/RouteView');
				break;

			case 'Work':
				Fate.views[v] = require('../V/WorkView');
				break;

			case 'Individual':
				Fate.views[v] = require('../V/IndividualView');
				break;

			case 'Login':
				Fate.views[v] = require('../V/LoginView');
				break;

			case 'Register':
				Fate.views[v] = require('../V/RegisterView');
				break;


			default:
				return null;
		}
	}

	return Fate.views[v];
}
Fate.bm = function(bm){
	var rbm = bm;
	bm = (bm.indexOf('!')==0) ? bm.replace('!','') : bm;
	if( !(Fate.bmodels[bm]) ){

	}
	return (rbm.indexOf('!')==0) ? (new Fate.bmodels[bm]()) : (Fate.bmodels[bm]);
}
Fate.vm = function(vm){
	var rvm = vm
	vm = (vm.indexOf('!')==0) ? (vm.replace('!','')) : vm;
	//console.log(vm);
	if( !(Fate.vmodels[vm]) ){
		switch(vm){
			case 'Home':
				Fate.vmodels[vm] = require('../VM/HomeModel');
				break;

			case 'Individual':
				Fate.vmodels[vm] = require('../VM/IndividualModel');
				break;

			case 'Login':
				Fate.vmodels[vm] = require('../VM/LoginModel');
				break;

			case 'V':
				Fate.vmodels[vm] = require('../VM/VModel');
				break;


			default:
				return null;
		}
	}
	//console.log(Fate.vmodels[vm]);
	if((rvm.indexOf('!')==0) && !Fate.vmodels[rvm]){
		Fate.vmodels[rvm] = new Fate.vmodels[vm]();
	}


	return (rvm.indexOf('!')==0) ? ( Fate.vmodels[rvm] ) : (Fate.vmodels[vm]);

}





module.exports = Fate;
