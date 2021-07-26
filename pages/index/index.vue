<template>
	<view class="page">
		
		<view :style="{marginTop:top+'px'}">
			
			<view class="title">
				<view class="title-text">
					选择你的身份
				</view>
			</view>
			<view class="role">
				<view class="role-btn" @click="gotoPage('student')">
					<span class="role-btn-txt">学生</span>
				</view>
				<view class="role-btn" @click="gotoPage('teacher')">
					<span class="role-btn-txt">教师</span>
				</view>
				<button class="role-btn" @click="login" >
					<span class="role-btn-txt">微信授权一键登录</span>
				</button>
				<button class="role-btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
					<span class="role-btn-txt">手机号登录</span>
				</button>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				//自动适配
				navBarHeight: 84,
				menuBotton: 4,
				top: 0
			}
		},
		onLoad() {
		},
		onShow() {
			//#ifdef MP-WEIXIN
			this.navBarHeight = getApp().globalData.navBarHeight;
			this.menuBotton = getApp().globalData.menuBotton;
			//#endif
			this.top = (this.navBarHeight - this.menuBotton) - 94;
		},
		methods: {
			getPhoneNumber(res) {
				console.log('手机号登录', res)
			},
			login() {
				uni.getUserProfile({
					desc:'登录',
					success:(res)=>{
						debugger
						console.log(res);
					},
					fail:(res)=>{
						debugger
						console.log(res)
					}
				});
			},
			onGotUserInfo(res) {
				console.log('res' + res)
			},
			gotoPage(e) {
				switch (e) {
					case 'student':
						uni.switchTab({
							url: '/pages/tabBar/index'
						});
						break;
					case 'teacher':
						uni.showToast({
							title: '暂未开放,敬请期待',
							icon: 'none'
						})
						break;
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.page {
		.header {
			position: relative;
		}

		.logo {
			margin-left: 132upx;
		}

		.title {
			position: relative;
			margin-top: 40upx;
			text-align: center;
			&-text {
				height: 46upx;
				font-size: 32upx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 600;
				color: rgba(34, 34, 34, 1);
				line-height: 46upx;
			}
		}
		.role {
			position: relative;
			margin-top: 106upx;

			&-btn {
				margin: 40upx 44upx 0;
				height: 96upx;
				background: rgba(245, 245, 245, 1);
				border-radius: 48upx;
				text-align: center;

				&-txt {
					display: inline-block;
					height: 50upx;
					font-size: 36upx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 500;
					color: rgba(34, 34, 34, 1);
					line-height: 50upx;
					margin-top: 24upx;
				}
			}
		}
	}
</style>
