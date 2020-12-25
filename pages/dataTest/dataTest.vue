<template>
	<view>
		<view class="">
			{{ msg }}
		</view>
		<view>
			{{1+7}}
		</view>
		<view> {{ flag?"这是真的吗":"这是假的吗" }} </view>
		<button type="primary" @click="clickHanle(20,$event)">点击</button>
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		<button type="primary" @click="removeId">移出id数据</button>
		<button type="primary" @click="getNodeJs">测试获取nodeJs数据</button>
		<view class="" @click="toImage">
			跳转imageP
		</view>
		<view class="" @click="toTimeRecord">
			跳转时间记录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:"世界 你好呀",
				flag:true
			}
		},
		methods: {
			clickHanle(num,e){
				console.log("点击了" + num,e)
			},
			setStorage(){
				uni.setStorage({
					key:'id',
					// 数据为data
					data:this.msg+80,
					success() {
						console.log("存储成功")
					}
				})
			},
			getStorage(){
				uni.getStorage({
					key:'id',
					success:(res)=>{
						// (res) {
							// console.log("获取数据成功" , res)
							console.log("获取数据成功" , res.data)
							this.msg = res.data
							// console.log("***"+this.msg)
						// }
					}
				})
			},
			removeId(){
				uni.removeStorage({
					key:'id',
					success() {
						console.log("删除数据成功" )
					}
				})
			},
			toImage(){
				uni.navigateTo({
					url: '../imageP/imageP',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toTimeRecord(){
				uni.navigateTo({
					url: '../TimeRecord/TimeRecord',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
		},
		onPullDownRefresh(){
			console.log("页面下拉刷新了")
			// 关闭下拉刷新
			setTimeout(()=>{
				this.list = ['1','2','3','4']
				uni.stopPullDownRefresh()
			},1000)
		},
	}
</script>

<style>

</style>
