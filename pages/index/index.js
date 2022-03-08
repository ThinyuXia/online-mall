//0 引入 用来发送请求的方法 一定要把路径补全
import {request} from "../../request/index.js"
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    catesList:[]
  },
  //页面开始加载就会触发
  onLoad: function(options) {
      //1 发送异步请求获取轮播图数据 通过es6的promise来解决这个问题
      // wx-wx.request({
      //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      //   enableCache: true,
      //   enableHttp2: true,
      //   enableQuic: true,
      //   timeout: 0,
      //   success: (result) => {
      //     this.setData({
      //       swiperList:result.data.message
      //     })
      //   },
      // })
      // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
      // .then(result=>{
      //     this.setData({
      //     swiperList:result.data.message
      //     })
      // })
      this.getSwiperList();
      this.getCateList();
  },

  //获取轮播图数据的方法
  getSwiperList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result=>{
        this.setData({
        swiperList:result.data.message
        })
    })
  },

  //获取分类导航数据的方法
  getCateList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result=>{
        this.setData({
        catesList:result.data.message
        })
    })
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  