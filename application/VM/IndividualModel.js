/* @flow */
'use strict';


function IndividualModel (view) {
	var T = this;
	var model = $.vs.model('individual');
	//model.destroy();



	this.updateOrAdd = function(data,username){
		return $(function (resolve,reject) {

			T.update(data,username)
			.then(function (rData) {
				if(rData){
					//console.log('update=============');
					resolve(rData);

				}else{

					T.add(data)
					.then(function (rData) {
						//console.log('add==============');
						resolve(rData);	

					})
					.catch(function (err) {
						//console.log('asdfjl;ds;')
						reject(err);

					});

					
				}
			})
			.catch(function (err) {
				//console.log('asdfjl;ds;');
				reject(err);
			});
			

		})
	};

	/*this.headImg = '/Users/Alex/react/HelloWorld/application/source/images/head_default.png';
	this.username = '卢旻炫_amos';
	this.money = '100';
	this.experience = 19340;*/
	this.update = function(data,username){

		return model.update(data,{
	        where: {
	            and: [{ username:username}]
	        },
	        order: {
	            _id: 'ASC',
	        },
	        limit:1,
	    });
	}

	//find table data
	this.findAll = function () {
		//model.remove();
		return model.find();
	}

	this.find = function(username){

		return model.find({
	        where: {
	            and: [{ username:username}]
	        },
	        order: {
	            _id: 'ASC',
	        },
	        limit:1,
	    });
	}

	this.add = function(data){
		return model.add(data);
	}

	this.init = function(){

		return model.add({
			headImg : '/Users/Alex/react/HelloWorld/application/source/images/head_default.png',
			username : '卢旻炫_amos',
			money : 100,
			experience : 100,
		});

	}



}

IndividualModel.prototype = $.vm('!V');

module.exports = IndividualModel;
