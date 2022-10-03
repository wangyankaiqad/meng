Page({

    /**
     * 页面的初始数据
     */
    data: {
        miaoList: [],
        active: 1,
        lunList: [],
        mianList: [],
        dataList: [],
        // 弹出的标识
        show: false,
        // 弹出框的数据
        tabList:[],
         bjcolor:0
    },
    // 点击表头
    add(e) {
        console.log(e.target.dataset.index);
        const aa = e.target.dataset.index
        this.setData({
            active: aa
        })
        if (this.data.active == 50) {
            // 从新请求轮播图
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/banner/50/4',
                method: 'get',
                success: (res) => {
                    // console.log(res.data.data);
                    this.setData({
                        lunList: res.data.data
                    })
                }

            })
            // 数据
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/classifyCourse/50?page=1&limit=150&classify_id=50',
                method: 'get',
                success: (res) => {
                    console.log(res.data.data);
                    this.setData({
                        dataList: res.data.data,

                    })
                }

            })

        } else if (this.data.active == 1) {
            this.xrlun()
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/recommendCourse/1?classify_id=1',
                method: 'get',
                success: (res) => {
                    console.log(res.data.data);
                    this.setData({
                        dataList: res.data.data.course_list,

                    })
                }

            })
        } else if (this.data.active == 13) {
            // 从新请求轮播图
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/banner/13/4',
                method: 'get',
                success: (res) => {
                    // console.log(res.data.data);
                    this.setData({
                        lunList: res.data.data
                    })
                }

            })
            // 数据
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/classifyCourse/13?page=1&limit=150&classify_id=13',
                method: 'get',
                success: (res) => {
                    // console.log(res.data.data);
                    this.setData({
                        dataList: res.data.data,

                    })
                }

            })
        } else if (this.data.active == 49) {
            // 从新请求轮播图
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/banner/49/4',
                method: 'get',
                success: (res) => {
                    // console.log(res.data.data);
                    this.setData({
                        lunList: res.data.data
                    })
                }

            })
            // 数据
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/classifyCourse/49?page=1&limit=150&classify_id=49',
                method: 'get',
                success: (res) => {
                    //    console.log(res.data.data);
                    this.setData({
                        dataList: res.data.data,

                    })
                }

            })
        } else if (this.data.active == 14) {
            // 从新请求轮播图
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/banner/14/4',
                method: 'get',
                success: (res) => {
                    // console.log(res.data.data);
                    this.setData({
                        lunList: res.data.data
                    })
                }

            })
            // 数据
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/home/classifyCourse/49?page=1&limit=150&classify_id=14',
                method: 'get',
                success: (res) => {
                    //    console.log(res.data.data);
                    this.setData({
                        dataList: res.data.data,

                    })
                }

            })
        }

    },
  
    xrmian() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/home/marketingCourse/1?classify_id=1',
            method: 'get',
            success: (res) => {
                // console.log(res.data.data.course_list);
                this.setData({
                    mianList: res.data.data.course_list
                })
            }

        })
    },

    // 获取表头数据
    xr() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/home/getSecondClassify/1?classify_id=1',
            method: 'get',
            success: (res) => {
                // console.log(res.data.data);
                this.setData({
                    miaoList: res.data.data
                })
            }

        })
    },
    //  轮播图
    xrlun() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/home/banner/1/4',
            method: 'get',
            success: (res) => {
                // console.log(res.data.data);
                this.setData({
                    lunList: res.data.data
                })
            }

        })
    },
    // 点击管理类联考
    top(){
        this.setData({
            show:true
        })
        // https://www.lexuemiao.com/api/app/home/getMajor/1?classify_id=1
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/home/getMajor/1?classify_id=1',
            method: 'get',
            success: (res) => {
                console.log(res.data.data);
                this.setData({
                    tabList: res.data.data
                })
            }

        })
    },
    // 点击弹出框的内容
    tan(e){
        console.log(e.target.dataset.tan);
        const aa=e.target.dataset.tan
        this.setData({
            bjcolor:aa.major_id
        })
    },
    // 点击完成
    wan(){
        this.setData({
            show:false
        })
    },
    onClose() {
        this.setData({ show: false });
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.xr(),
            this.xrlun(),
            this.xrmian()
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