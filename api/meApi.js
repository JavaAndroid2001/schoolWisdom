import {
	netWork
} from "./network.js"


// 登录获取token
export function login(data) {
	return netWork({
		url: '/prod-api/api/login',
		data: data,
		method: "POST"
	})
}



// userInfo	GET
export function userInfo() {
	return netWork({
		url: '/prod-api/api/common/user/getInfo',
		header: {
			"Authorization": getApp().globalData.token,
			'content-type': 'application/json'
		}
	})
}

// putUser
export function putUser(data){
	return netWork({
		url:'/prod-api/api/common/user',
		data:data,
		method:'PUT',
		header:{
			"Authorization": getApp().globalData.token,
			'content-type': 'application/json'
		}
	})
}