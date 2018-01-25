define(["jquery"],function($){
	function Input(){

	}
	Input.prototype = {
		constructor:Input,
		init:function(){
			this.$sign_txt = $(".sign_txt");
			this.$auto_btn = $(".auto_login");
			this.$c_change = $("#change_code");
			this.$clickNum = 0;
			this.$sign_txt.on( "focus", $.proxy( this.s_focus) );
			this.$sign_txt.on( "blur", $.proxy( this.s_blur) );
			this.$auto_btn.on("click",$.proxy(this.tick,this));
			this.$c_change.on("click",$.proxy(this.change_code));

		},
		s_focus:function(){
			$(this).addClass('focus_sel');

		},
		s_blur:function(){
			$(this).removeClass('focus_sel');
		},
		tick:function(){
		
			this.$clickNum++;
			console.log(this.$clickNum)
			if(this.$clickNum % 2 == 0){
				this.$auto_btn.find("label").removeClass('u_checked');
			}else{
				this.$auto_btn.find("label").addClass('u_checked');
			}
		},
		change_code:function(){
			var d = new Date();
			var src = 'http://www.zhiwo.com/verifycode?'+d.getTime();
			$('#verify_code').attr('src',src);
		}
	}
	
	return new Input();
})