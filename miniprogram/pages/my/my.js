
const db=wx.cloud.database()
Page({
 
  data: {
    sign:false,
    _openid:'',
    info:'',
    sf:true,

  },
  onLoad: function (options) {
    const userCollection = db.collection("bcxw-userdata");
    var that=this
    wx.cloud.callFunction({ // 调用云函数
      name: 'getOpenId', // 函数名称
      data: {}, // 函数参数
      complete: res => { // 调用完成时的回调函数
        wx.hideLoading() // 隐藏加载提示框
      },
      success: res => { // 调用成功时的回调函数
        console.log('[云函数] [login] user openid: ', res.result.openid)
        that.setData({ // 设置页面绑定数据
          _openid:res.result.openid,      
        })
        userCollection.get({
          success: (res) => {
          let userdata = res.data;  
        for (let i = 0; i <userdata.length; i++) {  //遍历数据库对象集合
          if (this.data._openid == userdata[i]._openid) { //账户已存在
        this.setData({
          sign:true,
          info:userdata[i].proinfo,
        })
        if(userdata[i].sign==1){
          this.setData({
            sf:false,
          })
        }
        console.log()
          }else 
            {
          }
        
        }
      
  }})
      }
        })

        
},
  login:function(){
  wx.navigateTo({
    url: '../../pages/wxlogin/wxlogin',
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
 

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