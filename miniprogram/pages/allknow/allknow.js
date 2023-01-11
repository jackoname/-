wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    select: 0,
    height: '',
   all:'',
   sxts:true,
  }  ,
  onLoad(){
  db.collection('note_gonggao').orderBy('time','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  all:res.data,
  height:res.data.length*520,
  })
  }    
  })
},
more:function () {
  db.collection('note_gonggao').orderBy('time','desc').get({     
    success:res =>{              
  console.log(res.data), 
  this.setData({
  all:res.data,
  height:res.data.length*520,
  sxts:false,
  })
  }    
  })
},

})

