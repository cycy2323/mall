module.exports = params => {
	let url = params.url
	let method = params.method
	let header = params.header || {}
	let data = params.data || {}
	
	//请求方式: GET POST 
	if (method) {
		method = method.toUpperCase() // 小写转大写
		if (method == "POST") {
			header = {
				"content-type": "application/x-www-form-urlencode"
			}
		}
	}
	// 发起请求 加载动画
	if (!params.hideLoading) {
		uni.showLoading({
			title: "加载中..."
		})
	}
	//发起网络请求
	uni.request({
		url: url,
		method: method || 'GET',
		header:header,
		data: data,
		success: res => {
			if (res.statusCode && res.statusCode != 200) { //api错误
				uni.showModal({
					content: res.msg
				})
				return
			}
			typeof params.success == "function" && params.success(res.data)
		},
		fail: (err) => {
			uni.showModal({
				content: err.msg,
			})
			typeof params.fail == "function" && params.fail(err.data)
		},
		complete: () => {
			console.log('网络请求complete')
			uni.hideLoading()
			typeof params.complete == "function" && params.complete(err.data)
			return
		}
	});
	
}