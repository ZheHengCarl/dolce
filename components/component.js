// components/component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    navList: [
      {
        icon: 'fa-home',
        text: '首页'
      },
      {
        icon: 'fa-book',
        text: '新闻中心'
      },
      {
        icon: 'fa-user',
        text: '关于我们'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add() {
      this.setData({
        active: this.data.num
      })
      this.triggerEvent('numChange', this.data.num);
    },
  },
})

