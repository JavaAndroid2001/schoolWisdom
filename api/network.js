function netWork(params) {
	const URL = 'http://124.93.196.45:10001/';
	return new Promise(function(resolve, reject) {
		uni.request({
			url: URL + params.url,
			data: params.data || {},
			method: params.method || "GET",
			header: params.header || {
				'content-type': 'application/json',
			},
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}



module.exports = {
	netWork
}
