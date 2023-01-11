wx.cloud.init({
  env: 'oyhj-5g6fivj0744b2ed3'
})
const db=wx.cloud.database()
Page({
  data: {
    sxts:true,
    select: 0,
    hight:"",
  c:'',  
  java:'',
  web:'',
  css:'',
  python:'',
  kotlin:'',
  xcx:'',
  sjk:'',
  sjjgysf:'',
  jz:"",
  xxaq:'',
  jsjdjks:'',
  rjqt:'',
    sortList: [
      { 

      "text": "C/C++/c#"
     },
     {
   
      "text": "JAVA"
     },
  
     {
    
      "text": "WEB"
     },
     {
    
      "text": "CSS"
     },
     {
      
      "text": "Python"
     },
     {
    
      "text": "Kotlin"
     },
     {

      
      "text": "小程序"
     },
     {
      "id": 6,
      "text": "数据库"
   
     },
   
     {
       "id": 7,
       "text": "数据结构&算法"
      },
      {
       "id": 8,
       "text": "计算机组成原理"
     
   
      },
      {
       "id": 9,
       "text": "信息安全"
      },
    {
       "id": 10,
       "text": "计算机等级考试"
      },
      {
       "id": 11,
       "text": "其它"
      },
    ],
    placeList: [1, 2, 3, 4]
  },

  more:function(){
    switch(this.data.select){
      case 0: db.collection('_c').orderBy('date','desc').get({     
          success:res =>{              
    console.log(res.data), 
    this.setData({
      c:res.data,
      height:res.data.length*550+200,
      sxts:false,
    })
    }    
    });break;
    case 1: db.collection('_java').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    java:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 2: db.collection('_web').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    web:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 3: db.collection('_css').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    css:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 4: db.collection('_python').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    python:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    
    case 5: db.collection('_kotlin').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    kotlin:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    
    case 6: db.collection('_xcx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xcx:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    
    case 7: db.collection('_sql').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjk:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    
    case 8: db.collection('_sjjg-sf').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjjgysf:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    
    case 9: db.collection('_jz').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jz:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 10: db.collection('_xxaq').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xxaq:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 11: db.collection('_jsjdjks').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jsjdjks:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
    case 12: db.collection('_rj-other').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    rjqt:res.data,
    height:res.data.length*550+200,
    sxts:false,
    })
    }    
    });break;
  }
  },
  onLoad() {
   switch(this.data.select){
  case 0: db.collection('_c').orderBy('date','desc').get({     
      success:res =>{              
console.log(res.data), 
this.setData({
  c:res.data,
  height:res.data.length*550+200,
})
}    
});
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
      case 0: db.collection('_c').orderBy('date','desc').get({     
          success:res =>{              
    console.log(res.data), 
    this.setData({
      c:res.data,
      height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 1: db.collection('_java').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    java:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 2: db.collection('_web').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    web:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 3: db.collection('_css').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    css:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 4: db.collection('_python').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    python:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    
    case 5: db.collection('_kotlin').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    kotlin:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    
    case 6: db.collection('_xcx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xcx:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    
    case 7: db.collection('_sql').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjk:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    
    case 8: db.collection('_sjjg-sf').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjjgysf:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    
    case 9: db.collection('_jz').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jz:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 10: db.collection('_xxaq').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xxaq:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 11: db.collection('_jsjdjks').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jsjdjks:res.data,
    height:res.data.length*550,
    sxts:true,
    })
    }    
    });break;
    case 12: db.collection('_rj-other').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    rjqt:res.data,
    height:res.data.length*550,
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
    console.log(this.data.select)
  },

  // 监听swiper高度
  watchHeight() {
    var query = wx.createSelectorQuery()
    query.select('.box').boundingClientRect((res) => {
      this.setData({
        height: parseInt(res.height*550)
              })
    }).exec()
    console.log("dsdfd"+this.data.hight)

    switch(this.data.select){
      case 0: db.collection('_c').orderBy('date','desc').get({     
          success:res =>{              
    console.log(res.data), 
    this.setData({
      c:res.data,
      height:res.data.length*550+200,
      sxts:true,
    })
    }    
    });break;
    case 1: db.collection('_java').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    java:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 2: db.collection('_web').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    web:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 3: db.collection('_css').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    css:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 4: db.collection('_python').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    python:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    
    case 5: db.collection('_kotlin').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    kotlin:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    
    case 6: db.collection('_xcx').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xcx:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    
    case 7: db.collection('_sql').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjk:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    
    case 8: db.collection('_sjjg-sf').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    sjjgysf:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    
    case 9: db.collection('_jz').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jz:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 10: db.collection('_xxaq').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    xxaq:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 11: db.collection('_jsjdjks').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    jsjdjks:res.data,
    height:res.data.length*550+200,
    sxts:true,
    })
    }    
    });break;
    case 12: db.collection('_rj-other').orderBy('date','desc').get({     
      success:res =>{              
    console.log(res.data), 
    this.setData({
    rjqt:res.data,
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

