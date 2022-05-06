<template>
	<view class="newsList">
		<view class="list" v-for="i in list" :key="i.id" @click="clickNews(i)">
			<view class="left">
				<image :src='url+i.cover'></image>
			</view>
			<view class="rigth">
				<text class="title">
					{{i.title}}
				</text>
				<text class="content" v-html="i.content">
				</text>
				<view class="bottom">
					<text class="bottom-time">{{i.createTime}}</text>
					<text class="bottom-comment">
						<image src="../../static/icon/消息.svg"></image>{{i.likeNum}}
					</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import { newsInfo } from "../../api/newsApi.js"
	export default {
		props: ['list'],
		name: "newsTab-list",
		data() {
			return {
				url: this.URL
			}
		},
		methods: {
			clickNews(i){
				uni.navigateTo({
					url:'../../pages/newsDetails/newsDetails?id='+i.id
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		margin: 5px;
		display: flex;
		border-radius: 10px;
		border: 2px solid rgba(0, 0, 0, .4);		
		.left {
			width: 90px;
			height: 80px;
			margin-right: 8px;
			margin: 5px;

			image {
				width: 100%;
				height: 100%;
				border-radius: 8px;
			}
		}

		.rigth {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 230px;

			.title {
				font-size: 15px;
				font-weight: 800;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}

			.content {
				width: 230px;
				font-size: 14rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.bottom {
				display: flex;
				font-size: 2px;
				justify-content: space-between;
				align-items: center;

				.bottom-comment {
					image {
						width: 12px;
						height: 12px;
					}
				}
			}
		}
	}
</style>
