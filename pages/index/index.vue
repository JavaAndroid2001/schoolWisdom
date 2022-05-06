<template>
	<view>
		<view class="bac">
			<!-- 搜索栏 -->
			<view class="search">
				<input class="searchInput" type="text" placeholder="请输入内容" />

				<image class="searchImg" src="../../static/icon/searchImg.svg"></image>
			</view>

			<!-- 	<uni-easyinput prefixIcon="search">
				搜索
			</uni-easyinput> -->

			<!-- 轮播图 -->
			<swiper class="swiper" indicator-dots="true" indicator-color="#ffffff" indicator-active-color="#ff0004">
				<swiper-item v-for="i in banner" :key="i.id" @click="bannerClick(i)">
					<view>
						<image class="banner" :src="url+i.advImg"></image>
					</view>
				</swiper-item>
			</swiper>

			<!-- 服务 -->
			<view class="allService">
				<view class="serviceItem" v-for="(item,index) in service" :key="item.id" v-if="index<9">
					<image class="serviceImg" :src="url+item.imgUrl"></image>
					<text>{{item.serviceName}}</text>
				</view>
				<view class="serviceItem">
					<image class="serviceImg" src="../../static/icon/更多.svg"></image>
					<text>更多服务</text>
				</view>
			</view>



			<!-- 新闻 -->
			<view class="news">
				<newsTab :newsData="newsData" @newsId="newsId"></newsTab>
				<view class="newsList">
					<scroll-view scroll-y class="news-sc">
						<view>
							<view>
								<newsTab-list :list="newsIdList"></newsTab-list>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>



		</view>
	</view>
	</view>
</template>

<script>
	import {
		newsClass,
		Banner,
		allService,
		newsListById
	} from "../../api/indexApi.js"
	import {
		newsInfo
	} from "../../api/newsApi.js"
	export default {
		data() {
			return {
				serach: '',
				url: this.URL,
				banner: [],
				service: [],
				bannerData:{},
				newsClass: [],
				newsData: [],
				newsIdList: []
			}
		},
		onLoad() {
			// 轮播图
			Banner().then(res => this.banner = res.data.rows)
			// 全部服务
			allService().then(res => this.service = this.arrSort(res.data.rows))
			// 新闻分类
			newsClass().then(res => {
				this.newsData = res.data.data
				this.newsId(this.newsData[0])
			})
		},

		methods: {
			// 服务排序 
			arrSort(arr) {
				arr.sort(function(a, b) {
					return b.id - a.id
				})
				return arr
			},

			// 轮播图点击事件
			bannerClick(i) {
				uni.navigateTo({
					url: '../newsDetails/newsDetails?id=' + i.targetId
				})
			},
			newsId(data) {
				newsListById(data.id).then(
					res => {
						this.newsIdList = res.data.rows
					})
			}


		}
	}
</script>

<style lang="scss" scoped>
	.bac {
		margin: 0 25rpx;
	}

	.search {
		display: flex;
		text-align: center;
		border: 2px solid #a1a1a1;
		height: 60rpx;
		align-items: center;
		border-radius: 20rpx;
		margin: 20rpx 0;
	}

	.searchImg {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		right: 40rpx;
	}

	.searchInput {
		width: 100%;
	}

	.banner {
		width: 100%;
		height: 350rpx;
		border-radius: 20rpx;
	}

	swiper {
		height: 350rpx;
	}

	.allService {
		height: 300rpx;
		width: 100%;
		border: 2px solid rgba(0, 0, 0, .4);
		margin-top: 40rpx;
		border-radius: 20rpx;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
	}

	.serviceItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 18rpx;
	}

	.serviceImg {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 10rpx;
	}

	.news {
		margin-top: 20px;
		border-radius: 20rpx;
		border: 2px solid rgba(0, 0, 0, .4);
	}
</style>
