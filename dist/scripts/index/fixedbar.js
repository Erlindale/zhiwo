/*右侧固定条*/
define(["jquery"],function($){
	function Fixedbar(){

	}
	Fixedbar.prototype = {
		constructor:Fixedbar,
		init:function(obj, json,speed,fnEnd){
			this.$sidebaritem = $(".sidebar_item")
			// console.log(this.$sidebaritem);
			// this.$toolTip = this.$sidebarItem.find('.sidebar_tooltip');
			// this.$toolTipLogin = this.$sidebarItem.find('.sidebar_tooltip_login');
			this.$index = 0;
			this.$sidebaritem.mouseover($.proxy(this.itemshow))
			this.$sidebaritem.mouseout($.proxy(this.itemout))

		},
		itemshow:function(){
			this.$toolTip = $(this).find('.sidebar_tooltip');
			// console.log(this.$toolTip.hasClass("sidebar_wechat"))
			if(this.$toolTip.hasClass("wechat") ){
				this.$toolTip.fadeIn("normal").css({
					"right":10,
					"opacity":1
				})
			}else{
				this.$toolTip.stop().fadeIn("normal").css({
					"left":-103,
					"opacity": 1 
				})
			}		
		}, 
		itemout:function(){
			this.$toolTip = $(this).find('.sidebar_tooltip');		
			this.$toolTip.stop().fadeOut()
		}
	}
	return new Fixedbar();
})