define(["jquery"],function(){
	function Reg(){

	}
	Reg.prototype = {
		constructor:Reg,
		init:function(){
			this.user = $("#login-username");
			this.pass = $("#signup-password");
			this.reg_username = /^[\.\w\u4e00-\u9fa5\uF900-\uFA2D]{2,16}$/ig;
			this.reg_email = /^[\w\.\-\+]+@([\w\-]+\.)+[a-z]{2,4}$/ig;
			this.reg_mobile = /(^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$)/;
			this.user.on( "input", $.proxy( this.e_input, this ) );
			this.pass.on( "input", $.proxy( this.e_input, this ) );
			this.btn.on( "click", $.proxy( this.reg_val, this ) );
		},
		e_input:function(){

		},
		reg_val:function(){
			   
		}
	}
	return new Reg();
})