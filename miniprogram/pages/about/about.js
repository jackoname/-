// miniprogram/pages/about/about.js
wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database(),
 obj= db.collection('bcxw-wzobject')

Page({

  data: {
    about:[],
  },
  onLoad: function () {    
       obj.get({     
          success:res =>{              
    console.log(res.data), 
  this.setData(
    {about: res.data},

    )
}    
  }) 
 },
 })