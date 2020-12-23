<template>
	<view>
		<div>66666666</div>
		<!-- <view>
			<text>唱歌跳舞打J篮球</text>
		</view>
		<view>
			<text selectable>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable space=" ensp">唱歌   跳舞打篮球</text>
		</view>
		<view>
			<text selectable space=" emsp">唱歌    跳舞打篮球</text>
		</view>
		<view>
			<text selectable space="emsp" style="font-size: 30px; ">唱歌    跳舞打篮球</text>
		</view> -->
		<button type="primary" @click="pulldown()">下拉刷新</button>
		<view>
			<view v-for="(item,i) in list" :key="i">
				<view title="" note="">{{ item }}</view>
			</view>
		</view>
		<view>*********</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[ "前端","后台","听到","CSS","前端","后台","听到","CSS" ]
			}
		},
		methods: {
			// 点击触发下拉刷新
			pulldown(){
				uni.startPullDownRefresh()
			}
		},
		onShow: () => {
			console.log("页面显示了")
		},
		onHide: () => {
			console.log("页面隐藏了")
		},
		onPullDownRefresh(){
			console.log("页面下拉刷新了")
			// 关闭下拉刷新
			setTimeout(()=>{
				this.list = ['1','2','3','4']
				uni.stopPullDownRefresh()
			},1000)
		},
		onReachBottom(){
			setTimeout(()=>{
				console.log("页面触底了")
				// this.list = ['1','2','3','4']
				this.list = [...this.list,...["前端","后台","html","CSS"]]
			},500)
		}
	}
</script>

<style>
	view{
		margin-bottom: 235rpx;
	}
</style>
