"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
const _sfc_main = {
  name: "Searchinput",
  setup() {
    const searchList = common_vendor.ref([]);
    const queryValue = common_vendor.ref("");
    api_api.getSearchInput(queryValue.value).then((res) => {
      console.log(res);
    });
    const resultList = () => {
      let searchData = setInterval(() => {
        clearInterval(searchData);
        api_api.getSearchInput(queryValue.value).then((res) => {
          console.log(res);
          searchList.value = res.message;
        });
      }, 1e3);
    };
    const btn = () => {
      queryValue.value = "";
      searchList.value = [];
    };
    const Godetails = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/details/details?id=${id}`
      });
    };
    return {
      searchList,
      queryValue,
      resultList,
      btn,
      Godetails
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $setup.queryValue = $event.detail.value, (...args) => $setup.resultList && $setup.resultList(...args)]),
    b: $setup.queryValue,
    c: common_vendor.o((...args) => $setup.btn && $setup.btn(...args)),
    d: $setup.queryValue !== "",
    e: common_vendor.f($setup.searchList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: common_vendor.o(($event) => $setup.Godetails(item.goods_id)),
        c: item.goods_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u4EE3\u7801/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/pages/SearchInput/SearchInput.vue"]]);
wx.createPage(MiniProgramPage);
