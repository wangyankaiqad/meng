// pages/wodeke/wodeke.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        daList: [{
                id: 0,
                name: '日'
            },
            {
                id: 1,
                name: '一'
            },
            {
                id: 2,
                name: '二'
            },
            {
                id: 3,
                name: '三'
            },
            {
                id: 4,
                name: '四'
            },
            {
                id: 5,
                name: '五'
            },
            {
                id: 6,
                name: '六'
            }
        ],
        xiaoList: [{
                id: 0,
                name: '02'
            },
            {
                id: 1,
                name: '03'
            },
            {
                id: 2,
                name: '04'
            },
            {
                id: 3,
                name: '05'
            },
            {
                id: 4,
                name: '06'
            },
            {
                id: 5,
                name: '07'
            },
            {
                id: 6,
                name: '08'
            }
        ],
        active: 2
    },
    // 点击日历切换
    add(e) {
        let aa = e.target.dataset.index
        console.log(aa);
        this.setData({
            active: aa
        })
    },
    add1() {
        console.log(12345);
        wx.switchTab({
            url: '/pages/index/index',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // wx.request({
        //     url: 'https://www.lexuemiao.com/api/myCourse/studyList',
        //     method: 'GET',
        //     data:{
        //         page:1,
        //         limit:2
        //     },
        //     success: (res) => {
        //         console.log(res.data.data);    
        //     }

        // })
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