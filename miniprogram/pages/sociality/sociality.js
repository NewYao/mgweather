// pages/sociality/sociality.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    phone: '',
    password: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
   * 监听手机号输入
   */
    listenerPhoneInput: function (e) {
      this.data.phone = e.detail.value;

    },

    /**
     * 监听密码输入
     */
    listenerPasswordInput: function (e) {
      this.data.password = e.detail.value;
    },

    /**
     * 监听登录按钮
     */
    listenerLogin: function () {
      //打印收入账号和密码
      console.log('手机号为: ', this.data.phone);
      console.log('密码为: ', this.data.password);
    },

  }
})
