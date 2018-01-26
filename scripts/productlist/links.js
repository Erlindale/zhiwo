define( [ "jquery" ], function(){
	class Link{
		constructor(){};
		init(){
			// 获取链接
			this.t_log = $( ".login" );
			this.t_register = $( ".register" );
			this.h_shopcar =$(".header_myshopcar,#sidebar_shopcar");
			this.t_mainnav = $(".productslist span,.mainlist_inner a,.look_brand_more");
			this.n_list = $(".goods_img");
			this.clogo = $(".header_clogo")
			
			this.t_log.on( "click", $.proxy( this.to_login, this) );
			this.t_register.on( "click", $.proxy( this.to_register, this) );
			this.h_shopcar.on("click",$.proxy(this.to_shoppingcart,this));
			this.n_list.on("click",$.proxy(this.to_product,this));
			this.clogo.on("click",$.proxy(this.to_index,this));
		};
		to_login(){     
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_register(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
		to_shoppingcart(){
			self.location.href = "http://localhost:8888/html/shoppingcart.html";
		};
		to_product(){
			self.location.href = "http://localhost:8888/html/product.html"
		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html"
		}
	};
	return new Link();
} );