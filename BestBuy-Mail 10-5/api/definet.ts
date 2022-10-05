// 用来写interweb  type定义数据接口类型的

import { type } from 'os';

/**
 * 全局的状态返回
 * */
enum Code {
	/**成功*/
	SUCCESS = 200
}
type Meta = {
	msg: string;
	status: Code;
};

/**轮播图*/

interface SwiperRes {
	goods_id: number;
	image_src: string;
	navigator_url: string;
	open_type: string;
}
interface SwiperList {
	list: SwiperRes[];
}

/**导航*/

interface CateItem {
	name: string;
	image_src: string;
	open_type: string;
	navigator_url: string;
}

type CateList = Array<CateItem>;

// 楼层
type ProductList = Array<{
	name: string;
	image_src: string;
	image_width: string;
	open_type: string;
	navigator_url: string;
}>;

interface FloorTitle {
	name: string;
	image_src: string;
}

type MessageList = Array<{
	floor_title: FloorTitle;
	product_list: ProductList;
}>;

type FlorData = {
	meta: {
		masg: string;
		status: Code;
	};
};

// 分类
type FeiMessage = Array<{
	cat_id: number;
	cat_name: string;
	cat_pid: number;
	cat_level: number;
	cat_deleted: boolean;
	cat_icon: string;
	children: Array<FeiMessage>;
}>;

interface GoodsCateList {
	meta: Meta;
	message: FeiMessage;
}
/**搜索的类型*/
type GoodsSearch = Array<{
	goods_id: number;
	goods_name: string;
}>;
interface SearchRes {
	meta: Meta;
	message: GoodsSearch;
}

export { SwiperRes, SwiperList, CateList, Code, MessageList, FlorData, GoodsCateList, SearchRes, GoodsSearch };
