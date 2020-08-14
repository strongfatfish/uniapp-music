import config from "./config.js"
import {
	get,
	post
} from "../common/js/utils.js"

// 专辑详情
const album_detail = (id, cb) => {
	let url = config.API.ALBUM_DETAIL;
	get(url, {
		id: id
	}).then(data => cb(data.data))
}

// 轮播图
const banner = (cb) => {
	let url = config.API.BANNER;
	get(url, {
		type: 1
	}).then(data => cb(data.data))
}

// 推荐新歌
const newsong = (cb) => {
	let url = config.API.PERSONALIZED_NEWSONG;
	get(url, {}).then(data => cb(data.data))
}

// 推荐歌单
const playlist = (limit, cb) => {
	let url = config.API.PERSONALIZED_NEWSONG;
	limit = limit || 10; //默认10
	get(url, {
		limit: limit
	}).then(data => cb(data.data))
}

// 歌单详情
const get_playlist_detail = (id, cb) => {
	let url = config.API.PLAYLIST_DETAIL;
	let params = {
		id: id
	}
	get(url, params).then(data => cb(data.data))
}

// 歌曲热搜
const get_hot_list = (cb) => {
	let url = config.API.HOT_SEARCH;
	get(url, {}).then(data => cb(data.data))
}

/**
 * 单项搜索
 * 此接口post方式有问题, 分页参数无效
 * 
 * 必选参数: 
 * keywords: 关键词
 * 
 * 可选参数: 
 * limit : 返回数量 , 默认为 30 
 * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
const search = (keyword, type, page, cb) => {
	let url = config.API.SEARCH;
	let limit = 10;
	let offset = page * limit;
	type = type || 1;
	let params = {
		keywords: keyword,
		limit: limit,
		offset: offset,
		type: type
	}
	get(url, params).then(data => cb(data.data))
}

// 获取歌曲url
const get_song_url = (id, cb) => {
	let url = config.API.SONG;
	let params = {
		id: id,
		br: 320000
	}
	get(url, params).then(data => cb(data.data))
}

// 获取歌词
const get_lyric = (id, cb) => {
	let url = config.API.LYRIC;
	let params = {
		id: id,
	}
	get(url, params).then(data => cb(data.data))
}

// 歌手详情
const get_song_detail = (id, cb) => {
	let url = config.API.SONG_DETAIL;
	let params = {
		ids: id,
	}
	get(url, params).then(data => cb(data.data))
}
/*
type: 地区类型 id,对应以下:

全部:0

华语:7

欧美:96

日本:8

韩国:16
*/
// 新歌上架
const get_newsong = ({ type }, cb) => {
	let url = config.API.TOP_SONG;
	let params = {
		type: type || 7,
	}
	get(url, params).then(data => cb(data.data))
}
/**
 * 可选参数 :

limit: 取出数量 , 默认为 50

offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本

type : new:全部 hot:热门,默认为 new

接口地址 : /top/album

调用例子 : /top/album?offset=0&limit=30&year=2019&month=6
 */

// 新碟上架
const get_newalbum = (options, cb) => {
	let url = config.API.TOP_ALBUM;
	let params = {
		limit: options.limit || 50,
		offset: options.offset || 0,
		type: options.type || "hot",
		area: options.area || "All"
	}
	get(url, params).then(data => cb(data.data))
}
export {
	album_detail,
	banner,
	newsong,
	playlist,
	get_playlist_detail,
	get_hot_list,
	search,
	get_song_url,
	get_lyric,
	get_song_detail,
	get_newsong,
	get_newalbum
}
