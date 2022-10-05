<template>
	<!-- 搜索框 -->
	<view><SearchInput></SearchInput></view>

	<view>
		<u-row gutter="16" justify="space-between">
			<u-col span="3">
				<view>
					<scroll-view scroll-y="true" class="scroll-Y">
						<view id="demo1" class="scroll-view-item" :class="{ active: Goodsid == item.cat_id }" v-for="item in List" :key="item.cat_id" @click="add(item)">
							{{ item.cat_name }}
						</view>
					</scroll-view>
				</view>
			</u-col>
			<u-col span="9">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view v-for="ele in childList" :key="ele.cat_id">
						<title>{{ ele.cat_name }}</title>
						<u-grid :col="3" :border="false">
							<u-grid-item v-for="item in ele.children" :key="item.cat_id">
								<image class="image3" :src="item.cat_icon" mode=""></image>
								<view class="grid-text">{{ item.cat_name }}</view>
							</u-grid-item>
						</u-grid>
					</view>
				</scroll-view>
			</u-col>
		</u-row>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { getclassiFication } from '@/api/api';
export default {
	setup() {
		const data = reactive({
			/**总数据*/
			List: [],
			/**切换数据的标识*/
			Goodsid: 1,
			/**子数据*/
			childList: []
		});
        /**获取到数据*/
		getclassiFication().then(res => {
			// console.log(res, 'ewsewewsewsewsewe');
			data.List = res.message;
			data.childList = res.message[0].children;
		});
		/**点击切换事件*/
		const add = item => {
			// console.log(item);
			data.Goodsid = item.cat_id;
			data.childList = item.children;
		};

		return {
			...toRefs(data),
			add
		};
	}
};
</script>

<style lang="scss" scoped>
.active {
	border-left: 4rpx solid #eb4450;
	color: #eb4450;
}
.scroll-Y {
	height: calc(100vh - 120rpx);
	line-height: 80rpx;
	text-align: center;
}
.image3 {
	width: 120rpx;
	height: 120rpx;
}
</style>
