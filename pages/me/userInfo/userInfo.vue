<template>
	<view>
		<view class="container">
			<form @submit="putUser">
				<view class="item">
					<text>头像：</text>
					<image :src="imgUrl" @click="putAvatar" mode=""></image>
				</view>
				<view class="item">
					<text>昵称：</text>
					<input type="text" name="nickName"  :value="user.nickName"/>
				</view>
				<view class="item">
					<text>性别：</text>
					<input type="text" name="sex" :value="user.sex "/>
				</view>
				<view class="item">
					<text>电话：</text>
					<input type="text" name="phonenumber" :value="user.phonenumber"/>
				</view>
				<view class="item">
					<text>身份证：</text>
					<input type="text" name="idCard" :value="user.idCard"/>
				</view>
				<button form-type="submit" class="save" > 
					保存
				</button>
			</form>
		</view>
		
	</view>
</template>

<script>
	import { userInfo,putUser } from "../../../api/meApi.js"
	export default {
		onLoad() {
			userInfo().then(res=>{
				this.user = res.data.user
				console.log(this.user)
			})
		},
		data() {
			return {
				url:getApp().globalData.URL,
				user:{
					
				},
				imgUrl:getApp().globalData.URL
			}
		},
		methods: {
			putUser(d){
				let data = {
				    "email":"lixl@163.com",
				    "idCard": "210882199807251656",
				    "nickName": "大卫王",
				    "phonenumber": "15898125461",
				    "sex": "0"
				}
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(d.detail.value))
				console.log(d.detail.value)
				putUser(d.detail.value).then(res=>console.log(res))
				
			},
			putAvatar(){
				uni.chooseFile({
				  count: 10,
				  type: 'image',
				  success (res) {
				    // tempFilePath可以作为img标签的src属性显示图片
				    this.imgUrl = res.tempFiles
					console.log(this.imgUrl)
					
				  }
				})
			}
		}
	}
</script>

<style lang="scss">
	// 边框
	$bo:1px solid #F2F2F2;
	image{
		width: 50px;
		height: 50px;
	}
	.container{
		font-size: 23px;
		border:$bo;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		border:2px solid #76715b;
		margin: 0 10px;
		.item{
			margin-top: 10px;
			padding: 10px;
			height: 60px;
			width: 350px;
			// border:2px solid #76715b;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input{
				// padding-left: 10px;
				border:2px solid #c4c7c1;
				width: 200px;
				height: 40px;
				border-radius: 20px;
				text-align: center;
			}
		}
		.save{
			width: 100px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			margin-top: 50px;
			margin-bottom: 20px;
			border: 1px solid #b2b4b6;
			border-radius: 50px;
			box-shadow: 1px 1px 3px 3px #F2F2F2;
		}
	}
</style>
