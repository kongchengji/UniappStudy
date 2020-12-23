<template>
	<view>
		<view class="myview">
			父组件传来的值:{{ title }}
			<button type="primary" @click="sendFu()">给父组件传值</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nums:3
			};
		},
		props:["title"],
		methods:{
			sendFu(){
				console.log("给父组件传值")
				this.$emit("myevent",this.nums)
			}
		}
	}
</script>

<style>

</style>
