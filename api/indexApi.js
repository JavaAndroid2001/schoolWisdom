import {
	netWork
} from "./network.js"



// 轮播图
export function Banner(data) {
	return netWork({
		url: 'prod-api/api/rotation/list?type=2',
	})
}

// 全部服务				
export function allService(data) {
	return netWork({
		url: '/prod-api/api/service/list'
	})
}


// 新闻分类
export function newsClass(data) {
	return netWork({
		url: '/prod-api/press/category/list'
	})
}


// 新闻id下的列表
export function newsListById(id) {
	return netWork({
		url: '/prod-api/press/press/list?type=' + id
	})
}

// 新闻详情
export function newsById(id) {
	return netWork({
		url: '/prod-api/press/press/' + id
	})
}
