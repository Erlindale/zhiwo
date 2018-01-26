/*登录逻辑控制页面*/
require(["../scripts/register/config.js"],function(){
	require(["jquery","cookie","input","reg","links","topnav"],function($,cookie,input,p_reg,links,topnav){
		// 输入 t   
		input.init();

		//正则 t
		
		p_reg.init();
		//链接
		links.init();
		//导航栏
		topnav.init($(".item_btn"));
	})
})
