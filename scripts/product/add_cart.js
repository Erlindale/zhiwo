/* 加入购物车 */
define( [ "jquery", "cookie" ], function(){
	class AddCart{
		constructor(){
			this.init();
		};
		init(){
			 console.log("添加进购物车!");
			// 获取对应的商品
			this.info = $( ".detail_single_info" );
			// 获取按钮
			this.add_btn = $( "#btn_add_cart" );
			// console.log(this.add_btn)
			this.add_btn.on( "click", $.proxy( this.to_buy, this ) );
		};
		to_buy(){
			// 先判断是否登录
			
				// 获取对应商品的id
				// this.ID = $( ".details_magnifier" ).attr( "goodsid" );
				// // console.log( this.ID );
				// // 获取礼品规格类型
				// this.type = $( ".format_act span" ).text();
				// console.log(this.type)
				// // 获取数量
				// this.count = parseInt( $( ".count_num" ).val() );
				// // console.log(this.count)
				// // 判断是否存在该cookie
				// if( $.cookie( "cart" ) ){
				// 	// 存在,继续判断是否存在需要购买的商品
				// 	let sCookie = $.cookie( "cart" );
				// 	// console.log( sCookie)
				// 	let aCookie = JSON.parse( sCookie );
				// 	console.log( aCookie );
				// 	// 假设不存在该商品
				// 	let flag = false;
				// 	let _this = this;
				// 	// 判断是否存在
				// 	aCookie.forEach( function( item ){
				// 		if( _this.ID == item.goodsID ){
				// 			// 存在该商品 
				// 			let n = parseInt( item.goodsCount );
				// 			n += _this.count;
				// 			item.goodsCount = n;
				// 			// 证明存在
				// 			flag = true;
				// 		};
				// 	} );
						

				// 	// 若不存在,则创建结构
				// 	if( !flag ){
				// 		let a = {
				// 			goodsID: _this.ID,
				// 			goodsCount: _this.count,
				// 			giftType: _this.type
				// 		};
				// 		aCookie.push( a );
				// 	};
				// 	// 更新cooKie
				// 	sCookie = JSON.stringify( aCookie );
				// 	$.cookie( "cart", sCookie, {
				// 		expires: 20,
				// 		path: "/"
				// 	} );
				// } else {
					// 不存在  就直接创建cookie
					// let str = '[{"goodsID":"'+this.ID+'","goodsCount":"'+this.count+'","giftType":"'+this.type+'"}]';
					// $.cookie( "cart", str, {
					// 	expires: 20,
					// 	path: "/"
					// } );
				// };
				///$( "#tip" ).fadeIn();
			// }
			
		};
	};
	return new AddCart();
} );