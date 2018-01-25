define(["jquery"],function($){
	function Down(){

	}
	Down.prototype = {
		constructor:Down,
		init:function(){
			this.$sale_tip_time = $(".m_list_ctime span")
			this.$end = new Date("2018/2/16");
			this.$sEnd = this.$end.getTime();
			this.$now = new Date();
			this.$sNow =this.$now.getTime();
			this.$cha = this.$sEnd - this.$sNow;
			// console.log(this.$cha)
			console.log(this.$sale_tip_time)
			this.$nDay = parseInt(this.$cha / 1000 / 60 / 60 / 24);
			this.$nHour = parseInt(this.$cha % (1000 * 60 * 60 *24)/(1000 * 60 * 60));
			this.$nMin = parseInt(this.$cha % (1000 * 60 * 60)/(1000 * 60));
			this.$nSec = parseInt(this.$cha % (1000 * 60)/1000);
			 
			this.$cha = this.$end - this.$now;
			this.down();
		},
		down:function(){
			var _this = this;
			
			setInterval(function(index){
				_this.$sale_tip_time.children(1) .html(_this.$nDay);
				_this.$sale_tip_time.children(2).html(_this.$nHour);
				_this.$sale_tip_time.children(3).html(_this.$nMin);
				_this.$sale_tip_time.children(4).html(_this.$nSec);

			},500)
			}
		
	}
	return new Down();
})