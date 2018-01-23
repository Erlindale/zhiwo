/*header nav右侧赞助商手风琴*/
define(["jquery"],function($){
	function Sponsor(){

	}
	Sponsor.prototype = {
		constructor:Sponsor,
		init:function(ele){
			this.$ele = ele;
			// console.log(this.$ele)// 元素获取成功
			this.$li = this.$ele.find("li");
			// console.log(this.$li);/*元素获取成功*/
			this.$li.mouseenter($.proxy(this.spread));
			this.$li.mouseleave($.proxy(this.switch));
		},
		spread:function(){
			// console.log(1)
			$(this)
			.stop(true)// 当前 li this;
			.animate({
				width:74
			})
			.find(".fcb_return")//最后一个宽度为100
					.end().stop(true)
					.animate({
						width:100
					})
			.siblings().stop(true)//兄弟级;
					.animate({
						width:0
					})
			console.log(1);
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