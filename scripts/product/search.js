define(["jquery"],function($){
	class Search{
		constructor(){};
		init( ){
			this.search = $( ".search_box_text " );
			this.keyword = $(".search_list")
			// 设置定时器
			this.timer = null;
			this.index = 0;
			this.search.on( "input", $.proxy( this.result, this ) );
			this.search.on("blur",$.proxy( this.blur, this ))
		};
		result(){
			let $val = this.search.val();
			let _this = this;
			clearTimeout(this.timer);
			this.timer = setTimeout(function(){
				_this.keyword.css({
					"display":"block"
				})
				$.ajax({
					url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $val + "&cb=callback",
					type:"GET",
					dataType:"jsonp",//指定服务器返回的数据类型
					jsonpCallback:"callback",//指定回调函数的名字
					success:function(data){
						
						let n= 6;
						
						for(let i = 0; i < n ; i++){
							console.log(data.s[i]);
							_this.keyword.children().eq(i).html(data.s[i]);
						}
					}
				});
				if($val == ""){
					_this.keyword.children().html("");
					_this.keyword.css({
					"display":"none"
				})
				}
			},500)
		};
		blur(){
			this.keyword.css({
				"display":"none"
			})
		}
	};
	return  new Search();
})