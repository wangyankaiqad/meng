<template>
	<!-- 设置页面 -->
	<view class="header">
		<uni-icons type="back" size="25" @click="add"></uni-icons>
		<span>设置</span>
	</view>
	<view class="nav">
		<span>允许非WIFI网络播放</span>		
	</view>
	<view class="nav">
		<span>允许非WIFI网络缓存</span>		
	</view>
	<view class="nav">
		<span>视频自动连续播放</span>		
	</view>
	<view class="nav nav1">
		<span>清楚应用缓存</span>	
			<span>1kb</span>
	</view>
</template>

<script>
export default {
	setup() {
		const add = () => {
			uni.reLaunch({
				url: '/pages/my/my'
			});
		};
		return {
			add
		};
	}
};
</script>

<style lang="scss">
.header {
	height: 50px;
	background-color: #fff;
	border-bottom: 5px solid #efefef;
	line-height: 50px;
	text-align: center;
	.uni-icons {
		float: left;
		padding-left: 10px;
	}
	span {
		font-size: 18px;
		font-weight: 700;
	}
}
.nav{
	padding: 10px;
	height: 40px;
	line-height: 40px;
	border-bottom: 3px solid #efefef;
}
.nav1{
	display: flex;
	justify-content: space-between;
}
</style>
