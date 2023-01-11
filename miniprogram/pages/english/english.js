// pages/english/english.js
Page({

 
  data: {
word:'apple',
words:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  input:function(e){
    this.setData({
      word:e.detail.value
    })
  },
sub:function(){
  var that = this//不要漏了这句，很重要
  var str=this.data.word
var ur='https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=6&is_need_mean=1&word='+str
    wx.request({
      url:ur,
      headers: {
        'Content-Type': 'application/json'
      },
      success:(res)=> { 
        this.setData({
        words:res.data
        })
        if(res.data.message.length==0){
          wx.showToast({
            title: '没有该单词信息',
            duration: 1000,
            icon:"error",
          })
        }
         console.log(res.data.message.length)
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

  },


})