<template>
	<view>
		<view v-for="(item,index) in imgUrl" :key="index">
			<view>{{ item }}</view>
		</view>
		<button type="primary" @click="chooseImage">上传图片</button>
		<!-- #ifdef H5 -->
			<view class="n">只在H5中可见</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
			<view class="n">只在小程序中可见</view>
		<!-- #endif -->
		<!-- 调用子组件 -->
		<test :title="title" @myevent="getemit"></test>
		<aa></aa>
		<bb></bb>
		<image v-for="(item,index) in imgUrl" :src="item" @click="preview(item)"> </image>
		
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	import a from '../../components/a.vue'
	import b from '../../components/b.vue'
	export default {
		data() {
			return {
				imgUrl:[],
				title:"你好呀"
			}
		},
		methods: {
			chooseImage(){
				uni.chooseImage({
					count:5,
					success:(res)=> {
						console.log("图片上传成功",res)
						this.imgUrl = res.tempFilePaths
						// console.log(this.imgUrl)
					}
				})
			},
			preview(current){
				// console.log(current)
				uni.previewImage({
					current:current,
					urls:this.imgUrl,
					// 设置是否可循环预览
					loop:true
				})
			},
			getemit(n){
				console.log("子组件传来的值",n)
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			
			// #endif
			// #ifdef H5
			
			// #endif
		},
		components:{
			test:test,
			aa:a,
			bb:b
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
	/* #ifdef APP-PLUS */
		.n{
			color: #1AAD19;
		}
	/* #endif */
	/* #ifdef H5 */
		.n{
			color: #8A6DE9;
		}
	/* #endif */
</style>
