<template>
	<!-- 登录页面 -->
	<view class="xxx" @click="add"><uni-icons type="closeempty" size="24"></uni-icons></view>
	<view class="h3"><h2>欢迎回来!</h2></view>
	<view class="inputs">
		<p>手机号码</p>
		<input type="text" placeholder="请输入手机号" v-model="shouji" maxlength="11" />
	</view>

	<view class="inputs">
		<p>验证码</p>
		<input type="text" placeholder="请输入手机验证码" v-model="yan" maxlength="6" />
		<button @click="dengl">获取验证码</button>
	</view>
	<button class="btn" @click="btn(shouji, yan)">登录</button>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { postdengl } from '../../api/index/index.js';
export default {
	setup() {
		const data = reactive({
			shouji: '',
			yan: ''
		});

		const add = () => {
			uni.switchTab({
				url: '/pages/my/my'
			});
		};

		const btn = (reg_tel, yan) => {
			// if (reg_tel !== '') {
			// 	var reg = /^1[3456789]\d{9}$/;
			// 	if (!reg.test(reg_tel)) {
			// 		callback(new Error('请输入有效的手机号码'));
			// 	}
			// }

			// function callback(Error) {
			// 	console.log('name', Error);
			// 	uni.showModal({
			// 		title: '请输入有效的手机号码'
			// 	});
			// }

			// if (yan !== '') {
			// 	var reg = /^\d{6,}$/;
			// 	if (!reg.test(yan)) {
			// 		callback1(new Error('请输入正确的验证码'));
			// 	}
			// }

			// function callback1(Error) {
			// 	console.log('name', Error);
			// 	uni.showModal({
			// 		title: '请输入正确的验证码'
			// 	});
			// }
			// 登录成功
			postdengl().then(res => {
				console.log(res);
				// 存入本地token
				localStorage.setItem('token', res.data.access_token);
			});

			uni.reLaunch({
				url: '/pages/my/my'
			});
		};
		// 点击获取验证码按钮
		const dengl = () => {
			console.log(123);
		};

		return {
			add,
			...toRefs(data),
			btn,
			dengl
		};
	}
};
</script>

<style lang="scss">
.xxx {
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	margin: 10px 0 0 10px;
}
.h3 {
	margin: 70px 20px 50px 20px;
}
.inputs {
	padding: 10px;
	margin: 20px;
	border-radius: 5px;
	background-color: #f6f6f6;
	position: relative;
	p {
		margin-bottom: 10px;
	}
	button {
		width: 90px;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: rgba(52, 93, 194);
		color: #fff;
	}
}
.btn {
	background-color: rgba(52, 93, 194);
	color: #fff;
	margin: 0 20px;
}
</style>
