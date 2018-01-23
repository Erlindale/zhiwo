/*首页-侧边楼梯*/


define(["jquery"],function($){
	function Sidebar(){

	}
	Sidebar.prototype ={
		constructor:Sidebar,
		init:function(){
			this.$sidenav = $(".side_nav")
			// console.log(this.$sidenav)
			this.$timer = null;
			
			$(window).on("scroll",$.proxy(this.appear,this))

		},
		appear:function(){
			var scrollTop = $(window).scrollTop();
			clearTimeout(this.$timer);
			var _this = this;
			this.$timer = setTimeout(function(){
				if(scrollTop >= 558){
								_this.$sidenav.fadeIn(600);
							}else{
								_this.$sidenav.fadeOut(600);
							}
			},500)

		}
	}
	return new Sidebar();
})