// pages/second/second.js
wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link:"",
      url: ''
      }, {
       link:'',
      url: ''
      }, {
        link:"",
      url: ''
      }
      ],
      indicatorDots: true, //小点
      indicatorColor: "white",//指示点颜色
      activeColor: "coral",//当前选中的指示点颜色
      autoplay: false, //是否自动轮播
      interval: 300, //间隔时间
      duration: 3000, //滑动时间
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('bcxw-wzobject').get({     
      success:res =>{              
    console.log(res.data), 
      this.setData({
        'imgUrls[0].url' :res.data[0].lbt1[0],
        'imgUrls[0].link':res.data[0].lbt1[1],
        'imgUrls[1].url' :res.data[0].lbt2[0],
        'imgUrls[1].link' :res.data[0].lbt2[1],
        'imgUrls[2].url' :res.data[0].lbt3[0],
        'imgUrls[2].link' :res.data[0].lbt3[1],
    })
    }
  })
console.log(this.data.imgUrls)
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