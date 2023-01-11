
wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    showDialog: false,
   data:'',
   height: '',
   zys:'',
   xgsm:'',
   wyfx:'',
   sxts:true,
  },
  toggleDialog:function() {
    this.setData({
      showDialog: !this.data.showDialog,
      data:this.data.wyfx
    });
  },

  toggleDia:function() {
    this.setData({
      showDialog: !this.data.showDialog,
      data:this.data.xgsm
    });
  },
  onLoad(){
    db.collection('zys_fx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    zys:res.data,
    height:res.data.length*520,
 
    })
    }    
    }),
    db.collection('bcxw-wzobject').get({     
      success:res =>{              
    console.log(res.data[0].zyswyfx), 
    this.setData({
    wyfx:res.data[0].zyswyfx,
    xgsm:res.data[0].zysxgsm,
    })
    }    
    })
  },
  more:function () {
    db.collection('zys_fx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    zys:res.data,
    height:res.data.length*520,
    sxts:false,

    })
    }    
    })
  },
})




