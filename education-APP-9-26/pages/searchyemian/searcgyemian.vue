<template>
	<view class="a1">
		<!-- 搜索页面 -->
		<view class="a2" @click="add"><div></div></view>

		<view class="a3"><input type="text" placeholder="请输入你要搜索的内容" @confirm="myKeydown" v-model="values" /></view>

		<span class="a4" @click="add1">取消</span>
	</view>
	<!-- 热门搜索和历史搜索 -->
	<view v-if="hotData.length == 0">
		<view class="hot">
			<p>热门搜索</p>
			<view class="nav">
				<span v-for="item in navData" :key="item.id" @click="add2(item.name)">{{ item.name }}</span>
			</view>
		</view>
		<view class="history">
			<p>
				<span>历史搜索</span>
				<span @click="qing">清空</span>
			</p>
			<ul>
				<li v-for="item in valuess" :key="item">{{ item }}</li>
			</ul>
		</view>
	</view>

	<!-- 综合排序  全部课程  全部分类 -->

	<view v-else>
		<view class="paixi">
			<view class="topp1"><uni-data-select :clear="false" v-model="value" :localdata="range" @change="change"></uni-data-select></view>
			<view class="topp1"><uni-data-select :clear="false" v-model="value" :localdata="range1" @change="change"></uni-data-select></view>
			<view class="topp1"><uni-data-select :clear="false" v-model="value" :localdata="range1" @change="change"></uni-data-select></view>
		</view>

		<!-- 存放数据的 -->
		<view class="hot">
			<view class="hot1" v-for="item in hotData" :key="item.id" @click="add4(item.id)">
				<view class="hot2">
					<image :src="item.mainImage" mode=""></image>
					<p>{{ item.totalTime }}</p>
				</view>
				<view class="hot3">
					<span>{{ item.title }}</span>
					<p class="pl">{{ item.nickName }}</p>
					<p class="p2">
						<span v-if="item.isFree == 0">免费</span>
						<span v-else>￥{{ item.priceDiscount }}</span>
						<span>{{ item.studyTotal }}人在学</span>
					</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getRe } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	// 加载数据
	onReachBottom() {
		console.log(123123);
		if (this.hotData.length == 50) {
			uni.showToast({
				title: '没有更多数据了'
			});
		} else {
			let page1 = this.page++;
			getRe(page1).then(res => {
				console.log(res, 'resres');
				this.hotData = [...this.hotData, ...res.data.records];
			});
		}
	},
	setup() {
		const data = reactive({
			// 导航区的数据
			navData: [
				{
					id: 0,
					name: 'java'
				},
				{
					id: 1,
					name: 'Python'
				},
				{
					id: 3,
					name: 'Vue.js'
				},
				{
					id: 4,
					name: 'React'
				},
				{
					id: 5,
					name: 'ScringBoot'
				},
				{
					id: 6,
					name: 'Scringcloud'
				}
			],
			// 搜索出来的数据
			hotData: [],
			// 下拉菜单的数据
			range: [{ value: 0, text: '综合排序' }, { value: 1, text: '最新排序' }, { value: 2, text: '热门推荐' }],
			range1: [{ value: 0, text: '全部课程' }, { value: 1, text: '免费课程' }, { value: 2, text: '付费课程' }],
			// 搜索框的内容
			values: '',
			valuess: []
		});

		// 点击返回箭头和取消按钮返回首页
		let add = () => {
			uni.switchTab({
				url: '/pages/index/index'
			});
		};
		// input回车事件
		let myKeydown = () => {
			console.log(24234);
			// 搜索的数据
			getRe().then(res => {
				console.log(res, 'resresresresres');
				data.hotData = res.data.records;
				if (data.values != '') {
					// 讲输入框的内容添加进数组中
					data.valuess.unshift(data.values);
				}
				// 数组去重
				data.valuess = [...new Set(data.valuess)];
			});
		};
		//
		let change = () => {
			console.log(123123);
			myKeydown();
		};
		// 点击取消按钮
		const add1 = () => {
			data.hotData = [];
			data.values = '';
		};
		// 点击清空按钮
		let qing = () => {
			data.valuess = [];
		};
		// 点击上面的额导航栏
		let add2 = name => {
			console.log(name);
			// 讲输入框的内容添加进数组中
			data.valuess.unshift(name);
			// 数组去重
			data.valuess = [...new Set(data.valuess)];
			// 搜索的数据
			console.log(data.valuess);
			getRe().then(res => {
				console.log(res, 'resresresresres');
				data.hotData = res.data.records;
				if (data.values != '') {
					// 讲输入框的内容添加进数组中
					data.valuess.unshift(data.values);
				}

				// 数组去重
				data.valuess = [...new Set(data.valuess)];
			});
		};
		const add4=(id)=>{
			console.log(id);
			uni.navigateTo({
				url:'/pages/detalis/detalis'
			})
		}

		return {
			...toRefs(data),
			add,
			add1,
			add2,
			myKeydown,
			change,
			qing,
			add4
		};
	}
};
</script>

<style lang="scss">
.a1 {
	display: flex;
	height: 80rpx;
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 1;
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
		margin-top: 10px;
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
			margin-right: 10px;
			margin-top: 10px;
		}
	}
}
.hot {
	margin-top: 20rpx;
	margin: 20rpx 40rpx;
	p {
		height: 60rpx;
		line-height: 60rpx;
		span:nth-of-type(2) {
			float: right;
			font-size: 26rpx;
			color: gray;
		}
		span:nth-of-type(1) {
			font-size: 40rpx;
			position: relative;
			span {
				font-size: 20rpx;
				display: inline-block;
				background-color: red;
				color: #fff;
				height: 30rpx;
				width: 60rpx;
				line-height: 30rpx;
				border-radius: 20rpx;
				border-bottom-left-radius: 0px;
				position: absolute;
				bottom: 15rpx;
				left: 170rpx;
			}
		}
	}

	.hot1 {
		width: 100%;
		height: 200rpx;
		// background-color: red;
		margin-top: 40rpx;
		display: flex;
		.hot2 {
			width: 45%;
			height: 100%;
			position: relative;
			image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
			p {
				position: absolute;
				bottom: 0;
				right: 15rpx;
				font-size: 16rpx;
				color: white;
				background-color: rgba(0, 0, 0, 0.3);
				border-radius: 25%;
			}
		}
		.hot3 {
			flex: 1;
			margin-left: 20px;
			span {
				font-size: 13px;
				font-weight: 900;
			}
			p {
				font-size: 20rpx;
				color: gray;
				span:nth-of-type(1) {
					color: red;
				}
			}
		}
	}
}
.paixi {
	display: flex;
	padding: 0 10px;
	justify-content: space-between;
	position: sticky;
	top: 40px;
	background-color: #fff;
	z-index: 1;
	.topp1 {
		width: 100px;

		border-color: white;
		.uni-data-select {
			border: 0;
			outline: 0;
			border-color: #fff;
		}
	}
}
</style>
