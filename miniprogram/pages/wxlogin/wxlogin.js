const db = wx.cloud.database();
const app = getApp();
Page({
  data: {
    information:"",
    _openid:'',
  },
  onLoad: function (options) {
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
      }
        })
      },
hq:function(){
  const DB=db.collection('bcxw-userdata');
  wx.getUserProfile({
    desc: '业务需求',
    lang:'zh_CN',
    success:res=>{
      console.log(res.userInfo)
      this.setData({
        information:res.userInfo,
      })
      if(true){
        DB.add({
          data:{
            proinfo:res.userInfo,
          },
          success(res){
            console.log(保存成功,+res)
          },
          fail(res){
            console.log("失败",+res)
          }

        })
        wx.showToast({
          title: '登录成功',
          duration: 3000,
          icon:'success',
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
        setTimeout(function(){
          wx.reLaunch({
            url: '../../pages/my/my'},3000)
           })
      }
    }
  })
},
qx:function(){
wx.showToast({
  title: '已拒绝授权',
  duration:3000,
  icon:"error",
  mask: true,
  success: (res) => {
   this.setData({
   })
  },
  fail: (res) => {},
  complete: (res) => {},
});
setTimeout(function(){
  wx.switchTab({
    url: '../../pages/home/home'},5000)
   })

},
})