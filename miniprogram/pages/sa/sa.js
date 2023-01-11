// miniprogram/pages/sa/sa.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zystx:'',
    zysfbid:"",
    zysfbrq:'',
    zysfbnr:"",
    zysfblj:"",
    zyshqfs:"",

    ggtx:'',
    ggfbid:'',
    ggfbrq:'',
    ggfbnr:'',

    img:"",
    title:"",
    author:"",
    time:"",
    url:'',
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['c/c++/c#','JAVA','WEB','CSS','Python','Kotlin','小程序','数据库','数据结构与算法','计算机组成原理','信息安全','计算机等级考试','软件其它',
    '英语词汇','英语翻译','英语听力','英语口语','英语其它',
    '高等数学','线性代数','概率统计','数学其它',
  '政治学习',
'其他学习',
'经验分享',
'生活趣事',
'才艺展示',
'资源分享',
'公告发布',
],//下拉列表的数据
    index:0//选择的下拉列表下标
  },
addimg:function(e){
  this.setData({
  img:e.detail.value
  })
},
addbt:function(e){
  
  this.setData({
  title:e.detail.value
  })
},
addzz:function(e){
  this.setData({
  author:e.detail.value
  })
},
addrq:function(e){
  this.setData({
  time:e.detail.value
  })
},
addurl:function(e){
  this.setData({
  url:e.detail.value
})},
  add:function(){
  var DB;
  switch(this.data.index){
    case 0:DB=db.collection('_c');break;
    case 1:DB=db.collection('_java');break;
    case 2:DB=db.collection('_web');break;
    case 3:DB=db.collection('_css');break;
    case 4:DB=db.collection('_python');break;
    case 5:DB=db.collection('_kotlin');break;
    case 6:DB=db.collection('_xcx');break;
    case 7:DB=db.collection('_sql');break;
    case 8:DB=db.collection('_sjjg-sf');break;
    case 9:DB=db.collection('_jz');break;
    case 10:DB=db.collection('_xxaq');break;
    case 11:DB=db.collection('_jsjdjks');break;
    case 12:DB=db.collection('_rj-other');break;
    case 13:DB=db.collection('english_word');break;
    case 14:DB=db.collection('english_fanyi');break;
    case 15:DB=db.collection('english_hear');break;
    case 16:DB=db.collection('english_kouyu');break;
    case 17:DB=db.collection('english_other');break;
    case 18:DB=db.collection('math_gdsx');break;
    case 19:DB=db.collection('math_xxds');break;
    case 20:DB=db.collection('math_gltj');break;
    case 21:DB=db.collection('math_other');break;
    case 22:DB=db.collection('mks_xs');break;
    case 23:DB=db.collection('other_study');break;
    case 24:DB=db.collection('shejiao_jyfx');break;
    case 25:DB=db.collection('shejiao_shqs');break;
    case 26:DB=db.collection('shejiao_cyzs');break;
    case 27:DB=db.collection('zys_fx');break;
    case 28:DB=db.collection('note_gonggao');break;

  }
        DB.add({
          data:{
            fengmian:this.data.img,
            title:this.data.title,
            date:this.data.time,
            author:this.data.author,
            url:this.data.url,
            sorb:this.data.sorb,
          },
          success(res){
            console.log(保存成功,+res)
          },
          fail(res){
            console.log("失败",+res)
          }

        })
        wx.showToast({
          title: '写入成功',
          duration: 3000,
          icon:'success',
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
},


zysadd:function(){
  if(this.data.index==27){
  var DB=db.collection('zys_fx');
  DB.add({
    data:{
     tx:this.data.zystx,
      id:this.data.zysfbid,
      time:this.data.zysfbrq,
      neirong:this.data.zysfbnr,
     link:this.data.zysfblj,
      how:this.data.zyshqfs,
    },
    success(res){
      console.log(保存成功,+res)
    },
    fail(res){
      console.log("失败",+res)
    }

  })
  wx.showToast({
    title: '写入成功',
    duration: 3000,
    icon:'success',
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
}
},

ggadd:function(){
  if(this.data.index==28){
  var DB=db.collection('note_gonggao');
  DB.add({
    data:{
     tx:this.data.ggtx,
      name:this.data.ggfbid,
      time:this.data.ggfbrq,
      allknows:this.data.ggfbnr,

    },
    success(res){
      console.log(保存成功,+res)
    },
    fail(res){
      console.log("失败",+res)
    }

  })
  wx.showToast({
    title: '写入成功',
    duration: 3000,
    icon:'success',
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
}
},

ggtx:function(e){
  this.setData({
    ggtx:e.detail.value
  })
},

ggfbid:function(e){
  this.setData({
    ggfbid:e.detail.value
  })
},
ggfbrq:function(e){
  this.setData({
    ggfbrq:e.detail.value
  })
},

ggfbnr:function(e){
  this.setData({
    ggfbnr:e.detail.value
  })
},
zystx:function(e){
  this.setData({
    zystx:e.detail.value
  })
},

zysfbid:function(e){
  this.setData({
    zysfbid:e.detail.value
  })
},

zysfbrq:function(e){
  this.setData({
    zysfbrq:e.detail.value
  })
},

zysfbnr:function(e){
  this.setData({
    zysfbnr:e.detail.value
  })
},

zysfblj:function(e){
  this.setData({
    zysfblj:e.detail.value
  })
},

zyshqfs:function(e){
  this.setData({
    zyshqfs:e.detail.value
  })
},

  selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
  
    swichNav: function (e) {
      console.log(e);
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
          return false;
      } else {
          that.setData({
              currentTab: e.target.dataset.current,
          })
      }
  },
  swiperChange: function (e) {
      console.log(e);
      this.setData({
          currentTab: e.detail.current,
      })
  
  },
    // 点击下拉列表
    optionTap(e){
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
     index:Index,
     show:!this.data.show
    });
    console.log(this.data.index)
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})