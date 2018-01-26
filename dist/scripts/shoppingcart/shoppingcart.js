/*购物车逻辑控制页面*/
require(["../scripts/shoppingcart/config.js"],function(){
	require(["jquery","cookie","link","topnav"],function($,cookie,link,topnav){
		
		//链接
		link.init(); 
   
		//导航栏
		topnav.init($(".item_btn"));
	})
})
