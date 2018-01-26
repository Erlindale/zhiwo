define(["jquery","cookie"],function(){
	function Reg(){

	}
	Reg.prototype = {
		constructor:Reg,
		init:function(){
			this.user = $("#login-username");
			this.pass = $("#signup-password");
			
			this.btn = $(".u_info_btn");
			this.error = $(".error")
			this.reg_username = /^[0-9a-zA-Z]{2,16}$/;
			this.reg_email = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
			this.reg_mobile = /(^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$)/;
			this.reg_verifyCode = /[A-Za-z0-9]/;
			
			this.user.on("click",$.proxy(this.u_input,this));
			this.pass.on("click",$.proxy(this.p_input,this));
			this.btn.on( "click", $.proxy( this.reg_val, this ));
		},
		u_input:function(){
			if (this.user.length > 0) {
				var _this = this;
				this.user.click(function(){
					if(_this.user.val() == '用户名/邮箱/手机号'){
						_this.user.val('');
					}
				})
				.focusout(function() {
					if(_this.user.val() == ''){
						_this.user.val('用户名/邮箱/手机号');
					}
				})
			}
			this.error.eq(0).css({
					"display":"none"
			})

		},
		p_input:function(){
			this.error.eq(1).css({
					"display":"none"
			})
		},
		reg_val:function(){
			let user = this.user.val();
			let pass = this.pass.val();
			let flag = false;
			//用户名验证
			if(this.reg_username.test(user) || this.reg_email.test(user) || this.reg_mobile.test(user)){
				flag = true;
			}else{
				this.error.eq(0).css({
					"display":"block"
				})
				flag = false;
				// return;
			}
			//密码验证
			if( pass.length >= 6 && pass.length <= 16 ){
				flag = true;

			} else {
				this.error.eq(1).css({
					"display":"block"
				})
				flag = false;
				// return;
			};
			// 获取cookie
			if(flag){
				 $.cookie("user",'[{"user":"'+user+'"}]',{expires:7,path:'/'} );
				 window.location.href = "http://localhost:8888/index.html";
			}
		}
	}
	return new Reg();
})