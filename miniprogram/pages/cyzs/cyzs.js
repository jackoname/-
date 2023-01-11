wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    select: 0,
    height: '',
   cyzs:'',
   sxts:true,
  }  ,
  onLoad(){
  db.collection('shejiao_cyzs').orderBy('date','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  cyzs:res.data,
  height:res.data.length*550
  })
  }    
  })
},
more:function () {
  db.collection('shejiao_cyzs').orderBy('date','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  cyzs:res.data,
  height:res.data.length*550,
  sxts:false,
  })
  }    
  })
},

})

