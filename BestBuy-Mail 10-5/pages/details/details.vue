<template>
	<view class="header">
		<!-- 轮播图 -->

		<view class="img"><u-swiper class="image" :list="list.pics" name="pics_mid_url" height="400" img-mode="100%"></u-swiper></view>
		<view class="good_price">${{ list.goods_price }}</view>
		<view class="goods_name">
			<view class="goods_left">{{ list.goods_name }}</view>
			<view class="goods_star">
				<u-icon name="star"></u-icon>
				<view>收藏</view>
			</view>
		</view>
		<view>
			<title class="goods_tu">图文详情</title>
			<u-parse :html="list.goods_introduce"></u-parse>
		</view>
		<view class="footer"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view>
	</view>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
import { getDetails } from '@/api/api';
export default {
	setup() {
		const info = reactive({
			list: {
				cat_id: 0,
				pics: 0,
				goods_price: 0,
				goods_name: '',
				goods_introduce: ''
			},

			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: 'red'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			],
			/***本地信息存储*/

			parseData: []
		});

		const getLocalHostData = () => {
			uni.getStorage({
				key: 'infoList',
				success: function(res) {
					info.parseData = JSON.parse(res.data);
				}
			});
		};

		const setLocalHostInfo = () => {
			let cartList = {
				info,
				number: 1,
				checked: false
			};

			uni.setStorage({
				key: 'infoList',
				data: JSON.stringify(cartList)
			});
		};

		/**存储本地 将商品信息添加至本地，并判断是否重复添加**/

		const setAddGoodsCart = () => {
			getLocalHostData();
			console.log(info.parseData, '90');
			if (info.parseData.length === 0) {
				setLocalHostInfo();
			} else {
				const result = info.parseData.find(item => item.list.cat_id === info.list.cat_id);
				if (result) {
					
					result.number++;
					console.log(result.number++ ,'1231231')
					uni.setStorage({
						key: 'infoList',
						data: JSON.stringify(result)
					});
				} else {
					setLocalHostInfo();
				}
			}
		};

		const onClick = e => {
			console.log('我是跳转到购物车页面的');
			setAddGoodsCart();
		};

		const buttonClick = e => {
			console.log('我是加入购物车');
			setAddGoodsCart();
			// options[2].info++
		};

		return {
			...toRefs(info),
			onClick,
			buttonClick
		};
	},

	// 获取到商品的详情
	onLoad(opt) {
		getDetails(opt.id).then(res => {
			console.log(res);
			this.list = res.message;
		});
	}
};
</script>

<style lang="scss" scoped>
.header {
	.good_price {
		padding: 20rpx;
		color: #eb4450;
	}

	.goods_name {
		padding: 20rpx;
		display: flex;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		.goods_left {
			flex: 1;
		}
		.goods_star {
			width: 100rpx;
			text-align: center;
			border-left: 4rpx solid #ccc;
		}
	}
	.goods_tu {
		display: inline-block;
		padding: 20rpx;
		font-weight: 900;
		color: #eb4450;
	}
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
}
</style>
