"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
var api_definet = require("../../api/definet.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_SearchInput2 = common_vendor.resolveComponent("SearchInput");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_SearchInput2 + _easycom_u_swiper2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_SearchInput = () => "../../components/SearchInput/SearchInput.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_SearchInput + _easycom_u_swiper + _easycom_u_grid_item + _easycom_u_grid + homeFloder)();
}
const homeFloder = () => "./components/homeFloder.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      List: [],
      cateList: []
    });
    api_api.getSwiper().then((res) => {
      data.List = res.message;
    });
    api_api.getCart().then((res) => {
      console.log(res);
      if (res.meta.status === api_definet.Code.SUCCESS) {
        data.cateList = res.message;
      } else {
        common_vendor.index.showToast({
          title: res.meta.msg,
          icon: "error"
        });
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.List,
          name: "image_src",
          height: "340"
        }),
        b: common_vendor.f(data.cateList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index,
            c: "57280228-3-" + i0 + ",57280228-2"
          };
        }),
        c: common_vendor.p({
          col: 4,
          border: false
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "D:/\u4EE3\u7801/\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
