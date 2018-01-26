define( [ "jquery" ],function(){
	class Link{
		constructor(){};
		init(){
			// 获取跳转按钮
			
			this.reg = $( ".userlogin_title p a" );
			this.t_log = $( ".login" );
			this.t_register = $( ".register" );
			this.clogo = $(".header_clogo,.shopcar_empty_tip2 a");
			this.reg.on( "click", $.proxy( this.to_register, this) );
			this.t_log.on( "click", $.proxy( this.to_login, this) );
			this.t_register.on( "click", $.proxy( this.to_reg, this ) );
			this.clogo.on("click",$.proxy(this.to_index,this));
		};
		to_reg(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
		to_register(){
			this.reg.attr( "href", "http://localhost:8888/html/register.html" );
		};

		to_login(){
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html"
		}
	};
	return new Link();
} );