/*业务逻辑页面*/  //t代表通信成功
require(["scripts/index/config.js"],function(){
	require(["jquery","header_topnav","sponsor","banner","sidebar","tab","fixedbar"],function($,topnav,sponsor,banner,sidebar,tab,fixedbar){
		// console.log($);链接成功
		// 下拉二级菜单  t
		topnav.init($(".item_btn"));
		
		//手风琴  t
		sponsor.init($(".header_mc_info"));
		
		//轮播图 t
		banner.init();
		
		// 侧边楼梯 t
		sidebar.init();

		//品牌选项卡 t
		tab.init();

		//右侧固定菜单栏 t
  
		fixedbar.init();

	})
})