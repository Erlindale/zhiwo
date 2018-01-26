define(["jquery"],function($){
	function Pro(){

	}
	Pro.prototype = {
		constructor:Pro,
		init:function(){
			this.fixedh = $(".detail_proinfo").offset().top;
			this.f_nav = $(".detail_infor_nav");
			this.p_down = $(".h_amout_down");
			this.p_up = $(".h_amout_up");
			this.buy_number = $("#buy_number");
			this.$num = 1;
			$(window).scroll($.proxy(this.d_fixed,this));
			this.p_down.on("click",$.proxy(this.pdown,this))
			this.p_up.on("click",$.proxy(this.pup,this))
		},
		//商品详情固定导航
		d_fixed:function(){
			this.$scrollTop = $(window).scrollTop();
            if(this.$scrollTop >= this.fixedh){
               this.f_nav.addClass('fixed');
            }else{
                this.f_nav.removeClass('fixed');
            }
		},
		//数量增加
		pup:function(){
			this.$num++;
			this.buy_number.val(this.$num);
		},
		//数量减少
		pdown:function(){
			
			if(this.$num == 1){
				return;
			}else{
				this.$num--;
			}
			this.buy_number.val(this.$num);
		}
	}
	return new Pro();
})