<template>
	<view>
		<view class="title">
			<view class="top">
				<view>张三</view>
				<view>020-81167888</view>
			</view>
			<view class="bottom">广东省广州市海珠区新港中路397号</view>
		</view>
		<view class="nav">购物车</view>
		<view class="car_box">
			<view class="car_item" v-for="(item, index) in List" :key="index">
				<view class="img"><image :src="item.url" mode=""></image></view>
				<view class="right">
					<view class="name">{{ item.name }}</view>

					<view class="goods_footer">
						<view class="price">￥{{ item.price }}</view>
						x{{ item.number }}
					</view>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="right">
				<view>合计：￥0</view>
				<view>包含运费</view>
			</view>
			<view class="jie">支付</view>
		</view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			goods: [],
			List: []
		});
    
		return {
			...toRefs(data),

		};
	},
	onShow() {
		uni.getStorage({
			key: 'goods',
			success: res => {
				this.goods = JSON.parse(res.data);
			}
		});
	}
};
</script>

<style lang="scss">
.car_box {
	padding: 20rpx;
	box-sizing: border-box;

	.car_item {
		display: flex;
		justify-content: space-between;
		height: 180rpx;
		align-items: center;
		margin: 20rpx 0;
		border-bottom: 1px solid #ccc;

		.img {
			width: 30%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.right {
			width: 55%;
			.goods_footer {
				display: flex;
				justify-content: space-between;
				padding: 20rpx 0;
			}
			.name {
				width: 100%;
				height: 72rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.price {
				color: #c00;
				margin: 10rpx 0;
			}
		}
	}
}
.title {
	width: 100%;
	padding: 0 20rpx;
	.top {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
}
.nav {
	margin-top: 20rpx;
	color: #eb4450;
	font-size: 40rpx;
	padding: 10rpx;
	border-top: 2rpx solid #eb4450;
	border-bottom: 2rpx solid #eb4450;
}
.footer {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	height: 100rpx;
	padding: 0 0 0 20rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	.left {
		flex: 1;
	}
	.right {
		margin-right: 20rpx;
	}
	.jie {
		width: 200rpx;
		background-color: #eb4450;
		text-align: center;
		line-height: 100rpx;
		color: white;
	}
}
</style>
