<template>
	<view class="wrap">
		<u-row gutter="16" class="urow">
			<u-col span="4"><view class="demo-layout bg-purple urow">1</view></u-col>
			<u-col span="8"><view class="demo-layout bg-purple-light urow">2</view></u-col>
		</u-row>
	</view>
</template>

<script></script>

<style scoped lang="scss">
.wrap {
	padding: 24rpx;
}
.u-row {
	margin: 40rpx 0;
}

.demo-layout {
	height: 80rpx;
	border-radius: 8rpx;
	padding: 0;
	margin: 0;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.bg-purple-dark {
	background: #99a9bf;
}
</style>
