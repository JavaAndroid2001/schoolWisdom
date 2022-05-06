<template>
	<view class="tab">
		<scroll-view scroll-x>
			<view class="tab-box">
				<view class="tab-box-item" 
				v-for="(item,index) in newsData" 
				@click="clickTab(item,index)"
				:class="{active:activeIndex === index}"
				>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['newsData'],
		name: "newsTab",
		data() {
			return {
				activeIndex:0
			};
		},
		methods: {
			clickTab(item,index) {
				this.activeIndex = index
				this.$emit('newsId',{
					// 这里传的应该是个对象，所以不能叫id
					// id:item.id
					id:item.id
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		border-bottom: 2rpx solid #ddd;
		width: 100%;

		.tab-box {
			// margin: 5px 0;
			display: flex;
			height: 45px;
			align-items: center;
			flex-wrap: nowrap;

			.tab-box-item {
				flex-shrink: 0;
				padding: 0 5px;
				color: #333;
				font-weight: 800;
				font-size: 14px;
				
				&.active{
					color: #007AFF;
					padding-bottom: 5px;
					border-bottom: 2rpx solid #007AFF;
					
				}
			}
		}
	}
</style>
