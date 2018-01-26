define(["jquery"],function($){
	function Down(){

	}
	Down.prototype = {
		constructor:Down,
		init:function(){
			this.$sale_tip_time = $(".m_list_ctime span,.sale_tip_time span")
			this.$end = new Date("2018/2/16");
			this.$sEnd = this.$end.getTime();
			this.$timer = null;
			this.down();
		},
		down:function(){
			clearInterval(this.$timer)
			var _this = this;
			
			this.timer = setInterval(function(){
				_this.$now = new Date();
				_this.$sNow =_this.$now.getTime();
				
				_this.$cha = _this.$sEnd - _this.$sNow;
				_this.$nDay = parseInt(_this.$cha / 1000 / 60 / 60 / 24);
				_this.$nHour = parseInt(_this.$cha % (1000 * 60 * 60 *24)/(1000 * 60 * 60));
				_this.$nMin = parseInt(_this.$cha % (1000 * 60 * 60)/(1000 * 60));
				_this.$nSec = parseInt(_this.$cha % (1000 * 60)/1000);
				_this.$sale_tip_time.find(".day").html(_this.$nDay);
				_this.$sale_tip_time.find(".hour").html(_this.$nHour);
				_this.$sale_tip_time.find(".min").html(_this.$nMin);
				_this.$sale_tip_time.find(".sec").html(_this.$nSec);

			},500)
		}
		
	}
	return new Down();
})