"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
const request = function(url, methods, data) {
  let header = {};
  if (url.includes("/my/")) {
    header["Authorization"] = wx.getStorageSync("token");
  }
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u52A0\u8F7D\u4E2D...\u5BA2\u5B98\u8BF7\u7A0D\u7B49"
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      header,
      url: baseUrl + url,
      method: methods | "get",
      data: data || null,
      success: function(res) {
        resolve(res.data);
      },
      fail: function(err) {
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.request = request;
