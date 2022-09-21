<template>
	<view class="a1">
		<!-- 搜索页面 -->
		<view class="a2" @click="add"><div></div></view>

		<view class="a3"><input type="text" placeholder="请输入你要搜索的内容" /></view>

		<span class="a4" @click="add">取消</span>
	</view>
	<view class="hot">
		<p>热门搜索</p>
		<view class="nav">
			<span v-for="item in navData" :key="item.id">{{ item.name }}</span>
		</view>
	</view>
	<view class="history">
		<p>
			<span>历史搜索</span>
			<span>清空</span>
		</p>
		<ul>
			<li>python</li>
		</ul>
	</view>
</template>

<script>
import { getTitle } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			// 导航区的数据
			navData: []
		});
		// 导航区
		getTitle().then(res => {
			data.navData = res.data.slice(0, 6);
			console.log(res.data);
		});
		// 点击返回箭头和取消按钮返回首页
		let add = () => {
			uni.switchTab({
				url: '/pages/index/index'
			});
		};

		return {
			...toRefs(data),
			add
		};
	}
};
</script>

<style lang="scss">
.a1 {
	display: flex;
	height: 80rpx;
	.a2 {
		width: 100rpx;

		div {
			width: 20rpx;
			height: 20rpx;
			border-left: 4rpx solid gray;
			border-bottom: 4rpx solid gray;
			margin: auto;
			transform: rotate(45deg);
			margin-top: 30rpx;
		}
	}
	.a3 {
		flex: 1;
		line-height: 80rpx;
		input {
			height: 60rpx;
			border-radius: 40rpx;
			margin-top: 10rpx;
			background-color: rgb(25, 25, 25, 0.06);
			padding-left: 60rpx;
		}
	}
	.a4 {
		width: 100rpx;
		text-align: center;
		line-height: 80rpx;
	}
}
.hot {
	margin: 20rpx;
	p {
	}
}
.nav {
	margin-top: 10px;
	flex-wrap: wrap;
	display: flex;
	span {
		display: inline-block;
		border: 1px solid rgba(0, 0, 0, 0.5);
		padding: 3px;
		border-radius: 5px;
		color: #ccc;
		font-size: 12px;
		margin-left: 10px;
	}
}
.history {
	margin-top: 20px;
	p {
		margin: 10px;
		span:nth-of-type(2) {
			color: gray;
			float: right;
		}
	}
	ul {
		list-style: none;
		li {
			display: inline-block;
			border: 1px solid rgba(0, 0, 0, 0.5);
			padding: 3px;
			border-radius: 5px;
			color: #ccc;
			font-size: 12px;
		}
	}
}
</style>
