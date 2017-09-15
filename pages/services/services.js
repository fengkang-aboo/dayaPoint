// theme.js

import { Category } from 'service-model.js';
var category = new Category;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var name = options.name;
    this.data.id = id;
    this.data.name = name;
    this._loadData();
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
  },

  _loadData: function () {
    category.getProductsByCategory(this.data.id, (res) => {
      this.setData({
        'categoryProducts': res
      });
    });

    category.getProductorData(this.data.id, (res) => {
      this.setData({
        'themeInfo': res
      });
    });
  },

  onProductsItemTap: function (event) {
    var id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  },
})