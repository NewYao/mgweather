//app.js

App({
  globalData:{
    navHeight:'',
    urlPath:'',
    openid:''
  },
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        //导航高度
        //console.log(res.statusBarHeight + 46);
       // this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    });
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    };

    this.globalData = {
    }
  }
})
