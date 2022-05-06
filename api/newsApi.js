import {
	netWork
} from "./network.js"


// 新闻详情
export function newsInfo(id) {
	return netWork({
		url: '/prod-api/press/press/' + id
	})
}
