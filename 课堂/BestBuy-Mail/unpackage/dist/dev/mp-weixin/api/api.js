"use strict";
var request_request = require("../request/request.js");
const getSwiper = () => request_request.request("/home/swiperdata").then((res) => res, (err) => err);
const getCart = () => request_request.request("/home/catitems").then((res) => res, (err) => err);
exports.getCart = getCart;
exports.getSwiper = getSwiper;
