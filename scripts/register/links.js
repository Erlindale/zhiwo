define( [ "jquery" ],function(){
	class Link{
		constructor(){};
		init(){
			// 获取跳转按钮
			
			this.sign = $( ".userlogin_title p a" );
			
			this.sign.on( "click", $.proxy( this.to_register, this ) );
		};
		
		to_register(){
			this.sign.attr( "href", "http://localhost:8888/html/login.html" );
		};
	};
	return new Link();
} );