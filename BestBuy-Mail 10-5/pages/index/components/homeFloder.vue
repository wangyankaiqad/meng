<template>
	<view class="wrap" v-for="(item, index) in data.floorList" :key="index">
		<image :src="item.floor_title.image_src" mode="" style="height: 50rpx;"></image>

		<u-row gutter="16" class="urow" :border="false">
			<u-col span="4"><image :src="item.product_list[0].image_src" class="image1"></image></u-col>
			<u-col span="8">
				<u-grid :col="2">
					<u-grid-item v-for="(ele, index) in item.product_list" :key="index" v-show="ele.image_width !== '232'">
						<image class="image2" :src="ele.image_src"></image>
					</u-grid-item>
				</u-grid>
			</u-col>
		</u-row>
	</view>
</template>

<script lang="ts" setup>
import { getFloor } from '@/api/api';
import { reactive } from 'vue';
import { MessageList, Code } from '@/api/definet';

const data: {
	floorList: MessageList;
} = reactive({
	floorList: []
});

getFloor().then(res => {
	if (res.meta.status === Code.SUCCESS) {
		console.log(res.message, '123123123123');
		data.floorList = res.message;
		console.log(data.floorList, '图片');
	}
});
</script>

<style scoped lang="scss">
.wrap {
	padding: 0rpx !important;
}
.u-row {
	padding: 0 !important;
}

.demo-layout {
	height: 80rpx;
	border-radius: 8rpx;
	padding: 0;
	margin: 0;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.bg-purple-dark {
	background: #99a9bf;
}
::deep.u-col {
	padding: 0 !important;
}
.image1 {
	width: 100%;
	margin-top: 30rpx;
}
.image2 {
	width: 100%;
	height: 208rpx;
}
</style>
