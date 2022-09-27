import api from '@/api/api.js'


// 列表
const getTitle = async () => {
	let data = await api({
		url: '/article/api/category/label/list'
	})
	return data
}
// 热门
const getRe = async () => {
	let data = await api({
		url: '/course/api/course/search',
		method: 'post',
	})
	return data
}
// 轮播图
const getlun = async () => {
	let data = await api({
		url: '/article/api/advert/show/1',
	})
	return data
}
// 近期上新
const getxin = async () => {
	let data = await api({
		url: '/course/api/course/search',
		method: 'post'
	})
	return data
}

// 免费精选
const getmian = async () => {
	let data = await api({
		url: '/course/api/course/search',
		method: 'post'
	})
	return data
}

// 详情接口
const getxiang = async () => {
	let data = await api({
		url: '/course/course/is-buy/null',
		method: 'post'
	})
	return data
}
// 阅读页面的数据
// /article/api/article/search
const getyue = async () => {
	let data = await api({
		url: '/article/api/article/search',
		method: 'post'
	})
	return data
}

// 热门回答
// /question/api/question/hot
const gethui = async () => {
	let data = await api({
		url: '/question/api/question/hot',
		method: 'post'
	})
	return data
}
//点击进入详情页的详情接口
// course/api/course/null
const postxaing = async () => {
	let data = await api({
		url: '/course/api/course/null',
	})
	return data
}

// 获取章节的数据
// /course/api/chapter/section/list/null
const postzhang = async () => {
	let data = await api({
		url: '//course/api/chapter/section/list/null',
	})
	return data
}

// 获取评论的数据
// course/api/comment/list/null
const postping = async () => {
	let data = await api({
		url: '/course/api/comment/list/null',
	})
	return data
}
// 获取套餐的数据
// course/api/group/list/null
const posttao = async () => {
	let data = await api({
		url: '/course/api/group/list/null',
	})
	return data
}
// 登录
const postdengl = async () => {
	let data = await api({
		url: '/auth/login',
		method:'post'
	})
	return data
}
// 发送验证码
// system/sms/code
const fasong = async () => {
	let data = await api({
		url: '/system/sms/code',
		method:'post'
	})
	return data
}
// 我的学习
// course/course/study/list
const xuexi = async () => {
	let data = await api({
		url: '/course/course/study/list',
	})
	return data
}
export {
	getTitle,
	getRe,
	getlun,
	getxin,
	getmian,
	getxiang,
	getyue,
	gethui,
	postxaing,
	postzhang,
	postping,
	posttao,
	postdengl,
	fasong,
	xuexi
	
}
