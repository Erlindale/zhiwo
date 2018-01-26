define( [ "jquery" ], function(){
	class Rendering{
		constructor(){
			this.init();
		};
		init(){
			// /* brands */
			// console.log(str_url)
			this.$all_brands = $( ".brand_bc_page a" );//图片
			this.$all_brands_nav = $(".brand_b_nav li span");//标题
			// 今日头条
			this.$list_li = $(".m_list li");
			this.$list_img = $(".m_list_img img");
			this.$list_cname = $(".m_list_cname a");
			this.$list_cbuy = $(".m_list_cbuy span");
			this.$list_ctip = $(".m_list_ctip span")
			//今日新品
			this.$nlist_img = $(".n_list img");
			this.$nlist_efficacy = $(".goods_img_efficacy a");
			this.$goods_info = $(".pro_name a");
			this.$price_info = $(".price_info span");
			this.$sale_tip_count = $(".sale_tip_count span")
			let set_str = {
				url : "data/index_data.json",
				type : "GET"
			}   
			$.ajax( set_str ).then($.proxy(this.render,this));;
		};
		render( res ){	
			// console.log(res);
			this.res = res;
			let _this = this;
			/* brands 渲染 */
			$( res.all_brands.brands ).each( function( index, item ){
				_this.$all_brands.eq( index ).find( "img" ).attr( "src", item );
			} );
			$( res.all_brands.type ).each( function( index, item ){
				_this.$all_brands_nav.eq( index ).html( item );
			} );
			/*今日头条渲染 */
			// console.log(_this.$list_img)
			$(res.headlines.goods).each(function(index,item){
				_this.$list_img.eq(index).attr("src",item.img)
			});
			$(res.headlines.goods).each(function(index,item){
				_this.$list_cname.eq(index).html(item.describe)
			});
			$(res.headlines.goods).each(function(index,item){
				_this.$list_cbuy.eq(index).html(item.price)
			});
			$(res.headlines.goods).each(function(index,item){
				_this.$list_ctip.eq(index).html(item.number)
			})
			//今日新品渲染
			$(res.new_product).each(function(index,item){
				_this.$nlist_img.eq(index).attr("src",item.img);
			});
			$(res.new_product).each(function(index,item){
				_this.$nlist_efficacy.eq(index).html(item.title);
			});
			$(res.new_product).each(function(index,item){
				_this.$goods_info.eq(index).html(item.describe);
			});
			$(res.new_product).each(function(index,item){
				_this.$price_info.eq(index).html(item.price);
			});
			$(res.new_product).each(function(index,item){
				_this.$sale_tip_count.eq(index).html(item.number);
			})
		};
	};
	return new Rendering();
} );