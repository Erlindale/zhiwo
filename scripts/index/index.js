/*业务逻辑页面*/  //t代表通信成功
require(["scripts/index/config.js"],function(){
	require(["jquery","rendring","header_topnav","sponsor","banner","sidebar","tab","fixedbar","down"],function($,rendring,topnav,sponsor,banner,sidebar,tab,fixedbar,down){
		// console.log($);链接成功
		// console.log(rendring)
		// console.log(rendring)
		rendring;
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

		//倒计时   t
		down.init();
	})
})