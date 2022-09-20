<template>
	<navigator url="/pages/searchyemian/searcgyemian">
		<view><input type="text" placeholder="请输入搜索到额内容" class="input" disabled @click="add" /></view>
	</navigator>
</template>

<script>
export default {
	name: 'search',
	setup() {
		const add=()=>{
			console.log(123);
			
		}
		return{
			add
		}
	}

};
</script>

<style>
.input {
	border-radius: 50px;
	width: 95%;
	outline: none;
	text-align: center;
	margin: 10px;
	height: 30px;
	background-color: #fff;
	position: fixed;
	z-index: 999;
}
</style>
