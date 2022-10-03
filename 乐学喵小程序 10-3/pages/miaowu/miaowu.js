// pages/miaowu/miaowu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        // 滑动块的数据
        huaData: [],
        // 广场的数据
        miaoList: [],
        dataList:[
            {id:0,name:'广场'},
            {id:1,name:'图书勘误'},
            {id:2,name:'关注'}
        ],
        // 图书勘误的数据
        kanList:[],
        // 关注的数据
        guanList:[]
    },
    onChange(event) {
        // wx.showToast({
        //   title: `切换到标签 ${event.detail.name}`,
        //   icon: 'none',
        // });
        console.log(event);
    },

    xr() {

        wx.request({
            url: 'https://www.lexuemiao.com/api/app/square/squareList?page=1&limit=15',
            method: 'GET',
            success: (res) => {
                // console.log(res.data.data);
                this.setData({
                    miaoList: res.data.data
                })
            }

        })
        
    },

    xr1() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/square/themeList',
            method: 'GET',
            success: (res) => {
                // console.log(res.data.data);
                this.setData({
                    huaData: res.data.data
                })
            }

        })
            // 图书勘误的数据
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/news/list/52?page=1&limit=15&classifyId=52',
            method: 'GET',
            success: (res) => {
                // console.log(res.data.data);
                this.setData({
                    kanList: res.data.data
                })
            }

        })
       




    },
xr2(){
 // 关注的数据
        // https://www.lexuemiao.com/api/app/focus/dyna?page=1&limit=15
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/focus/dyna?page=1&limit=15',
            method: 'GET',
            success: (res) => {
                console.log(res,'123123123');
                // this.setData({
                //     guanList: res.data.data
                // })
            }

        })

},

    add1(e) {
        console.log(e.target.dataset.index);
        const aa=e.target.dataset.index
        this.setData({
            active:aa.id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.xr()
        this.xr1()
        this.xr2()
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