define(["jquery"],function($){
	function Tab(){

	}
	Tab.prototype = {
		constructor:Tab,
		init:function(){
			this.$index = 0;
			this.$brand = $(".brand_bc_page");
			this.$navBtn = $('.brand_b_nav');
			this.$navBtnLi = this.$navBtn.find('li');
			// console.log(this.$navBtnLi)
			this.$tabPage = this.$navBtn.next().find('.brand_bc_page');
			var setup = {
				url:"http://localhost:8888/data/brand.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then(this.rendring);

			this.$navBtnLi.mouseenter($.proxy(this.tabon,this))
		},
		// 加载图片
		rendring:function(res){
			console.log(res.selling.selling_main);
			var _this = this;
			res.selling.selling_main.forEach(function(item,index){
				_this.$brand.find("img").eq(index).attr("src",item);

			})
		},
		tabon:function(evt){
			
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
		},
	}
	return new Tab();
})