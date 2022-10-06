// 封装api的

import request from '../request/request.js';
import * as TS from './definet';
/**轮播图*/

const getSwiper = () => request('/home/swiperdata').then((res: TS.SwiperRes) => res, err => err);
/***导航区*/

const getCart = () => request('/home/catitems').then((res: { message: TS.CateList; meta: { status: number; msg: string } }) => res, err => err);
/**楼层*/

const getFloor = () => request('/home/floordata').then((res: TS.MessageList) => res, err => err);
/**分类*/
const getclassiFication = () => request('/categories').then((res: TS.GoodsCateList) => res, err => err);

/**搜索的接口*/

const getSearchInput = (value: string) => request(`/goods/qsearch?query=${value}`).then((res: TS.SearchRes) => res, err => err);

/**详情的接口**/

const getDetails = (id: number) => request(`/goods/detail?goods_id=${id}`).then(res => res, err => err);

/**抛出*/
export { getSwiper, getCart, getFloor, getclassiFication, getSearchInput, getDetails };
