

App({
  IDDate:{
    id:[],
    len:0,
  },
  onLaunch: function () {
 wx.cloud.init({
      env: 'oyhj-5g6fivj0744b2ed3'
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
         env: 'oyhj-5g6fivj0744b2ed3',
        traceUser: true,
      })
    }
  }
})
