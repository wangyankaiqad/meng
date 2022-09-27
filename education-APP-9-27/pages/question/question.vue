<template>
	<!-- 问答 -->
	<view class="header"><search></search></view>
	<view style="height: 50px;"></view>
	<view class="nav1">
		<view class="nav">
			<span v-for="item in datalist" :key="item" @click="add(item.id)" :class="active == item.id ? 'active' : ''">{{ item.name }}</span>
		</view>
	</view>

	<view style="height: 50px;"></view>

	<view class="context" v-for="item in huidata" :key="item.id">
		<p>{{ item.title }}</p>
		<p>
			<span>{{ item.status }}回答·{{ item.thumhup }}浏览</span>
			<span>{{ item.nickName }}·{{ item.updateDate }}</span>
		</p>
	</view>
</template>

<script>
import { gethui } from '../../api/index/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
	// 加载数据
	onReachBottom() {
		console.log(123123);
		if (this.huidata.length == 100) {
			uni.showToast({
				title: '没有更多数据了'
			});
		} else {
			let page1 = this.page++;
			gethui(page1).then(res => {
				console.log(res, 'resres');
				this.huidata = [...this.huidata, ...res.data.records];
			});
		}
	},
	setup() {
		const data = reactive({
			huidata: [],
			page: 0,
			datalist: [{ name: '热门回答', id: 0 }, { name: '最新问题', id: 1 }, { name: '等待回答', id: 2 }],
			active: 0
		});
		const add = id => {
			gethui(id).then(res => {
				console.log(res);
				data.active=id
				data.huidata = res.data.records;
			});
		};

		gethui().then(res => {
			console.log(res);
			data.huidata = res.data.records;
		});
		return {
			...toRefs(data),
			add
		};
	}
};
</script>

<style lang="scss">
.active {
	color: blue;
}
.nav1 {
	position: fixed;
	width: 100%;
	top: 50px;
	left: 0;
	background-color: #fff;
}
.header {
	height: 50px;
	background-color: rgba(52, 93, 194);
	width: 100%;
	position: fixed;
	z-index: 1;
}
.nav {
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid #ccc;
}
.context {
	height: 50px;
	margin-top: 10px;
	padding: 10px;
	border-bottom: 1px solid #ccc;
	p:nth-of-type(1) {
		font-weight: 900;
	}
	p:nth-of-type(2) {
		font-size: 14px;
		color: gray;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
}
</style>
