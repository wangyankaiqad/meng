"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      List: [],
      Goodsid: 1,
      childList: []
    });
    api_api.getclassiFication().then((res) => {
      data.List = res.message;
      data.childList = res.message[0].children;
    });
    const add = (item) => {
      data.Goodsid = item.cat_id;
      data.childList = item.children;
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      add
    });
  }
};
if (!Array) {
  const _easycom_SearchInput2 = common_vendor.resolveComponent("SearchInput");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _component_title = common_vendor.resolveComponent("title");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_SearchInput2 + _easycom_u_col2 + _component_title + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_SearchInput = () => "../../components/SearchInput/SearchInput.js";
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_SearchInput + _easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.List, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: _ctx.Goodsid == item.cat_id ? 1 : "",
        c: item.cat_id,
        d: common_vendor.o(($event) => $setup.add(item), item.cat_id)
      };
    }),
    b: common_vendor.p({
      span: "3"
    }),
    c: common_vendor.f(_ctx.childList, (ele, k0, i0) => {
      return {
        a: common_vendor.t(ele.cat_name),
        b: "56dc8334-4-" + i0 + ",56dc8334-3",
        c: common_vendor.f(ele.children, (item, k1, i1) => {
          return {
            a: item.cat_icon,
            b: common_vendor.t(item.cat_name),
            c: item.cat_id,
            d: "56dc8334-6-" + i0 + "-" + i1 + "," + ("56dc8334-5-" + i0)
          };
        }),
        d: "56dc8334-5-" + i0 + ",56dc8334-3",
        e: ele.cat_id
      };
    }),
    d: common_vendor.p({
      col: 3,
      border: false
    }),
    e: common_vendor.p({
      span: "9"
    }),
    f: common_vendor.p({
      gutter: "16",
      justify: "space-between"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-56dc8334"], ["__file", "D:/\u4EE3\u7801/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
