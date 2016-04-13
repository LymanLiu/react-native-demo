
function UIControl () {

	var T = this;

	this.seekAlert = function(args){

		if(args.status=='0'){
			$('#!tool').alert(
				$.LN.SEEK_BACK_RESPONDE,		
				args.msg,
				[
					{
						text: $.LN.OK,
						onPress: function (){
							T.routePop(args);
						},
					},
					{
						text: $.LN.CANCEL,
						onPress: function (){

						},
					},
				]
			);
		}else{

			$('#!tool').alert($.LN.SEEK_BACK_RESPONDE,args.msg);
		}

	}
	/**
		args.targetView (Image)
	*/
	this.imgPicker = function(args){
		var imp = require('NativeModules').UIImagePickerManager;
		imp.showImagePicker( {
		  title: 'Select Avatar', // specify null or empty string to remove the title
		  cancelButtonTitle: 'Cancel',
		  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
		  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
		  customButtons: {
		    'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
		  },
		  cameraType: 'back', // 'front' or 'back'
		  mediaType: 'photo', // 'photo' or 'video'
		  videoQuality: 'high', // 'low', 'medium', or 'high'
		  maxWidth: 100, // photos only
		  maxHeight: 100, // photos only
		  quality: 0.2, // photos only
		  allowsEditing: false, // Built in iOS functionality to resize/reposition the image
		  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
		  storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
		    skipBackup: true, // image will NOT be backed up to icloud
		    path: 'images' // will save image at /Documents/images rather than the root
		  }
		}, (response)=>{ $.c('!DM').optHeadImg(response,args) });

	
	}


}

UIControl.prototype = $.c('!C');

module.exports = UIControl;





