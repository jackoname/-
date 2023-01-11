wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    sxts:true,
    select: 0,
    height: '',
   mks:'',
  }  ,
  onLoad(){
  db.collection('mks_xs').orderBy('date','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  mks:res.data,
  height:res.data.length*550
  })
  }    
  })
},
more:function () {
  db.collection('mks_xs').orderBy('date','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  mks:res.data,
  height:res.data.length*550,
  sxts:false,
  })
  }    
  })
},

})

