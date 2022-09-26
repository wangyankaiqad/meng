<template>
	<view class="return" @click="index">
		<uni-icons type="back" size="30" color="#fff"></uni-icons>

	</view>
	<view class="herade">
		<!-- 详情 -->
		<view class="img"><image :src="yuedata.mainImage" mode=""></image></view>
		<p>
			<span>￥{{ yuedata.priceDiscount }}</span>
			<span>￥{{ yuedata.priceOriginal }}</span>
			<span>优惠价</span>
		</p>
		<p>{{ yuedata.title }}</p>
		<p>
			<span>100%人好评</span>
			<span>368人在学</span>
		</p>
	</view>
	<view class="aa"></view>
	<view class="context">
		<span v-for="item in dataList" :key="item.id" @click="add(item.id)" :class="active === item.id ? 'active' : ''">{{ item.name }}</span>
	</view>
	<!-- 详情 -->
	<view v-show="active == 0"><image class="image" :src="yuedata.detailUrls" mode=""></image></view>
	<!-- 章节 -->
	<view v-show="active == 1">
		<view class="zhang" v-for="(item, index) in zhangData" :key="index">
			<p>第{{ index + 1 }}章 {{ item.name }}</p>
			<ul>
				<li v-for="(item1, index1) in item.sectionList" :key="index1">{{ index + 1 }}-{{ index1 + 1 }} {{ item1.name }}</li>
			</ul>
		</view>
	</view>
	<!-- 评论 -->
	<view v-show="active == 2">
		<view class="jie" v-for="item in pingData" :key="item.id">
			<view class="jie1">
				<view class="img">
					<image :src="item.userImage==null?'../../static/tab/my.png':item.userImage" ></image>
				</view>
				<view class="jie2">
					<p>{{ item.nickName }}</p>
					<p>{{ item.createDate }}</p>
				</view>
				<view class="jie3"><uni-icons type="heart" size="24"></uni-icons></view>
			</view>
			<p>{{ item.content }}</p>

			<view class="aaa" v-if="item.children != null">讲师回复：{{ item.children.content }}</view>
		</view>
	</view>
	<!-- 套餐 -->
	<view class="tao" v-for="item in tanData" :key="item.id">
		<p class='p11'>{{item.title}}</p>
		<view class="hot">
			
			<view class="hot1" v-for="item1 in item.list" :key="item1.id">
				<view class="hot2">
					<image :src="item1.mainImage" mode=""></image>
					<p>{{ item1.totalTime }}</p>
				</view>
				<view class="hot3">
					<span>{{ item1.title }}</span>
					<p class="pl">{{ item1.nickName }}</p>
					<p class="p2">
						<span>￥{{item1.priceDiscount}}</span>
						<span>{{ item1.studyTotal }}人在学</span>
					</p>
				</view>
			</view>
		</view>
		<p class='p22'>
			<span></span>
			<span></span>
			<span>购买套餐</span>
		</p>
	</view>
	
</template>

<script>
import { postxaing, postzhang, postping, posttao } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	name: 'detalis',

	setup() {
		const data = reactive({
			yuedata: [],
			active: 0,
			dataList: [{ name: '详情', id: 0 }, { name: '章节', id: 1 }, { name: '评论', id: 2 }, { name: '套餐', id: 3 }],
			// 章节的数组
			zhangData: [],
			// 评论的数组
			pingData: [],
			// 套餐的数组
			tanData: []
		});

		// 点击下面的章节按钮
		const add = id => {
			// console.log(id);
			data.active = id;
		};
		// 获取到上面图片的消息
		postxaing(121).then(res => {
			data.yuedata = res.data;
			// console.log(res.data);
		});
		// 章节
		postzhang().then(res => {
			// console.log(res.data, 11111111111111);
			data.zhangData = res.data;
		});
		// 评论
		postping().then(res => {
			// console.log(res.data, 222222222);
			data.pingData = res.data;
		});
		// 套餐
		posttao().then(res=>{
			console.log(res,33333);
			data.tanData=res.data
		})
		const index=()=>{
			uni.switchTab({
				url:'/pages/index/index'
			})
		}

		return {
			...toRefs(data),
			add,
			index
		};
	}
};
</script>

<style lang="scss">
	.return{
		position: absolute;
		z-index: 1;
		width: 36px;
		height: 36px;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		text-align: center;
		line-height: 36px;
		margin: 10px 0 0 10px
	}
* {
	motion: 0;
	padding: 0;
}
.herade {
	.img {
		width: 100%;
		image {
			width: 100%;
		}
	}
	p {
		margin: 10px 10px;
	}
	p:nth-of-type(1) {
		span:nth-of-type(1) {
			color: red;
			font-size: 25px;
		}
		span:nth-of-type(2) {
			color: #ccc;
			text-decoration: line-through;
			margin-left: 5px;
		}
		span:nth-of-type(3) {
			border: 1px solid red;
			color: red;
			border-radius: 8px;
			font-size: 12px;
			margin-left: 5px;
		}
	}
	p:nth-of-type(2) {
		font-weight: 900;
		font-size: 20px;
	}
	p:nth-of-type(3) {
		span {
			background-color: #efefef;
			padding: 3px;
			border-radius: 8px;
		}
		span:nth-of-type(1) {
			margin-right: 10px;
		}
	}
}
.aa {
	height: 15px;
	background-color: #efefef;
}
.active {
	color: blue;
}
.context {
	display: flex;
	height: 50px;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid #efefef;
}
.image {
	width: 100%;
	height: 10000px;
}
.zhang {
	padding: 10px;
	p {
		font-weight: 800;
		font-size: 20px;
	}
	ul {
		width: 100%;
		li {
			width: 100%;
			list-style: none;
			border-bottom: 1px solid #ccc;
			color: gray;
			padding: 10px;
		}
	}
}
.jie {
	padding: 20px;
	border-bottom: 1px solid #ccc;
	.jie1 {
		display: flex;
		border-radius: 50px;

		justify-content: space-between;
		.img {
			width: 50px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			border-radius: 50px;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50px;
			}
		}
		.jie2 {
			margin-left: -60px;
		}
	}
	p {
		margin-top: 5px;
	}
	.aaa {
		background-color: #efefef;
		margin-top: 20px;
		padding: 5px;
		border-radius: 5px;
		color: gray;
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
.tao{
	margin:10px;
	box-shadow: 2px 2px 5px 0.5px #ccc ;
	padding: 10px;
	border-radius: 20px;
	.p11{
		font-size: 18px;
		font-weight: 600;
	}
}
</style>
