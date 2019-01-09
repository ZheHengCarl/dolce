//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['../../images/banner1.jpg','../../images/banner2.jpg','../../images/banner3.jpg'],
    indicatorDots: false, //是否显示面板指示点
    vertical: false, //滑动方向是否为纵向
    autoplay: true, //是否自动切换
    circular: true, //是否采用衔接滑动
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    previousMargin: 0, //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0 //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
  },
  onLoad: function(opt){
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
  },
  numChange(e) {
    console.log(e.detail)
    const numi = e.detail;

  }
})
