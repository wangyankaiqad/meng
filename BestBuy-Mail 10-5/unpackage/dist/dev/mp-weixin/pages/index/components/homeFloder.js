"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_api = require("../../../api/api.js");
var api_definet = require("../../../api/definet.js");
require("../../../request/request.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "homeFloder",
  setup(__props) {
    const data = common_vendor.reactive({
      floorList: []
    });
    api_api.getFloor().then((res) => {
      if (res.meta.status === api_definet.Code.SUCCESS) {
        console.log(res.message, "123123123123");
        data.floorList = res.message;
        console.log(data.floorList, "\u56FE\u7247");
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.floorList, (item, index, i0) => {
          return {
            a: item.floor_title.image_src,
            b: item.product_list[0].image_src,
            c: "8b981f0c-1-" + i0 + "," + ("8b981f0c-0-" + i0),
            d: common_vendor.f(item.product_list, (ele, index2, i1) => {
              return {
                a: ele.image_src,
                b: index2,
                c: ele.image_width !== "232",
                d: "8b981f0c-4-" + i0 + "-" + i1 + "," + ("8b981f0c-3-" + i0)
              };
            }),
            e: "8b981f0c-3-" + i0 + "," + ("8b981f0c-2-" + i0),
            f: "8b981f0c-2-" + i0 + "," + ("8b981f0c-0-" + i0),
            g: "8b981f0c-0-" + i0,
            h: index
          };
        }),
        b: common_vendor.p({
          span: "4"
        }),
        c: common_vendor.p({
          col: 2
        }),
        d: common_vendor.p({
          span: "8"
        }),
        e: common_vendor.p({
          gutter: "16",
          border: false
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8b981f0c"], ["__file", "D:/\u4EE3\u7801/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/pages/index/components/homeFloder.vue"]]);
wx.createComponent(Component);
