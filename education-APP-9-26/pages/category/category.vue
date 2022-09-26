<template>
	<!-- 分类 -->
	<view class="hearde">
		<span>分类</span>
		<uni-icons type="search" size="25" class="sou" color="#fff" @click="sou"></uni-icons>
	</view>
	<view style="height: 40px;"></view>
	<view class="bag">
		<view class="pics">
			<scroll-view class="left" scroll-y>
				<view @click="add(item.id)" v-for="(item, index) in leftMenuList" :key="item.id" :class="active === item.id ? 'active' : ''">{{ item.name }}</view>
			</scroll-view>
		</view>
		<view class="bottom">
			<text v-for="(item, index) in rightList" :key="index" class="text1">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
import { getTitle } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			//左侧菜单
			leftMenuList: [],
			// 右侧数据
			rightList: [],
			active: 0
		});
		// 导航区
		getTitle().then(res => {
			data.leftMenuList = res.data;
			// console.log(res);
		});
		// 点击事件
		const add = id => {
			console.log(id);
			console.log(data.leftMenuList);
			data.active = id;
			// 获取到点击id的子内容
			data.leftMenuList.forEach(item => {
				if (item.id == id) {
					data.rightList = item.labelList;
				}
			});
			console.log(data.rightList, 123123);
		};
		// 点击搜索图标
		const sou = () => {
			console.log(123);
			uni.reLaunch({
				url: '/pages/searchyemian/searcgyemian'
			});
		};

		return {
			...toRefs(data),
			add,
			sou
		};
	}
};
</script>

<style lang="scss">
.pics {
	height: 100%;
	display: flex;
	padding: 40px 0;
	background-color: #e7e7e7;

	.left {
		view:first-child {
			margin-top: 0rpx !important;
		}
		width: 200rpx;
		height: 100%;
		view {
			margin-top: 10rpx;
			height: 150rpx;
			line-height: 80rpx;
			color: #333;
			text-align: center;
			font-size: 35rpx;
		}
		.active {
			color: blue;
		}
	}
}
.hearde {
	position: fixed;
	z-index: 1;
	height: 40px;
	width: 100%;
	background-color: rgba(52, 93, 194);
	text-align: center;
	color: white;
	span {
		color: white;
		font-size: 20px;

		line-height: 40px;
	}
	.sou {
		float: right;
		line-height: 40px;
		margin-right: 10px;
	}
}

.bag {
	display: flex;
	.bottom {
		
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		height: 100px;
		position: fixed;
		top: 80px;
		left: 100px;
		.text1 {
			border: 1px solid #ccc;
			height: 20px;
			border-radius: 5px;
			padding: 3px;
			margin-left: 5px;
		}
	}
}
</style>
