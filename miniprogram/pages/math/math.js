wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    sxts:true,
    select: 0,
    height:"",
    gs:'',
    gl:'',
    xd:'',
    qt:'',
    sortList: [
      { 

      "text": "高等数学"
     },
     {
   
      "text": "线性代数"
     },
  
     {
    
      "text": "概率统计"
     },

     {
    
      "text": "其它"
     },
     
    ],
    placeList: [1, 2, 3, 4]
  },

  onLoad() {
    this.watchHeight()
    db.collection('math_gdsx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    gs:res.data,
    height:res.data.length*550+200,
    })
    }    
    });
  },
more:function(){
  switch(this.data.select){
    case 0: db.collection('math_gdsx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    gs:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 1: db.collection('math_xxds').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xd:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 2: db.collection('math_gltj').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    gl:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 3:
       db.collection('math_other').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    qt:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
  }    
},
  // 触发tab导航栏
  activeTab(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      select: index
    })
    this.generalEv()
    this.watchHeight()
    switch(this.data.select){
      case 0: db.collection('math_gdsx').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      gs:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 1: db.collection('math_xxds').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      xd:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 2: db.collection('math_gltj').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      gl:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 3:
         db.collection('math_other').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      qt:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
    }    
  },

  // 滑动swiper
  activeSw(e) {
    var index = e.detail.current
    this.setData({
      select: index
    })
    this.generalEv()
    this.watchHeight()
  },

  // 监听swiper高度
  watchHeight() {
    var query = wx.createSelectorQuery()
    query.select('.box').boundingClientRect((res) => {
      this.setData({
        height: parseInt(res.height)
      })
    }).exec()

    switch(this.data.select){
      case 0: db.collection('math_gdsx').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      gs:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 1: db.collection('math_xxds').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      xd:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 2: db.collection('math_gltj').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      gl:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
      case 3:
         db.collection('math_other').orderBy('date','desc').get({     
        success:res =>{              
      console.log(res.data), 
      this.setData({
      qt:res.data,
      height:res.data.length*550+200,
      sxts:true,
      })
      }    
      });break;
    }    
  },

  // 初始化值
  generalEv() {
    this.setData({
      placeList: [1, 2, 3, 4]
    })
    // 回到顶部
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  onReachBottom: function () {
    var list = this.data.placeList
    list.push(1, 2, 3, 4)
    this.setData({
      placeList: list
    })
    this.watchHeight()
  },
})

