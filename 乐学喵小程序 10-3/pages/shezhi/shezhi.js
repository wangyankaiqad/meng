// pages/shezhi/shezhi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: true,
    },
    // 切换状态
    onChange() {
        this.setData({
            checked: !this.data.checked
        })
    },
    // 退出登录
    btn() {

        wx.showModal({
            title: '提示',
            content: '是否确定退出',
            success: (res) => {
                // console.log(res,'消息提示');
                if (res.confirm) {
                    console.log('qurding');
                    wx.removeStorage({
                        key: 'name',
                    })
                    wx.switchTab({
                        url: '/pages/my/my',
                    })
                }
            },
        });

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