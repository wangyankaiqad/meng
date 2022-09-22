<template>
	<view>
		<view class="topp">
			<!-- 搜索框 -->
			<search></search>
		</view>
		<!-- 轮播图 -->
		<mxg-banner></mxg-banner>
		<!-- 导航区 -->
		<view class="nav">
			<li v-for="item in navData" :key="item.id">{{ item.name }}</li>
		</view>
		<!-- 热门推荐 -->
		<recommend :hotData="hotData" :fout='fout1' :free='free1' @add='add'></recommend>
		<!-- 近期上新 -->
		<view class="hot">
			<p>
				<span>
					最近上新
					<span>NEW</span>
				</span>
				<span>全部></span>
			</p>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="120">
					<view id="demo1" class="scroll-view-item_H" v-for="item in xinData" :key="item.id">
						<view class="a1">
							<image :src="item.mainImage" mode=""></image>
							<span>{{item.totalTime}}</span>
						</view>
						<span>{{item.title}}</span>
						<p class='p1'>{{item.nickName}}</p>
						<p class='p2'>
							<span>免费</span>
							<span>{{item.studyTotal}}人在看</span>
						</p>
					</view>
				</scroll-view>
			</view>
		</view>
		<recommend :hotData="mianData" :fout='fout' :free='free'></recommend>
	</view>
	<view class="foote">
		-----我是有底线的-----
	</view>
</template>

<script>
import { getTitle, getRe, getxin,getmian } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	// 加载数据
	onReachBottom() {
		console.log(123123);
		if(this.mianData.length==100){
			uni.showToast({
				title:'没有更多数据了'
			})
			
		}else{
			let page1=this.page++
			getmian(page1).then(res=>{
				console.log(res,'resres');
				this.mianData=[...this.mianData,...res.data.records]	
			})
		}
		
		
	},
	setup() {
		const data = reactive({
			// 导航区的数据
			navData: [],
			//热门推荐的数据
			hotData: [],
			// 最近上新的数据
			xinData: [],
			// 免费精选
			mianData:[],
			fout:'免费精选',
			fout1:'热门推荐',
			free:'FREE',
			free1:'HOT',
			// 页数
			page:1,
		
		
			
		});
		// 导航区
		getTitle().then(res => {
			data.navData = res.data.slice(0, 8);
		});
		// 热门推荐
		getRe().then(res => {
			data.hotData = res.data.records.slice(0, 5);
			// console.log(res.data.records);
		});
		// 最近上新
		getxin().then(res => {
			data.xinData = res.data.records.slice(0, 8);
			// console.log(res.data.records, 123123);
		});
		// 免费精选
		getmian().then(res => {
			data.mianData = res.data.records;
			console.log(res.data.records, 123123);
		});
		// 点击去往详情页
	    const add=(id)=>{
			console.log(id);
			uni.navigateTo({
				url:'/pages/detalis/detalis'
			})
			
		} 
		
	

		return {
			...toRefs(data),
			add
		};
	}
};
</script>

<style lang="scss">
.topp {
	height: 50px;
	width: 100%;
	position: fixed;
	// background-color: blue;
	z-index: 1;
}
.top {
	height: 580rpx;
	background-image: linear-gradient(to bottom, rgb(69, 50, 140), rgb(0, 0, 0, 0));
	overflow: hidden;
	text-align: center;
}

.nav {
	display: flex;
	width: 90%;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: auto;
	margin-top: 20rpx;
}
li {
	width: 150rpx;
	height: 70rpx;
	background-color: #f8f9fb;
	text-align: center;
	line-height: 70rpx;
	font-size: 26rpx;
	border-radius: 20rpx;
	overflow: hidden;
	margin-top: 14rpx;
	list-style: none;
}
.hot {
	margin-top: 30rpx;
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
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
}
.scroll-view-item_H {
	display: inline-block;
	width: 40%;
	font-size: 36rpx;
	margin: 10px;
	box-shadow: 1px 1px 5px rgb(109, 109, 109,.3);
	border-radius: 20rpx;
	.a1{
		position: relative;
		span{
			position: absolute;
			bottom: 10rpx;
			z-index: 1;
			right: 10rpx;
			color: #fff;
		}
	}
	image{
		width: 100%;
		height: 160rpx;
		border-radius: 10rpx;
	}
	span{
		font-size: 24rpx;
		white-space:normal;
		font-weight: 900;
		margin: 0;
		
	}
	.p1{
		font-size: 20rpx;
		color: gray;
		margin: 0;
	}
	.p2{
		padding: 0 10rpx;
	}
	.p2 span:nth-of-type(1){
		font-size: 24rpx;
		color:red;
		margin: 0;
	}
	
}
.foote{
	text-align: center;
}
</style>
