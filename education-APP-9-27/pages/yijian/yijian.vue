<template>
	<view class="header">
		<view class="uni-px-5 uni-pb-5"><uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox></view>
	</view>
	<view >
	<textarea maxlength="500" style="overflow-y: auto;" class="textarea" placeholder="请填写具体内容帮助我们了解您的意见和建议"></textarea>
	</view>
	<view class="nav">
		<input type="text" placeholder="填写你的QQ">
		<input type="text" placeholder="填写你的微信">
	</view>
	<button>提交</button>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			sex: [
				{
					text: '内容意见',
					value: 0
				},
				{
					text: '产品简易',
					value: 1
				},
				{
					text: '其他',
					value: 2
				}
			]
		});
		return {
			...toRefs(data)
		};
	}
};
</script>

<style lang="scss">

.uni-px-5 {
	padding-left: 10px;
	padding-right: 10px;
}
.uni-pb-5 {
	padding-bottom: 10px;
}
.header{
	display: flex;
	padding-left: 40px;
	height: 40px;
	align-items: center;
	background-color: #fcfcfc;
}
.textarea{
	
	border: 1px solid #efefef;
	margin:auto;
	font-size: 14px;
	margin-top: 20px;
}
	
.nav{
	padding: 20px 30px;
	input{
		border: 1px solid #efefef;
		margin-top: 10px;
		font-size: 14px;
	}
}
button{
	background-color: rgba(0,122,255);
	margin: 0 30px;
	color: #fff;
}
</style>
