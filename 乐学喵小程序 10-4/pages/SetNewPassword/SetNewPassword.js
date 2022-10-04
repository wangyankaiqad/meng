// pages/SetNewPassword/SetNewPassword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 手机号
        mobile: '',
        // 验证码
        sms_code:'',
        // 新密码
        user_pass:''

    },
    mobile(e) {
        console.log(e.detail)
        this.setData({
            mobile: e.detail.value
        })
    },
    useryan(e){
        console.log(e.detail)
        this.setData({
            sms_code: e.detail.value
        })
    },
    userpass(e){
        console.log(e.detail)
        this.setData({
            user_pass: e.detail.value
        })
    },
    add(){
        wx.request({
            url: 'https://www.lexuemiao.com/api/getpassword',
            method: 'post',
            data:{
                mobile:this.data.mobile,
                sms_code:this.data.sms_code,
                user_pass:this.data.user_pass
            },
            success: (res) => {
                console.log(res.data.data);    
            }

        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})