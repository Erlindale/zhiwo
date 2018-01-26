/*右侧固定条*/
define(["jquery"],function($){
	function Fixedbar(){

	}
	Fixedbar.prototype = {
		constructor:Fixedbar,
		init:function(){
			this.$sidebaritem = $(".sidebar_item")
			this.$sidebar_top = $("#sidebar_top")
			// console.log(this.$sidebar_top)
			this.$sidebaritem.mouseover($.proxy(this.itemshow))
			this.$sidebaritem.mouseout($.proxy(this.itemout))
			this.$sidebar_top.on("click",$.proxy(this.s_top))
		},
		itemshow:function(){
			this.$toolTip = $(this).find('.n_wechat');
			this.$toolTip.stop().fadeIn("normal").css({
					"left":-103,
					"opacity":1,
					"display":"block"
				})
					
		}, 
		itemout:function(){
			this.$toolTip = $(this).find('.n_wechat');		
			this.$toolTip.stop().fadeOut()
		},
		s_top:function(){
			if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 1000);
                return ;
            }
            $('body').animate({ scrollTop: 0 }, 1000);
                 return ;            
                 
		}
	}
	return new Fixedbar();
})