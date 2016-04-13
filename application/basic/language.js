/* @flow */
'use strict';
var config = require('./config.js');

var Language = {

	chinese:{
		//basic
		BACK:'返回',
		SUBMIT:'提交',
		OK:'确定',
		CANCEL:'取消',
		SUCCESS:'成功',
		FAIL:'失败',
		NO_EMPTY:'不为空',

		//LOGIN
		USERNAME:'请输入用户名',
		PASSWORD:'请输入密码',
		LOGIN:'登录',
		REGISTER:'注册',
		FORGET_PASSWORD:'找回账户',
		PROBLEM_REPORT:'遇到问题？',

		//REGISTER
		PIN:'验证码',
		GET_PIN:'获取验证码',
		MOBILEPHONE:'手机号',
		RE_PASSWORD:'再次确认密码',
		REGISTER_RESPONDE:'注册回应',
		SEND_MESSAGE_SUCCESS:'发送验证码成功',
		
		//SEEK_BACK
		SEEK_BACK:'找回',
		SEEK_BACK_RESPONDE:'找回账户',



		//INDIVIDUAL
		INDIVIDUAL:'个人',
		MY_MONEY:'我的金额',
		MY_EXPERIENCE:'我的经验',
		YUAN:'￥',
		FINANCE_FLOW:'财务明细',
		MY_CREDIT:'我的积分',
		MY_POSITION:'我的位置',
		IDENTITY_AUTHENTICATION:'身份认证',

		//INFO
		INDIVIDUAL_INFOMATION:'个人信息',
		PLEASE_TYPE:'请输入',
		USERNAME:'用户名',
		NICK_NAME:'昵称',
		REAL_NAME:'姓名',
		SEX:'性别',
		TEL_PHONE:'电话',
		MOBILE_PHONE:'手机号',
		AGENT_PHONE:'紧急手机号',
		QQ:'QQ',
		EMAIL:'邮箱',
		SCHOOL:'学校',
		ENTRANCE_YEAR:'入学年份',
		MAJOR:'专业',
		AGE:'年龄',
		BIRTHDAY:'生日',
		HEIGHT:'身高',
		ALI_ACCOUNT:'支付宝账户',
		BANK_ACCOUNT:'银行账户',
		FIGURE:'体型',
		CER_ID:'身份证',
		PRAVITE_IMAGE:'个人照片',
		ID_BACK_IMAGE:'身份证背面',
		ID_FRONT_IMAGE:'身份证正面',
		HEAD_IMAGE:'个人头像',


		//WORK
		WORK:'工作',
		MY_JOBS:'我的职位',
		QR_CODE:'扫一扫',
		ELECTRICITY_BIEY_RIDER:'电车员',
		GANGER:'领班',
		DELIVER:'配送员',



		//FINANCE
		FINANCE:'财务',

		//ORDER
		ORDER:'订单',


	},

	english:{
		//basic
		BACK:'Back',
		SUBMIT:'Submit',
		OK:'OK',
		CANCEL:'cancel',
		//LOGIN
		USERNAME_PLACEHOLDER:'username',
		PASSWORD_PLACEHOLDER:'password',
		LOGIN:'Login',
		REGISTER:'Register',
		FORGET_PASSWORD:'forget password?',
		PROBLEM_REPORT:'confuse about?',

		//SEEK_BACK
		SEEK_BACK:'seek back',


		//REGISTER
		PIN:'PIN',
		GET_PIN:'get PIN',
		MOBILEPHONE:'mobilephone',
		RE_PASSWORD:'password again',
		REGISTER_RESPONDE:'register',
		SEND_MESSAGE_SUCCESS:'send success',
		

		
		//INDIVIDUAL
		INDIVIDUAL:'individual',
		MY_MONEY:'my money',
		MY_EXPERIENCE:'my experience',
		YUAN:'￥',
		FINANCE_FLOW:'finance flow',
		MY_CREDIT:'my credit',
		MY_POSITION:'my position',
		IDENTITY_AUTHENTICATION:'identity authentication',

		//WORK
		WORK:'Work',
		MY_JOBS:'my jobs',
		QR_CODE:'QR code',
		ELECTRICITY_BIEY_RIDER:'electric rider',
		GANGER:'ganger',
		DELIVER:'deliver',

		//INFO



		//FINANCE
		FINANCE:'finance',

		//ORDER
		ORDER:'order',
	}
}

var Choice = Language.chinese;
switch(config.language){
	case 'CN':
	case 'chinese':
		Choice = Language.chinese;
		break;

	case 'EN':
	case 'english':
		Choice = Language.english;
		break;
}

module.exports = Choice;