// pages/gaming/gaming.js
import { formatTime, countDown, clearTimeOut, missions} from '../../utils/common.js';



Page({

  /**
   * 页面的初始数据
   */
  data: {
    remainTime: 60 * 30,
    mission:'',
    clock: formatTime(60 * 30)
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
    // 随机一个任务
    this.setData({
      mission: missions[Math.floor(Math.random() * missions.length)]
    });

    // 开始倒计时
    const t = setInterval(function(){
      if(this.data.remainTime === 0){
        clearInterval(t);
      }else{
        this.setData({
          remainTime: this.data.remainTime - 1,
          clock: formatTime(this.data.remainTime - 1)
        })
      }
    }.bind(this),1000);
    
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