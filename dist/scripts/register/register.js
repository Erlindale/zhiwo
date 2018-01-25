/*登录逻辑控制页面*/
require(["../scripts/register/config.js"],function(){
	require(["jquery","cookie","input","reg","links"],function($,cookie,input,p_reg,links){
		console.log($);
		// 输入 t   
		input.init();

		//正则 t
		
		p_reg.init();
		//链接
		links.init();
	})
})
