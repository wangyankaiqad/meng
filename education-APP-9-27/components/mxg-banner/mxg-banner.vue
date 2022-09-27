<template>
	<view class="swiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="300" indicator-color="#ccc" indicator-active-color="#fff">
			<swiper-item v-for="(item, index) in navData" :key="index"  @click="add(item.id)" :style="`background-image: linear-gradient(${item.background}, #fff);`">
				<image :src="item.imageUrl"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { getlun } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	name: 'mxg-banner',
	setup(proxy,xst) {
		const data = reactive({
			// 定义一个数组
			navData: []
		});
		// 获取请求的连接
		getlun().then(res => {
			// console.log(res, 111111111111);
			// 进行赋值
			data.navData = res.data;
		});
		let add=(id)=>{
			xst.emit('add',id)
		}
		// 返回data
		return {
			...toRefs(data),
			add
		};
	}
};
</script>

<style lang="scss">
.swiper {
	width: 100%;
	swiper {
		width: 100%;
		margin: 0 auto;
		height: 500rpx;
		// display: flex;

		image {
			border-radius: 20rpx;
			padding-top: 90rpx;
			margin-top: 4%;
			margin-left: 5%;
			width: 90%;
			height: 100%;
		}
	}
}
image {
	border-radius: 20px;
}
</style>
