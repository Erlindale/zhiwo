define(["jquery"],function($){
	function Banner(){

	}
	Banner.prototype = {
		constructor:Banner,
		init:function(){
			this.$dom = $("#playimages");
			// console.log(this.$dom);
			this.$a_fimg = $(".f_img").children();
			// console.log(this.$a_fimg);
			this.$btns = $(".f_btn");
			this.$abtn = this.$btns.find("li")
			// console.log(this.$abtn);
			this.$index = 0;
			this.$timer = 0;
			this.$abtn.click($.proxy(this.change,this));
			this.autoplay();			
		},
		/*改变显示*/
		change:function(evt){
			if(evt instanceof Object){
				var $btn = $(evt.target);
				if(this.$index == $btn.index()){
					return 0;
				}
				this.$index = $btn.index();
			}else{
				var $btn = this.$abtn.eq(this.$index);
			}
			// console.log($btn);
			$btn.addClass("f_btn_current")
			.siblings().removeClass("f_btn_current");
			this.move();
			this.autoplay();
		},
		move:function(){
			this.$a_fimg.eq(this.$index)
			.stop().fadeIn().addClass("scle").css({
				"z-index":"3",
				"opacity":"1",
			})
			.siblings().stop().fadeOut().removeClass("scle").css({
				"z-index":"0",
				"opacity":""
			});
		},
		autoplay:function(){
			clearInterval(this.$timer);
			var _this = this;
			this.$timer = setInterval(function(){
				if(_this.$index == _this.$a_fimg.length - 1){
					_this.$index = 0;
				}else{
					_this.$index++;
				}
				_this.change();
			},4000)
		}

	}
	return new Banner();
})