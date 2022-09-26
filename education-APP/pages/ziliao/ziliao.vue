<template>
	<!-- 个人资料 -->
	<view class="header">
		<uni-icons type="back" size="25" @click="add"></uni-icons>
		<span>个人资料</span>
	</view>
	<view class="nav">
		<span>头像</span>
		<view class="right">
			<image src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" mode=""></image>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
	</view>
	<view class="nav1">
		<span>用户名</span>
		<view class="right">
			<span>Deborah Martinez</span>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
	</view>
	<view class="nav1 two">
		<span>手机号</span>
		<view class="right">
			<span>14414615662</span>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
	</view>
	<view class="nav1">
		<span>昵称</span>
		<view class="right">
			<span>万强</span>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
	</view>
	<view class="nav1 two">
		<span>性别</span>
		<view class="right">
			<span>女</span>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
	</view>
	<button class="btn" @click="btn">退出登录</button>
</template>

<script>
	export default{
		setup() {
			const btn =()=>{
				uni.showModal({
					title: '提示',
					content: '你确定要退出么',
					success: function (res) {
						if (res.confirm) {
						localStorage.removeItem('token')
							uni.switchTab({
								url:'/pages/my/my'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
			const add=()=>{
			uni.reLaunch({
				url: '/pages/my/my'
			});
			}
			return {
				btn,
				add
			}
		}
		
	}
</script>

<style lang="scss">
.header {
	height: 50px;
	background-color: #fff;
	border-bottom: 5px solid #efefef;
	line-height: 50px;
	text-align: center;
	.uni-icons {
		float: left;
		padding-left: 10px;
	}
	span {
		font-size: 18px;
		font-weight: 700;
	}
}
.nav {
	display: flex;
	justify-content: space-between;
	height: 80px;
	align-items: center;
	padding: 0 20px;
	border-bottom: 3px solid #efefef;
	.right{
		display: flex;
		align-items: center;
		image {
			width: 60px;
			height: 60px;
			border-radius: 50%;
		}
		
	}
	
}
.nav1 {
	display: flex;
	justify-content: space-between;
	height: 50px;
	align-items: center;
	padding: 0 20px;
	border-bottom: 3px solid #efefef;
	.right{
		display: flex;
		align-items: center;
		
	}
	
}
.two{
	border-bottom: 10px solid #efefef;
}
.btn{
	background-color: #fff;
}
</style>
