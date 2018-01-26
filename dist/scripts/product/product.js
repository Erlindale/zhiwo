/*商品详情逻辑控制页面*/
require(["../scripts/product/config.js"],function(){
	require(["jquery","cookie","pro","topnav","sponsor","fixedbar","search","links"],function($,cookie,pro,topnav,sponsor,fixedbar,search,links){
		
		pro.init();
		// 下拉二级菜单  t
		// console.log(topnav)
		topnav.init($(".item_btn"));
		
		//手风琴  t
		sponsor.init($(".header_mc_info"));

		//右侧固定菜单栏 t
  
		fixedbar.init();
		//模糊搜索 t
		search.init();


		//链接
		links.init();
	})
})
   