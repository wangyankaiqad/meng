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
			<view class="car_item" v-for="(item, index) in goods" :key="index">
				<view>
					<u-checkbox-group><u-checkbox @change="checkboxChange(item)" v-model="item.status" shape="circle"></u-checkbox></u-checkbox-group>
				</view>
				<view class="img"><image :src="item.url" mode=""></image></view>
				<view class="right">
					<view class="name">{{ item.name }}</view>

					<view class="goods_footer">
						<view class="price">￥{{ item.price }}</view>
						<u-number-box v-model="item.number" :min="1" @change.prevent="valChange(index)"></u-number-box>
					</view>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="left">
				<u-checkbox-group><u-checkbox v-model="flag" @change="quanxuan" shape="circle">全选</u-checkbox></u-checkbox-group>
			</view>
			<view class="right">
				<view>合计：￥{{ pirce }}</view>
				<view>包含运费</view>
			</view>
			<view class="jie" @click="jiesuan">结算</view>
		</view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
export default {
	setup() {
		const data = reactive({
			goods: [],
			// 全选按钮的标识
			flag: false,
			// 价钱
			pirce: 0,
			// 结算的个数
			num: 0
		});
		// 存储数据
		const setData = () => {
			uni.setStorage({
				key: 'goods',
				data: JSON.stringify(data.goods)
			});
		};
		// 步进器
		const valChange = (index: number) => {
			console.log(index);
			data.goods[index].number++;
			setData();
		};

		// 点击复选框
		const checkboxChange = e => {
			data.goods.forEach(item => {
				if (item.id === e.id) {
					item.status = !e.status;
				}
			});
			data.flag = data.goods.every(item => item.status);

			setData();
		};
		// 点击全选
		const quanxuan = e => {
			data.goods.forEach(item => {
				item.status = e.value;
			});
			setData();
		};
		// 价钱
		const pirce = computed(() => {
			let num = 0;
			data.goods.forEach(item => {
				if (item.status) {
					num += item.number * item.price;
				}
			});
			return num;
		});

		// 点击结算按钮
		const jiesuan = () => {
			// 判断信息中是否有选中的商品
			let aa = data.goods.some(item => item.status == true);
			if (aa == true) {
				uni.navigateTo({
					url: '/pages/settlement/settlement'
				});
			} else {
				uni.showToast({
					title:'还没有选择商品'
				})
			}
		};

		return {
			...toRefs(data),
			valChange,
			checkboxChange,
			quanxuan,
			pirce,
			jiesuan
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
		.left {
			width: 10%;
		}
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
