/*header nav右侧赞助商手风琴*/
define(["jquery"],function($){
	function Sponsor(){

	}
	Sponsor.prototype = {
		constructor:Sponsor,
		init:function(ele){
			this.$ele = ele;
			this.$li = this.$ele.find("li");
			this.$li.mouseenter($.proxy(this.spread));
			this.$li.mouseleave($.proxy(this.switch));
		},
		spread:function(){
			var index = $(this).index()
			if(index < 3){
				$(this).stop().animate({width:'74px'},600);

			}else{
				$(this).stop().animate({width:'100px'},600);

			}
		},
		switch:function(){
			$(this)
			.stop()// 当前 li this;
			.animate({
				width:0
			})
		}
	}
	return new Sponsor();
})