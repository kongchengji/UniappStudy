<template>
	<view class="infocon">
		<view class="title">
			{{ title }}
		</view>
		<view class="artcon">
			<!-- 使用rich-text去展示html的内容 -->
			<rich-text class="richText" :nodes="strings">
				{{ strings }}
			</rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				strings: ''
			};
		},
		onLoad(e) {
			
			// console.log(e);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res);
					this.title = res.data.title;
					this.strings = res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});
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

<style lang="scss">
	.infocon{
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
		.title{
			line-height: 2em;
			font-weight: 700;
			font-size: 38upx;
		}
		.artcon{
			line-height: 2em;
		}
	}
	
</style>
