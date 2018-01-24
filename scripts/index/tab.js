define(["jquery"],function($){
	function Tab(){

	}
	Tab.prototype = {
		constructor:Tab,
		init:function(){
			this.$index = 0;
			this.$navBtn = $('.brand_b_nav');
			this.$navBtnLi = this.$navBtn.find('li');
			this.$tabPage = this.$navBtn.next().find('.brand_bc_page');
			this.$leftbtn = $(".bbc_leftbtn");
			this.$rightbtn = $(".bbc_rightbtn");
			this.$navBtnLi.mouseenter($.proxy(this.tabon,this));
			this.$navBtnLi.mouseleave($.proxy(this.taboff,this));

			this.$leftbtn.click($.proxy(this.prev,this));
			this.$rightbtn.click($.proxy(this.next,this));
		},
		tabon:function(evt){
			/*这块有bug，玩快了会傻*/
			if(evt instanceof Object){
				var $btn = $(evt.target);
				if(this.$index == $btn.index()){
					return 0;
				}
				this.$index = $btn.index();
			}else{
				var $btn = this.$navBtnLi.eq(this.$index);
			}
			$btn.addClass('bbn_current')
				.siblings().removeClass('bbn_current');
			this.$tabPage.eq(this.$index).show().siblings().hide();
		},
		taboff:function(evt){
			if(evt instanceof Object){
				var $btn = $(evt.target);
				if(this.$index == $btn.index()){
					return 0;
				}
				this.$index = $btn.index();
			}else{
				var $btn = this.$navBtnLi.eq(this.$index);
			}
			$btn.removeClass('bbn_current');
		},
		prev:function(){
			this.$index--;
			if(this.$index < 0){
				this.$index = 3;
			}
			this.tabon();
		},
		next:function(){
			this.$index++;
			if(this.$index > $('.brand_b_nav li').length-1){
				this.$index = 0;
			}
			this.tabon();
		}
	}
	return new Tab();
})