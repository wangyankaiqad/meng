// 封装api的

import request from '../request/request.js';
import * as TS from './definet';
// 轮播图
const getSwiper = () => request('/home/swiperdata').then((res: TS.SwiperRes) => res, err => err);
// 导航区
const getCart = () => request('/home/catitems').then((res:{message:TS.CateList,meta:{status:number,msg:string}}) => res, err => err);



export { getSwiper, getCart };
