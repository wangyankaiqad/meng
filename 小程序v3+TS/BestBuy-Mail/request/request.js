/**
 * 定义一个根目录
 */

const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';

/**
 * 声明一个函数
 * */
const request = function(url, methods,data ) {
	let header={};
	if(url.includes("/my/")){
		header["Authorization"]=wx.getStorageSync("token")
	}
	uni.showLoading({
		title: '正在加载中...客官请稍等'
	});
	return new Promise((resolve, reject) => {
		uni.request({
			header,
			url: baseUrl + url,
			method: methods | 'get',
			data: data || null,
			success: function(res) {
				resolve(res.data);
			},
			fail: function(err) {
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};

export default request;
