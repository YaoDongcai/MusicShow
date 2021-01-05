<template>
	<view class="info">
		<!--  这个部分是轮播图 -->
		<uni-swiper-dot v-if="isBuy" :info="info" :current="current" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<image :src="item.images" class="swiper-item"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<view v-if="!isBuy" class="info-img">
			<image src="https://imgnew.zhichikeji.com/zcimgdir/album/file_5f865acf40112.png"></image>
		</view>
		<!--  购买信息 -->
		<view class="info-cart">
			<view class="info-cart-item">
				销量:987份
			</view>
			<view class="info-cart-item">
				165人评价
			</view>
			<view class="info-cart-item red-color" v-if="!isBuy" @click="handleBuy">
				购买
			</view>
		</view>
		<view class="info-black">

		</view>
		<!-- 教学视频 -->
		<view class="info-video">
			<video controls enable-danmu danmu-btn id="myVideo" src="http://vhotakamai.video.gtimg.com/szg_98154224_50001_8e911ebf957f4bad92d407ffbca31f75.f622.mp4?vkey=6D6B73FD4CE8054A33106A20DDFEBC586246E4C495C3253EA26F6AA85A4B9721FFE9CBB6FE0FAA94751612647002E25C6B4DE9880181D5E6906CE90A4398ECB133EFD5140E8426415D2BB38E0E1983F4F08379C1569F994C903749674908F814C907729838CBE15463CDCEE76FD1A9CE">

			</video>
		</view>
		<!--  购买信息 -->
		<view class="info-cart">
			<view class="info-cart-item">
				销量:1987份
			</view>
			<view class="info-cart-item">
				1615人评价
			</view>
			<view class="info-cart-item red-color" v-if="!isBuy">
				购买
				<!-- <view class="info-cart-item-btn">
					
				</view> -->
			</view>
		</view>
		<view class="info-black">

		</view>
		<!-- 个人中心 -->
		<view class="info-person">
			<view class="info-person-left">
				<image src="https://img.zhichiwangluo.com/zcimgdir/thumb/t_15242168045ad9b3e4c0e0b.jpg">

				</image>
			</view>
			<view class="info-person-right">
				<view class="info-person-right-item">
					<span>姚东才</span>
					<span class="red-span">吉他</span>
					<span class="red-span">架子鼓</span>
				</view>
				<view class="info-person-right-item">
					<span>中央学院学校</span>
					<span>站内排名第1名</span>
				</view>
			</view>
		</view>
		<!-- 作品介绍 -->
		<view class="info-black">

		</view>
		<view class="info-intro">
			<view class="info-intro-header">
				作品推荐
			</view>
			<view class="info-intro-content">
				这首歌曲是大家很喜欢的歌曲
			</view>
		</view>
		<!-- 评价排序 -->
		<view class="info-black">

		</view>
		<view class="info-ul">
			<view class="info-ul-header">
				用户点评(270)
			</view>
			<view :key="index" class="info-ul-li" v-for="index in [1,2,3,4]">
				<view class="info-ul-li-left">
					<!-- 用户的图片 -->
					<image src="https://img.zhichiwangluo.com/zcimgdir/thumb/t_15242168045ad9b3e4c0e0b.jpg">

					</image>
				</view>
				<view class="info-ul-li-center">
					<p><span>用户张三</span>
						<span>5.0分</span>
					</p>
					<p>这个很好听哦 强烈推荐</p>
				</view>
				<view class="info-ul-li-right">
					一天前
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	var _self,
		page = 1,
		timer = null;
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				isBuy: false,
				info: [{
					content: '',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/album/file_5f865acf40112.png'
				}, {
					content: '',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/album/file_5f865acf40112.png'
				}, {
					content: '',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/album/file_5f865acf40112.png'
				}],
				current: 0
			}
		},
		onLoad() {
			// 获取数据
			
			const self = this
			// 开始获取数据
			
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			// 购买
			handleBuy() {
				const self = this
				uni.showModal({
					content: '当前购买会消耗您的音棒100枚',
					showCancel: true,
					buttonText: '确定',
					success: (res) => {
						if (res.confirm) {
							self.isBuy = true
						} else if (res.cancel) {

						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/components/mixin.scss';
	.swiper-box {
		image {
			width: 100%;
			height: 100%;
		}
	}
	.info {
		.info-ul {
			margin-top: 30upx;
			margin-bottom: 30upx;
			display: flex;
			flex-direction: column;

			&-header {
				font-size: 32upx;
				color: rgb(153, 153, 153);
				position: relative;
				padding-left: 30upx;
				padding-bottom: 30upx;

				&::after {
					@include hairline();
					border-bottom-width: 1px;
					border-bottom-color: #D8D8D8;
					top: 0upx;
					left: 0px;
				}
			}

			&-li {
				display: flex;
				margin-top: 18upx;
				position: relative;
				padding-bottom: 16upx;
				padding-left: 30upx;
				padding-right: 30upx;

				&::after {
					@include hairline();
					border-bottom-width: 1px;
					border-bottom-color: #D8D8D8;
					top: 0upx;
					left: 0px;
				}

				&-left {
					width: 80upx;
					height: 80upx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				&-center {
					flex: 1;
					padding-left: 30upx;
					font-size: 28upx;
					color: rgb(153, 153, 153);
				}

				&-right {
					width: 110upx;
					text-align: right;
					font-size: 28upx;
					color: rgb(153, 153, 153);
				}
			}
		}

		.info-black {
			height: 30upx;
			background-color: rgb(243, 243, 243);
		}

		.info-intro {
			padding-left: 30upx;
			padding-right: 30upx;
			margin-top: 30upx;
			margin-bottom: 30upx;

			.info-intro-header {
				font-size: 32upx;
				color: rgb(153, 153, 153);
			}

			.info-intro-content {
				margin-top: 15upx;
				color: rgb(51, 51, 51);
			}
		}

		.info-person {
			padding-left: 30upx;
			padding-right: 30upx;
			display: flex;
			margin-top: 30upx;
			margin-bottom: 30upx;

			&-left {
				width: 60upx;

				image {
					width: 60upx;
					border-radius: 50%;
					height: 60upx;
				}
			}

			&-right {
				flex: 1;
				padding-left: 30upx;
				display: flex;
				flex-direction: column;

				&-item {
					display: flex;

					.red-span {
						color: rgb(242, 9, 9) !important;
					}

					span {
						display: inline-block;
						margin-left: 15upx;
						color: rgb(153, 153, 153);
						font-size: 28upx;
					}
				}
			}
		}

		.info-video {
			padding-left: 30upx;
			padding-right: 30upx;
			margin-top: 30upx;
			margin-bottom: 30upx;
			width: calc(100vw-60upx);

			video {
				width: 100%;
			}
		}

		.info-cart {
			padding-left: 30upx;
			padding-right: 30upx;
			display: flex;
			margin-top: 30upx;
			margin-bottom: 30upx;

			.info-cart-item {
				flex: 1;
				font-size: 28upx;
				color: rgb(153, 153, 153);
				text-align: right;

				&.red-color {
					color: rgb(242, 9, 9);
				}

				.info-cart-item-btn {
					text-align: center;
					width: 100rpx;
					margin-left: 30upx;
					background-color: rgb(242, 9, 9);
					border-radius: 4px;
					color: white;
				}
			}
		}

		.info-img {
			padding-left: 30upx;
			padding-right: 30upx;
			width: calc(100vw-60upx);

			image {
				width: 100%;
			}
		}
	}
</style>
