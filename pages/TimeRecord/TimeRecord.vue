<template>
	<view>
		<view class="aaa"></view>
	</view>
</template>

<script>
	// import $ ;
	export default {
		data() {
			return {
				dataList: [],
				addDate: {
					id: '', //id时间
					morning: [],
					afternoon: [],
					night: [],
					alltime: '',
				},
				alltime: 0,
			}
		},
		mounted() {
			this.getNodeJs();
		},
		methods: {
			async getNodeJs(callback) {
				uni.request({
					url: 'http://localhost:188/goodsList',
					method: 'GET',
					data: {},
					success: res => {
						// console.log(res.data);
						this.dataList = res.data.dataList;
						this.dataList.forEach((item,index) => {
							// console.log(item);
							var timeSum = (new Date(item.morning[1]) - new Date(item.morning[0])) +
								(new Date(item.afternoon[1]) - new Date(item.afternoon[0])) + (new Date(item.night[1]) - new Date(item.night[
									0]));
							this.dataList[index].alltime = timeSum / 1000 / 60 / 60;
							this.alltime += this.dataList[index].alltime;
							console.log(this.dataList)
						})
					},
					fail: () => {},
					complete: () => {}
				});
				callback && callback()
			}
		}
	}
</script>

<style>

</style>
