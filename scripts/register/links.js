define( [ "jquery" ],function(){
	class Link{
		constructor(){};
		init(){
			// 获取跳转按钮
			
			this.sign = $( ".userlogin_title p a" );
			this.t_register = $( ".register" );
			this.clogo = $(".header_clogo");
			this.t_log = $( ".login" );
			this.t_log.on( "click", $.proxy( this.to_login, this) );
			this.sign.on( "click", $.proxy( this.to_log, this ) );
			this.t_register.on( "click", $.proxy( this.to_reg, this ) );
			this.clogo.on("click",$.proxy(this.to_index,this));
		};
		
		to_log(){
			this.sign.attr( "href", "../html/login.html" );
		};
		to_register(){
			self.location.href = "../html/register.html";
		};

		to_login(){
			self.location.href = "../html/login.html";
		};
		to_index(){
			self.location.href = "../index.html"
		}
	};
	return new Link();
} );