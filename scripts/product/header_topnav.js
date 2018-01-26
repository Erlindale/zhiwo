/*header_topnav*/


define(["jquery"],function($){
	function HeaderTopnav(){

	}
	HeaderTopnav.prototype = {
		constructor:HeaderTopnav,
		init:function(string_ele){
			this.$ele = string_ele;
			// console.log(this.$ele);//获取元素成功
			this.$ele.mouseenter($.proxy(this.appear))
			this.$ele.mouseleave($.proxy(this.disappear))

		},
		appear:function(){
			// console.log($(this));
			// console.log(1)
			console.log($(this).find(".item_personal_subnav"))
			$(this).find(".item_personal_subnav").stop().slideDown(400);
		},
		disappear:function(){
			// console.log($(this));
			$(this).find(".item_personal_subnav").stop().slideUp(400);
		}
	}
	return new HeaderTopnav();
})