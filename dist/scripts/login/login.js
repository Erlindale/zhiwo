/*登录逻辑控制页面*/
require(["../scripts/login/config.js"],function(){
	require(["jquery","cookie","input","reg","link","topnav"],function($,cookie,input,sreg,link,topnav){
		// 输入 t   
		input.init();  

		//正则 t
		sreg.init();

		//链接
		link.init();

		//导航栏
		topnav.init($(".item_btn"));
	})
})
