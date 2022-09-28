// pages/dengl/dengl.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        yanList: '',
        key: '',
        shuzi: 0
    },
    // 获取验证码
    add() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/getImgCode',
            method: 'GET',
            success: (res) => {
                // console.log(res);
                var add = res.data.data.url.img
                var key = res.data.data.url.key
                this.setData({
                    yanList: add,
                    key: key
                })

            }
        })
    },
    devGet(e) {
        // console.log(e.detail.value);
        this.setData({
            shuzi: e.detail.value
        })

    },
    // 点击登录
    deng() {
        // console.log(this.data.key);
        // console.log(this.data.shuzi);
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/login',
            method: 'POST',
            data: {
                captcha: this.data.shuzi,
                device_id: "1",
                device_type: "2",
                key: this.data.key,
                mobile: '13613286323',
                user_pass: "Ww123456"
            },
            success: (res) => {
                console.log(res);
                if (res.data.code == 200) {
                    wx.setStorageSync('name', res.data.data)
                    wx.showToast({
                        title: '登录' + res.data.msg,
                        duration: 1000
                    })
                    wx.switchTab({
                        url:'/pages/my/my'
                    })
                }

            }

        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.add()
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