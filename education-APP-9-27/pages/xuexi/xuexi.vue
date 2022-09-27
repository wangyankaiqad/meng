<template>
	<view>
		<!-- 我的学习 -->
		<view class="header" v-for="item in xueData" :key="item.id">
			<view class="left">
				<p class='pp1'>{{item.title}}</p>
				<p class='p2'> 已学{{item.percent}}%</p>
				
			</view>
			<view class="right">
				<image :src="item.mainImage" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { ref, reactive, toRefs } from 'vue';
	import { xuexi } from '../../api/index/index.js';
	export default {
		setup() {
			const data=reactive({
				xueData:[]
			})
			xuexi().then(res=>{
				console.log(res.data);
				data.xueData=res.data
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	p{
		padding: 0;
		margin: 0;
	}
.header{
	display: flex;
	height: 80px;
	width: 100%;
	margin-top: 20px;
	.left{
		width: 55%;
		padding: 0 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.pp1{
			font-size: 14px;
		}
		.p2{
			font-size: 14px;
			
		}
	}
	.right{
		flex: 1;
		image{
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
	}
}
</style>
