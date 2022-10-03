// pages/wddd/wddd.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        List: [{
                id: 0,
                name: '全部'
            },
            {
                id: 1,
                name: '待支付'
            },
            {
                id: 2,
                name: '待收讲义'
            },
            {
                id: 3,
                name: '已完成'
            },
            {
                id: 4,
                name: '已取消'
            }

        ],
        active:0
    },
    add(e){
        console.log(e);
        let aa=e.target.dataset.index
        this.setData({
            active:aa
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