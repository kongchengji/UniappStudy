<template>
	<view>
		<view>
			<button type="primary" @click="addNum">点击增加B组件</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			addNum(){
				uni.$emit("updateNum",10)
			}
		}
	}
</script>

<style>

</style>
