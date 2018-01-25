define(["jquery"],function(){
	function Reg(){

	}
	Reg.prototype ={
		constructor:Reg,
		init:function(){
			this.mobile = $("#signup-mobile");//手机输入框
			this.pass = $("#signup-password");//密码输入框
			this.confirm = $("#signup-password-confirm");//确认密码输入框
			this.verifycode= $("#signup-verify-code");//验证码输入框
			this.error = $(".error");//错误提示信息
			this.submit = $("#signup-submit");
			this.m_flag = "";
			this.p_flag = "";
			this.c_flag = "";
			this.v_flag = "";

			this.reg_mobile = /(^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$)/;
			this.reg_verifyCode = /[A-Za-z0-9]/;
			this.mobile.on("blur",$.proxy(this.m_blur,this));//手机验证
			this.pass.on("blur",$.proxy(this.p_blur,this));//密码验证
			this.confirm.on("blur",$.proxy(this.c_blur,this));//重复密码验证
			this.verifycode.on("blur",$.proxy(this.v_blur,this));//验证码验证
			this.submit.on("click",$.proxy(this.test,this));
			// this.btn.on( "click", $.proxy( this.reg_val, this ));
		},
		m_blur:function(e){
			this.user = this.mobile.val();
			// console.log(user)
			var $this = $(e.target);
			var message = "";
			// //手机验证
			if(this.reg_mobile.test(this.user)){
				$this.parent().parent().find(".error").css({
					"display":"none"
				});
				this.m_flag = true;
			}else{
				$this.parent().parent().find(".error").css({
					"display":"block"
				})
				this.m_flag = false;
			}
		},
		p_blur:function(e){
			this.pass_v = this.pass.val();
			var $this = $(e.target);
			//密码验证
			if( this.pass_v.length >= 6 && this.pass_v.length <= 16 ){
				$this.parent().parent().find(".error").css({
					"display":"none"
				});
				this.p_flag = true;

			} else {
				
				$this.parent().parent().find(".error").css({
					"display":"block"
				})
				this.p_flag = false;
				// return;
			};
		},
		c_blur:function(e){
			let c_pass = this.confirm.val();
			var $this = $(e.target);
			if( c_pass == this.pass_v && c_pass != ""){
				$this.parent().parent().find(".error").css({
					"display":"none"
				});
				this.c_flag = true;

			} else {
				$this.parent().parent().find(".error").css({
					"display":"block"
				})
				this.c_flag = false;
				// return;
			};
		},
		v_blur:function(e){
			let v_code = this.verifycode.val();
			var $this = $(e.target);
			
			if( this.reg_verifyCode.test(v_code) ){
				$this.parent().parent().find(".error").css({
					"display":"none"
				});
				this.v_flag = true;

			} else {
				
				$this.parent().parent().find(".error").css({
					"display":"block"
				})
				this.v_flag = false;
				// return;
			};
		},
		test:function(){
			if(this.m_flag && this.p_flag &&this.c_flag &&this.v_flag){
				 $.cookie("user",'[{"user":"'+this.user+'"}]',{expires:7,path:'/'} );
				 window.location.href = "http://localhost:8888/index.html";
			}
		}
	}
	return new Reg();
})