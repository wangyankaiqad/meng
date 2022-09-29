// 用来写interweb  type定义数据接口类型的

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
enum Code{
	/**成功*/
	SUCCESS=200
}

type CateList=Array<CateItem>

export { SwiperRes, SwiperList ,CateList,Code};
