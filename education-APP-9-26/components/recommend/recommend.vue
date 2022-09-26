<template>
	<view>
		<view class="hot">
			<p>
				<span>
					<!-- 热门推荐 -->
					{{fout}}
					<span>{{free}}</span>
				</span>
				<span>全部></span>
			</p>
			<view class="hot1" v-for="item in hotData" :key="item.id" @click="add(item.id)">
				<view class="hot2">
					<image :src="item.mainImage" mode=""></image>
					<p>{{ item.totalTime }}</p>
				</view>
				<view class="hot3">
					<span>{{ item.title }}</span>
					<p class="pl">{{ item.nickName }}</p>
					<p class="p2">
						<span v-if="item.isFree==0">免费</span>
						<span v-else>￥{{item.priceDiscount}}</span>
						<span>{{ item.studyTotal }}人在学</span>
					</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	
	props: ['hotData','fout','free'],
	name: 'recommend',
	setup(proxy,xst) {
		let add=(id)=>{
			xst.emit('add',id)
		}
		return {
			add
		}
	}
};
</script>

<style lang="scss">
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
</style>
