<template>
	<view class="content" v-html="data.content">
		
	</view>
</template>

<script>
	import { newsInfo } from "../../api/newsApi.js"
	export default {
		onLoad(data) {
			newsInfo(data.id).then(res=>{
				this.data = res.data.data
				uni.setNavigationBarTitle({
					title:this.data.title
				})
			})
		},
		data() {
			return {
				data:{}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content{
		color: #708090;
		// font-size: 16px;
	}
	
</style>
