/*购物车逻辑控制页面*/
require(["../scripts/shoppingcart/config.js"],function(){
	require(["jquery","cookie","link","topnav","s_status"],function($,cookie,link,topnav,s_status){
		
		//链接 t
		link.init(); 
   
		//导航栏 t
		topnav.init($(".item_btn"));

		//购物车状态 t
		s_status.init();
	})
})
