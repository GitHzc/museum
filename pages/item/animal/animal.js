Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_y: true,
    currentTab: 0,
    pic_src: '/res/bird2.jpg',
    mode: 'aspectFit',
    exhibit_information: {
      name: '丽盾蝽',
      nickname: '(俗名：苦楝蝽)',
      gender: '/res/female.png',
      category: 'xx目xx纲属种',
      share: '/res/share.png',
      position: '位置：三楼哺乳动物厅',
      collect: '采集人：xxx 采集日期：2018-05-01 采集地点：xxxx',
      bar: '/res/bar.png',
      specimen_description: '1)\n2)\n3)\n4)\n',
      classification_feature: '生活在植物上，较大型的种类多栖息在树木上。植食性，常偏喜吸食果实，可造成各种危害。',
      habit: '生活在植物上，较大型的种类多栖息在树木上。植食性，常偏喜吸食果实，可造成各种危害。',
      distribution: '广泛分布，热带、亚热带地区更为常见。'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //跳转测试
    console.log(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取设备的可视窗口高度
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      });
    }
  }
})