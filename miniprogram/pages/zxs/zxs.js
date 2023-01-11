// miniprogram/pages/zxs/zxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
data:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.vvhan.com/api/ian',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
          data:res.data
           //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
         })
         console.log(res.data)
      }
    })
  },
next:function(){

  var that = this
  wx.request({
    url: 'https://api.vvhan.com/api/ian',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
       that.setData({
        data:res.data
         //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
       })
       console.log(res.data)
    }
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})