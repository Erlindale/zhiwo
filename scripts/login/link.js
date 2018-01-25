define( [ "jquery" ],function(){
	class Link{
		constructor(){};
		init(){
			// 获取跳转按钮
			
			this.reg = $( ".userlogin_title p a" );
			
			this.reg.on( "click", $.proxy( this.to_register, this ) );
		};
		
		to_register(){
			this.reg.attr( "href", "http://localhost:8888/html/register.html" );
		};
	};
	return new Link();
} );