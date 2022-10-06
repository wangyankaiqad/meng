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
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      goods: [],
      flag: false,
      pirce: 0,
      num: 0
    });
    const setData = () => {
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
    };
    const valChange = (index) => {
      console.log(index);
      data.goods[index].number++;
      setData();
    };
    const checkboxChange = (e) => {
      data.goods.forEach((item) => {
        if (item.id === e.id) {
          item.status = !e.status;
        }
      });
      data.flag = data.goods.every((item) => item.status);
      setData();
    };
    const quanxuan = (e) => {
      data.goods.forEach((item) => {
        item.status = e.value;
      });
      setData();
    };
    const pirce = common_vendor.computed$1(() => {
      let num = 0;
      data.goods.forEach((item) => {
        if (item.status) {
          num += item.number * item.price;
        }
      });
      return num;
    });
    const jiesuan = () => {
      let aa = data.goods.some((item) => item.status == true);
      if (aa == true) {
        common_vendor.index.navigateTo({
          url: "/pages/settlement/settlement"
        });
      } else {
        common_vendor.index.showToast({
          title: "\u8FD8\u6CA1\u6709\u9009\u62E9\u5546\u54C1"
        });
      }
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      valChange,
      checkboxChange,
      quanxuan,
      pirce,
      jiesuan
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res) => {
        this.goods = JSON.parse(res.data);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_number_box2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/vk-uview-ui/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.goods, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $setup.checkboxChange(item)),
        b: "4dbaeac3-1-" + i0 + "," + ("4dbaeac3-0-" + i0),
        c: common_vendor.o(($event) => item.status = $event),
        d: common_vendor.p({
          shape: "circle",
          modelValue: item.status
        }),
        e: "4dbaeac3-0-" + i0,
        f: item.url,
        g: common_vendor.t(item.name),
        h: common_vendor.t(item.price),
        i: common_vendor.o(($event) => $setup.valChange(index)),
        j: "4dbaeac3-2-" + i0,
        k: common_vendor.o(($event) => item.number = $event),
        l: common_vendor.p({
          min: 1,
          modelValue: item.number
        }),
        m: index
      };
    }),
    b: common_vendor.o($setup.quanxuan),
    c: common_vendor.o(($event) => _ctx.flag = $event),
    d: common_vendor.p({
      shape: "circle",
      modelValue: _ctx.flag
    }),
    e: common_vendor.t($setup.pirce),
    f: common_vendor.o((...args) => $setup.jiesuan && $setup.jiesuan(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u4EE3\u7801/\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
