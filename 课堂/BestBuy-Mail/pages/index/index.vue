<template>
	<view>
		<view class="btnTop"><u-button>搜索</u-button></view>
		<view class="wrap"><u-swiper :list="data.List" name="image_src" height="340"></u-swiper></view>
		<view class="cateClass">
			<u-grid :col="4" :border='false'>
				<u-grid-item v-for="(item, index) in data.cateList" :key="index">
					<image :src="item.image_src" mode="" class="img"></image>
				</u-grid-item>
			</u-grid>
		</view>
		
	</view>
	<homeFloder></homeFloder>
	
</template>

<script lang="ts" setup>
import { getSwiper, getCart } from '@/api/api';
import { reactive } from 'vue';
import homeFloder from './components/homeFloder.vue'
import * as TS from '@/api/definet';

const data = reactive({
	// 轮播图的数组
	List: [],
	// 导航区的数组
	cateList: []
});

// 轮播图的接口
getSwiper().then(res => {
	data.List = res.message;
});

// 导航栏
getCart().then(res => {
	console.log(res);
	if (res.meta.status === TS.Code.SUCCESS) {
		data.cateList = res.message;
	} else {
		uni.showToast({
			title: res.meta.msg,
			icon: 'error'
		});
	}
});
</script>

<style lang="scss" scoped>
	.wrap{
		height: 340rpx;
		width: 100%;
	}
.btnTop {
	height: 90rpx;
	background-color: #eb4450;
	padding: 0 10rpx;
	.u-button {
		height: 50rpx;
	}
}
.cateClass{
	.img{
		width:148rpx ;
		height: 160rpx;
	}
}
</style>
