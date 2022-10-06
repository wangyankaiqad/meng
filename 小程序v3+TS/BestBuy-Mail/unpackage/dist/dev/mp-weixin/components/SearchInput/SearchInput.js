"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "SearchInput",
  setup() {
    const btn = () => {
      common_vendor.index.navigateTo({
        url: "/pages/SearchInput/SearchInput"
      });
    };
    return {
      btn
    };
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.btn)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u4EE3\u7801/\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002/\u5C0F\u7A0B\u5E8Fv3+TS/BestBuy-Mail/components/SearchInput/SearchInput.vue"]]);
wx.createComponent(Component);
