<template>
	<view class="content">
		<view class="user-data">
			<image :src="url+user.avatar">
			</image>
			<view class="user">
				<text class="user-name">
					{{user.nickName}}
				</text>
				<text class="user-id">
					{{user.userId}}
				</text>
			</view>
		</view>
		<view class="itemlist">
			<view class=" items" @click="infoPage(1)">
				个人信息
			</view>
			<view class="items" @click="infoPage(2)">
				订单列表
			</view>
			<view class=" items" @click="infoPage(3)">
				修改密码
			</view>
			<view class=" items" @click="infoPage(4)">
				意见反馈
			</view>
			<view class=" items" @click="outUser()">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import {
		login,
		userInfo
	} from "../../api/meApi.js"
	export default {
		onLoad() {
			let data = {
				"username": "614537575",
				"password": "123456"
			}
			login(data).then(res => {
				getApp().globalData.token = res.data.token
				// console.log(getApp().globalData.token)
				userInfo().then(res => {
					this.user = res.data.user
					// console.log(this.user)
				})
			})
		},
		onShow() {
			let data = {
				"username": "614537575",
				"password": "123456"
			}
			login(data).then(res => {
				getApp().globalData.token = res.data.token
				// console.log(getApp().globalData.token)
				userInfo().then(res => {
					this.user = res.data.user
					// console.log(this.user)
				})
			})
		},
		data() {
			return {
				url: getApp().globalData.URL,
				user: {},
				page: [{
						url: './userInfo/userInfo'
					},
					{
						url: './orderList/orderList'
					},
					{
						url: './rePassword/rePassword'
					},
					{
						url: './feddback/feddback'
					}
				]
			
			}
		},
		methods: {
			infoPage(data) {
				uni.navigateTo({
					url:this.page[data-1].url
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		background-color: #63cdda;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.itemlist {
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.items {
			width: 200px;
			text-align: center;
			height: 40px;
			background-color: #fff;
			// margin-top: 30px;
			line-height: 40px;
			border: 1px solid #F2F2F2;
			box-shadow: 1px 1px 3px 3px #F2F2F2;
			color: #546de5;
			font-weight: 500;
			border-radius: 10px;
		}
	}

	.user-data {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		margin-top: 30px;

		image {
			width: 80px;
			height: 80px;
			border-radius: 12px;
			background-color: #007AFF;
		}

		.user {
			margin-left: 15px;
			display: flex;
			flex-direction: column;

			.user-name {
				font-size: 25px;
				font-weight: 800;
			}
		}
	}
</style>
