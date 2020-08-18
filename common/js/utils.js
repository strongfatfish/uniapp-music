import config from "../../config/config.js"
// 获取系统信息
const info = ()=> {
	return new Promise((res,rej) =>{
		uni.getSystemInfo({
			success(info) {
				res(info)
			},
			fail(error) {
				rej(error)
			}
		})
	})
	
}
// 封装toast
const toast = (icon, text, duration, mask, position) => {
	duration = duration || 1500;
	mask = mask || false;
	position = position || false;
	uni.showToast({
		icon: icon,
		title: text,
		duration: duration,
		mask: mask,
		position: position,
	})
}
// 封装get
const get = (url, params) => {
	toast('loading', '加载中...', 10000)
	let uri = config.HOST + url;
	return new Promise((res,rej) => {
		uni.request({
			url: uri, 
			data: params,
			method:"GET",
			success: (data)=>{
				res(data)
			},
			fail:(error) => {
			    console.log('request_fail:url:' + url + ' ; ' + 'errMsg:' + error.errMsg);
				rej(error.errMsg)
			},
			complete: ()=> {
				uni.hideToast();
			}
		});
	})
} 

// 封装post
const post = (url, params) => {
	toast('loading', '加载中...', 10000)
	new Promise((res,rej) => {
		uni.request({
			url: config.HOST + url, 
			data: params,
			method:"POST",   
			success: (data)=>{
				res(data.data)
			},
			fail:(error) => {
			    console.log('request_fail:url:' + url + ' ; ' + 'errMsg:' + error.errMsg);
			    rej(error.errMsg)
			},
			complete: ()=> {
				uni.hideToast();
			}
		})   
	}) 
}
export {
	info,
	get,
	post,
	toast
}