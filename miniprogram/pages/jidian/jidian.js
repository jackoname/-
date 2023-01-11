// miniprogram/pages/jidian/jidian.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
jd:0,
cj:0,
sum:0,
aveg:0,
qingkong:'',
i:1,
result:'',
ii:'',
kc1:'',
kc2:'',
aves:'',
sums:'',
pricture:'',
hz:'',
zxf:'',
zjd:'',
pjjd:'',
css:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
chengji:function(e){
  this.setData({
cj:e.detail.value,
})
},
jidian:function(e){
  this.setData({
jd:e.detail.value,
})
},
next:function(){
  var c=this.data.cj
  var j=this.data.jd
  var s=this.data.sum
  var a=this.data.aveg
  var len=this.data.i
  if(c<=100&&j>=0){
if(c>=60){
  this.setData({
    aveg:(a*1+(((c*1-60)/10+1)*j*1)),
    sum:s*1+j*1,
    i:len*1+1,
    qingkong:'',
  })
}
  else
  {
    this.setData({
      sum:s*1+j*1,
      i:len*1+1,
    qingkong:'',
  })
}

}
else{
  wx.showToast({
    title: '输入有误！',
    duration: 1000,
    icon: 'error',
  })
}
},
rest:function(){
  this.setData({
    qingkong:'',
  })
},
resall:function(){
  this.setData({
    aveg:0,
    sum:0,
    qingkong:'',
    i:1,
  })
},
submit:function(){
var ss= this.data.sum
var aa=this.data.aveg
var lenn=this.data.i
var p =aa*1/ss*1
this.setData({
result:p.toFixed(3),
kc1:'共有',
kc2:'门课',
ii:lenn*1-1,
aves:aa,
sums:ss,
aveg:0,
sum:0,
qingkong:'',
i:1,
zxf:'总学分：',
zjd:'总绩点：',
pjjd:'平均绩点：',
css:'show',
hz:'http://m.qpic.cn/psc?/V52kB9ar0WL3r12fkeru3hewxl3MUU8U/TmEUgtj9EK6.7V8ajmQrEPCuc1MXY9M08pKKJnA5Q32euEvbhNHX04QVZ6vfAVY3v3MdqmuDyUfwJLzuMtP7WKVZFN1OWki7LEXFP4ozZvc!/b&bo=JAIkAiQCJAIDKQw!&rf=viewer_4'
})
if(p<3){
  this.setData({
    pricture:'http://m.qpic.cn/psc?/V52kB9ar0WL3r12fkeru3hewxl3MUU8U/TmEUgtj9EK6.7V8ajmQrECzxuqmvs1gbE.PjJGilp5Y*XNPe3.zt7KSGa0IYPkmal9hqH9N3tM5eaJGmpXngKpEjSxejsP07JT1VSStnCkU!/b&bo=OATRBjgE0QYDKQw!&rf=viewer_4',

  })
}
else if(p>=3&&p<4){
  this.setData({
    pricture:'http://m.qpic.cn/psc?/V52kB9ar0WL3r12fkeru3hewxl3MUU8U/TmEUgtj9EK6.7V8ajmQrEBZ*aIpQAbvgL0shkFHAzwMdyFi2YBZCnkPaHLYsWV0CSsZNxJaaOAEQtpXdC6Dds7iYMNuTPxaLigpdEayL*g0!/b&bo=OATRBjgE0QYDKQw!&rf=viewer_4',

  })
}
  else if(p>=4){
    this.setData({
      pricture:'http://m.qpic.cn/psc?/V52kB9ar0WL3r12fkeru3hewxl3MUU8U/TmEUgtj9EK6.7V8ajmQrEE*qAonGWbqvKiLGjE32E*6xgTj.nmiOWEUs.yNC8HkEPWowmdV1Ovwk0e9YWyvL21t1nEHGtgIwgZn.10aQHXU!/b&bo=OATRBjgE0QYDGTw!&rf=viewer_4',

    })
  }
},

reload:function(){
wx.reLaunch({
  url: '../../pages/jidian/jidian',
  success: (res) => {},
  fail: (res) => {},
  complete: (res) => {},
})
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