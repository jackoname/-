// miniprogram/pages/xhapi/xhapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    engxiang:"",
    type:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function () {
      var that = this//不要漏了这句，很重要
      wx.request({
        url: 'https://api.vvhan.com/api/xh',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
           that.setData({
            date:res.data
             //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
           })
           console.log(res.data)
        }
      })
    },
    next:function(){
      var that = this
      wx.request({
        url: 'https://api.vvhan.com/api/xh',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
           that.setData({
            date:res.data
             //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
           })
           console.log(res.data)
        }
      })
    }
  },
 
)