function DMControl () {

	var T = this;
	T.seekBack = function(args){

		return new Promise(function(resolve, reject){

			$.n.post('main.php?sys=user&ctrl=user_iner&action=re_psw',{

				mobile_phone : args.mobile_phone,
				new_password : args.new_password,
				re_password : args.re_password,
				PIN : args.PIN,

			})
			.then(function (res) {
				resolve(res);
			});

		});

	}

	T.sendPIN = function(args){
		return new Promise(function(resolve, reject){
			
			var params = {
				mobile_phone : args['mobile_phone']
			};

			if(args.forseek){
				params.forseek = 1;
			}

			$.n.post('main.php?sys=user&ctrl=user&action=sendPIN',params)
			.then(function (res) {
				resolve(res);
			});

		});
	}

	T.register = function (args) {

		return new Promise(function(resolve, reject){

			$.n.post('main.php?sys=user&ctrl=user_iner&action=reg',{

				user_name: args.user_name,
				password: args.password,
				verified_phone: args.verified_phone,
				sub_PIN: args.sub_PIN

			})
			.then(function (res) {
				resolve(res);
			});

		});

	}

	T.login = function(args){
		//console.log(args);
		return new Promise(function(resolve,reject){
		
			var username = args['username'];
			var password = args['password'];
			//console.log($.md5(password));
			$.n.post('main.php?sys=user&ctrl=user&action=login',{
				user_name:username,
				password,
			}).then(function(res){

				resolve(res);
				
			});


		});

	}

	T.updateInfo = function(args){

		
		return new Promise(function(resolve,reject){
			var key = args.key;
			var val = args.val;
			var params = {};
			params[key] = val;
			$.n.post('main.php?sys=user&ctrl=user&action=mod_all',params)
			.then(function(res){
				var data = res.data;
				//console.log(res);
				if((data['account']['status']=='0' || data['basic']['status']=='0' || data['resume']['status']=='0' || data['recruit']['status']=='0' || data['finance']['status']=='0' )){ 
					
					$('vm!Individual').updateOrAdd( params, $.gvals.username)
					.then(function(data){

						resolve({
							status:'0',
							msg: $.LN.SUCCESS
						});

					})
					.catch(function (err) {

						resolve(err);

					});

				}else{

					reject({
						status:'1',
						msg:$.LN.FAIL,
					});

				}
				

			})
			.catch(function (err) {
				reject(err);
			})
			;

		});


	}

	T.fetchInfo = function(){

		return new Promise(function(resolve,reject){

			$.n.post('main.php?sys=user&ctrl=user_iner&action=user_info')
			.then(function(res){
				resolve(res);
			})
			.catch(function (err) {
				reject(err);
			});

		});
	}

	T.getInfo = function(args){

		return new Promise(function(resolve,reject){

			$('vm!Individual').find(args.username)
			.then(function(data){
				//console.log(data);
				if(data){

					args.callBack(data);
					//args.callBack(data);
				}else{

				}

				T.fetchInfo()
				.then(function(res){
					//console.log(res.data);

					$('vm!Individual').updateOrAdd({

						user_id: res.data['user_id'],
						username: res.data['user_name'],
						user_name: res.data['user_name'],
						real_name: res.data['real_name'],
						sex: res.data['sex'],
						birthday: res.data['birthday'],
						nick_name: res.data['nick_name'],
						tel_phone: res.data['tel_phone'],
						email: res.data['email'],
						school: res.data['school'],
						entrance_year: res.data['entrance_year'],
						major: res.data['major'],
						age: res.data['age'],
						height: res.data['height'],
						figure: res.data['figure'],
						qq: res.data['qq'],
						mobile_phone: res.data['mobile_phone'],
						agent_phone: res.data['agent_phone'],
						ali_account: res.data['ali_account'],
						bank_account: res.data['bank_account'],
						cer_id: res.data['cer_id'],
						head_image: res.data['head_image'],
						prv_image: res.data['prv_image'],
						id_image: res.data['id_image'],
						id_back_image: res.data['id_back_image'],

					},$.gvals.username)
					.then(function (data) {
						args.callBack(data);

						resolve(data);
						//console.log(data);

					})
					.catch(function (err) {
						reject(err);
						//console.log(data);

					});

					
				})
				.catch(function (err) {
					reject(err);
				})

			})
			.catch(function(err){
				//console.log('=======eeeeeerrrrr');
				reject(err);
				

			})

		});
	}

	T.optHeadImg = function(response,args){
		/**
		* The first arg will be the options object for customization, the second is
		* your callback which sends bool: didCancel, object: response.
		*
		* response.didCancel will inform you if the user cancelled the process
		* response.error will contain an error message, if there is one
		* response.data is the base64 encoded image data (photos only)
		* response.uri is the uri to the local file asset on the device (photo or video)
		* response.isVertical will be true if the image is vertically oriented
		* response.width & response.height give you the image dimensions
		*/
		console.log('Response = ', response);

		if (response.didCancel) {

			console.log('User cancelled image picker');
		
		}else if (response.error) {

			console.log('UIImagePickerManager Error: ', response.error);
		
		}else if (response.customButton) {

			console.log('User tapped custom button: ', response.customButton);
		
		}else {

			// You can display the image using either data:
			//const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

			// uri (on iOS)
			const source = {uri: response.uri.replace('file://', ''), isStatic: true};
			// uri (on android)
			//const source = {uri: response.uri, isStatic: true};
			args.target.state.vm.headImg = response.uri.replace('file://', '');
			args.target.setState(args.target.state);
		}

	}
	
}

DMControl.prototype = new ($.c('C'))();

module.exports = DMControl;


