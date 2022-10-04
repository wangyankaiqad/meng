// pages/xiangqing/xiangqing.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 总数据
        dataList: [],
        // info数据
        infoList: [],
        // 导航栏的数据
        daoList: [

            {
                id: 0,
                name: '课程详情'
            },
            {
                id: 1,
                name: '课程安排'
            },
            {
                id: 2,
                name: '资料下载'
            },
            {
                id: 3,
                name: '课程评价'
            }
        ],
        active: 0,
        active1: 0,
        // 课程安排
        keList: [],
        kedata: [{
                id: 0,
                name: '章节分类',
                icon: 'bars'
            },
            {
                id: 1,
                name: '时间排序',
                icon: 'underway'
            },
        ],
        id:''

    },

    // 点击导航栏
    add(e) {
        let aa = e.target.dataset.index
        this.setData({
            active: aa
        })
    },
    add1(e){
        console.log(e.target.dataset.index);
        let aa = e.target.dataset.index
        this.setData({
            active1: aa
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let aa = options.id
        this.setData({
            aa:aa
        })
        console.log(aa);
        wx.request({
            url: `https://www.lexuemiao.com/api/app/courseInfo/basis_id=${aa}:basis_id/st=0`,
            method: 'get',
            success: (res) => {
                console.log(res.data.data);
                this.setData({
                    dataList: res.data.data,
                    infoList: res.data.data.info,
                    keList: res.data.data.course
                })
                console.log(this.data.keList);
            }
        })

    },
    // 点击添加收藏
    // shoucang(){
    //     wx.request({
    //         url: `https://www.lexuemiao.com/api/collect`,
    //         data:{
    //             basis_id:this.data.id,
    //             type:1
    //         },
    //         method: 'get',
    //         success: (res) => {
    //             console.log(res);
               
    //         }
    //     })
    // },

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