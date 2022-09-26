<template>
	<!-- 阅读 -->
	<view class="header"><search></search></view>
	<view style="height: 50px;">	</view>
		

	<view class="nav">
		<view >
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="20">
				<view @click="add(0)" id="demo1" class="scroll-view-item_H uni-bg-red"><span :class="idx === 0 ? 'active' : ''">推荐</span></view>
				<view @click="add(index + 1)" id="demo1" class="scroll-view-item_H uni-bg-red" v-for="(item, index) in navData" :key="index">
					<span :class="idx === index + 1 ? 'active' : ''">{{ item.name }}</span>
				</view>
			</scroll-view>
		</view>
	</view>
	
	
	<view class="context" v-for="item in yuedata" :key="item.id">
		<view class="left">
			<span>{{ item.title }}</span>
			<p>{{ item.summary }}</p>
			<p>
				<span>{{ item.nickName }}</span>
				·
				<span>{{ item.updateDate }}</span>
				·
				<span>{{ item.viewCount }}赞</span>
			</p>
		</view>
		<view class="right"><image :src="item.imageUrl" mode=""></image></view>
	</view>
</template>

<script>
import { getTitle, getyue } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	// 加载数据
	onReachBottom() {
		console.log(123123);
		if(this.yuedata.length==100){
			uni.showToast({
				title:'没有更多数据了'
			})
			
		}else{
			let page1=this.page++
			getyue(page1).then(res=>{
				console.log(res,'resres');
				this.yuedata=[...this.yuedata,...res.data.records]	
			})
		}
		
		
	},
	setup() {
		const data = reactive({
			// 导航区的数据
			navData: [],
			yuedata: [],
			idx: 0
		});
		// 导航区
		getTitle().then(res => {
			data.navData = res.data;
			// console.log(res.data);
		});
		// 阅读数据
		getyue().then(res => {
			data.yuedata = res.data.records;
			console.log(res.data.records);
		});
		let add = idx => {
			console.log(idx);
			data.idx = idx;
			getyue().then(res => {
				data.yuedata = res.data.records;
				console.log(res.data.records);
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
.header {
	height: 50px;
	background-color: rgba(52, 93, 194);
	width: 100%;
	position: fixed;
	z-index: 1;
}
.nav{
	position: sticky;
	top: 50px;
	z-index: 1;
	background-color: #fff;
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
	border-bottom: 1px solid #ccc;
}
.scroll-view-item_H {
	display: inline-block;
	line-height: 100rpx;
	text-align: center;
	font-size: 36rpx;
	span {
		padding: 10px;
	}
}
.active {
	color: blue;
}
.context {
	display: flex;
	border-bottom: 1px solid #ccc;
	margin-top: 20px;
	.left {
		flex: 1;
		margin: 0 10px;
		
		span {
			font-size: 16px;
			font-weight: 700;
		}

		p:nth-of-type(1) {
			width: 206px;
			font-size: 12px;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: gray;
			margin-top: 10px;
		}
		p:nth-of-type(2) {
			margin-top: 10px;
			font-size: 12px;
			white-space: nowrap;
			span {
				color: gray;
				font-size: 12px;
			}
			span:nth-of-type(1) {
				color: #000;
			}
		}
	}
	.right {
		width: 40%;
		height: 100px;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
