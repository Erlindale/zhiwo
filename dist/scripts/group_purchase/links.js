define( [ "jquery" ], function(){
	class Link{
		constructor(){};
		init(){
			// 获取链接
			this.t_log = $( ".login" );
			this.t_register = $( ".register" );
			this.h_shopcar =$(".header_myshopcar,#sidebar_shopcar");
			this.t_mainnav = $(".productslist span,.mainlist_inner a,.look_brand_more");
			this.m_list = $(".m_list li");
			this.n_list = $(".goods_img");
			this.clogo = $(".header_clogo")
			this.t_log.on( "click", $.proxy( this.to_login, this) );
			this.t_register.on( "click", $.proxy( this.to_register, this) );
			this.h_shopcar.on("click",$.proxy(this.to_shoppingcart,this));
			this.t_mainnav.on("click",$.proxy(this.to_productslist,this));
			this.m_list.on("click",$.proxy(this.to_grouppurchase,this));
			this.n_list.on("click",$.proxy(this.to_product,this));
			this.clogo.on("click",$.proxy(this.to_index,this));
		};
		to_login(){
			window.location.href = "../html/login.html";
		};
		to_register(){
			window.location.href = "../html/register.html";
		};
		to_shoppingcart(){
			window.location.href = "../html/shoppingcart.html";
		};
		to_productslist(){
			window.location.href = "../html/productslist.html"
		};
		// to_grouppurchase(){
		// 	self.location.href = "http://localhost:8888/html/group_purchase.html"
		// };
		to_product(){ 
			window.location.href = "../html/product.html"
		};  
		to_index(){
			window.location.href = "../index.html"
		}
	};
	return new Link();
} );