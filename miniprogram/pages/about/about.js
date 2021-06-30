// miniprogram/pages/about/about.js
wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database(),
 obj= db.collection('bcxw-wzobject')

Page({

  data: {
    about:[],
    year:new Date().getFullYear(),
    month:new Date().getMonth(),
    day:new Date().getDay(),
  },
  onLoad: function () {    
       obj.get({     
          success:res =>{              
    console.log(res.data), 
  this.setData(
    {about: res.data},
    {year:res.data[0].date},
    {month:res.data[0].date},
    {day:res.data[0].date},
    )
}    
  }) 
 },
 })