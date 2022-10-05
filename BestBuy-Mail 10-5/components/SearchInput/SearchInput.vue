<template>
	<view class="btnTop"><u-button @click="btn">搜索</u-button></view>
</template>

<script lang="ts">
export default {
	name: 'SearchInput',
	setup() {
		const btn=()=>{
			uni.navigateTo({
				url:'/pages/SearchInput/SearchInput'
			})
		}
		
		return {
			btn
		}
	}
};
</script>

<style lang="scss">
.btnTop {
	height: 90rpx;
	background-color: #eb4450;
	padding: 0 10rpx;
	.u-button {
		height: 50rpx;
	}
}
</style>
