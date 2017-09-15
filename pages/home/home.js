// home.js

import { Home } from 'home-model.js';
var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false

  },

  onLoad: function () {
    this._loadData();
  },

  _loadData: function () {
    var id = 1;
    home.getBannerData(id, (res) => {
      // console.log(res);
      this.setData({
        'bannerArr': res
      });
    });

    home.getProductsData((res) => {
      // console.log(res);
      this.setData({
        'productsArr': res
      });
    });

    home.getProductsByCategory(1, (res) => {
      this.setData({
        'categoryProductsId1': res,
        loadingHidden: true
      });
    });
  },

  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  },

  onMoreTap: function (event) {
    wx.navigateTo({
      url: '../more/more',
    })
  },

  onThemesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name,
    })
  },

  onServicesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../services/services?id=' + id + '&name=' + name,
    })
  }
})