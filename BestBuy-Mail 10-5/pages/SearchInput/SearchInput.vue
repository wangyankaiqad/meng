<template>
	<view class="searchInput">
		<view class="searchInputtop">
			<input class="input" type="text" placeholder="请输入您要搜索的商品" v-model="queryValue" @input="resultList" />
			<view class="btn" v-show="queryValue !== ''"><button @click="btn">取消</button></view>
		</view>

		<view class="seracha">
			<view class="serachtop" v-for="item in searchList" :key="item.goods_id">
				<view class="searchtext" @click="Godetails(item.goods_id)">{{ item.goods_name }}</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { ref } from 'vue';
import { getSearchInput } from '@/api/api';
export default {
	name: 'Searchinput',
	setup() {
		// 数组
		const searchList = ref([]);
		// input双向数据绑定
		const queryValue = ref('');

		getSearchInput(queryValue.value).then(res => {
			console.log(res);
		});

		// input事件
		const resultList = () => {
			let searchData = setInterval(() => {
				clearInterval(searchData);
				getSearchInput(queryValue.value).then(res => {
					console.log(res);
					searchList.value = res.message;
				});
			}, 1000);
		};
		// 点击清空按钮
		const btn = () => {
			queryValue.value = '';
			searchList.value = [];
		};
		// 去往详情页面
		const Godetails=(id)=>{
			uni.navigateTo({
				url:`/pages/details/details?id=${id}`
			})
		}
		return {
			searchList,
			queryValue,
			resultList,
			btn,
			Godetails
		};
	}
};
</script>

<style lang="scss">
.searchInput {
	height: 100vh;
	padding: 20rpx;
	background-color: #ccc;
	.searchInputtop {
		display: flex;
		.input {
			background-color: white;
			margin: 0 20rpx;
			padding: 10rpx;
			flex: 3;
		}
		.btn {
			flex: 1;
			button {
				line-height: 70rpx;
			}
		}
	}
}
.seracha {
	margin-top: 40rpx;
	.serachtop {
		.searchtext {
			padding: 4rpx 20rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			background-color: white;
			border-bottom: 6rpx solid #ccc;
			white-space: nowrap;
		}
	}
}
</style>
