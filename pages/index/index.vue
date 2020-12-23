<template>
	<view class="content">
		<!-- 图片，并且图片等比缩放 -->
		<!-- <image src="../../static/logo.png" mode="widthFix"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- ulistMedia可以迅速完成媒体列表布局 -->
		<view class="uni-list">
			<!-- 方法2 @tap绑定一个事件  使用data-listsid去命名并绑定事件id-->
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index.id" @tap="openinfo" :data-listsid="item.post_id">
				<!-- 点击跳转到info.vue界面，方法1 navigator-->
				<!-- <navigator url="../info/info"> -->
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
				<!-- </navigator> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list:[]
			}
		},
		onLoad() {
			// 通过showLoading可以为页面设置加载动画
			uni.showLoading({
				title:"加载中......"
			}),
			this.getNews()
		},
		methods: {
			async getNews(callback){
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					method: 'GET',
					data: {},
					success: res => {
						// console.log(res);
						this.list = res.data;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
				callback && callback()
			},
			openinfo(e){
				// console.log(e);
				var listid = e.currentTarget.dataset.listsid;
				// console.log(listid)
				uni.navigateTo({
					url: '../info/info?newsid='+listid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onPullDownRefresh() {
			console.log("下拉刷新了");
			this.list = []
			setTimeout(()=>{
				// this.getNews();
				// uni.stopPullDownRefresh()
				this.getNews(()=>{
					uni.stopPullDownRefresh()
				})
			}, 1000);
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.uni-media-list-body{
		height: auto;
	}
	.uni-media-list-text-top{
		line-height: 1.6em;
		/* font-size: 12upx; */
	}
	.uni-media-list-text-bottom{
		/* font-size: 12upx; */
	}
</style>
