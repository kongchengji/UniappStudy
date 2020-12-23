<template>
	<view>
		B组件中的数量: {{ num }}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0
			};
		},
		methods:{
			
		},
		created() {
			uni.$on("updateNum",(num)=>{
				this.num += num
			})
		}
	}
</script>

<style>

</style>
