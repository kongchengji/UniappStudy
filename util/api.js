const BASE_URL = 'http://localhost:8083'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if( res.data.status !== 0 ){
					return uni.showToast({
						title:"数据获取失败"
					})
				}
				// 请求成功
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"接口获取失败"
				})
				reject(err)
			}
		})
	})
}

myRequest(){
	url:'/get/getlunbo',
	method:'POST',
	data:{
		
	}
}

//如何在组件中调用此方法
// methods: {
// 	//获取轮播图的数据
// 		async getSwipers () {
// 			const res = await this.$myRuquest({
// 				url: '/api/getlunbo'
// 			})
// 			this.swipers = res.data.message
// 	}
// }