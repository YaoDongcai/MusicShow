<template>
	<view class="my">
		<view class="my-header">
			<image src="../../static/images/my-header-bg.jpg"></image>
			<view class="my-header-content">
				<view class="left">
					<image src="https://imgnew.zhichikeji.com/zcimgdir/thumb/t_16012760675f7188a382549.png"></image>
				</view>
				<view class="right">
					dcyao
				</view>
			</view>
		</view>
		<view class="my-block">
			<view class="left">
				<image src="https://img.weiye.me/zcimgdir/album/file_59bf9896144fb.png"></image>
			</view>
			<view class="right">
				<span>1298</span>音棒
			</view>
		</view>
		<view class="my-ul">
			<view class="my-ul-li" v-for="(item, index) in list" @click="handleClick(item)">
				<view class="my-ul-li-left">
					<image src="/static/images/cwj.png">
					</image>
				</view>
				<view class="my-ul-li-right">
					{{ item.title }}
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss">
	@import '@/components/mixin.scss';

	.my {
		&-ul {
			padding-left: 30upx;
			padding-right: 30upx;
			background-color: white;

			&-li {
				height: 108upx;
				display: flex;
				align-items: center;
				justify-content: center;

				&-left {
					width: 56upx;
					height: 56upx;
					padding-right: 24upx;

					image {
						width: 56upx;
						height: 56upx;
					}
				}

				&-right {
					flex: 1;
					position: relative;
					font-size: 34rpx;

					&::after {
						@include hairline();
						border-bottom-width: 1px;
						border-bottom-color: #D8D8D8;
						top: 30upx;
						left: 0px;
					}

					&::before {
						content: " ";
						display: inline-block;
						width: 6px;
						height: 6px;
						position: absolute;
						top: 50%;
						right: 2px;
						border-width: 2px 2px 0 0;
						border-color: #B0B0B0;
						border-style: solid;
						transform: translateY(-50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
					}
				}
			}
		}

		.my-block {
			height: 120rpx;
			background-color: rgb(243, 243, 243);
			display: flex;
			align-items: center;
			padding-left: 30rpx;

			.left {
				margin-top: 10rpx;

				image {
					height: 40rpx;
					width: 40rpx;
				}
			}

			.right {
				margin-top: 10rpx;
				margin-left: 10rpx;

				span {
					display: inline-block;
					color: rgb(242, 9, 9);
					margin-right: 10rpx;
				}
			}
		}

		.my-header {
			width: 100vw;
			height: 260rpx;
			position: relative;

			image {
				width: 100vw;
				height: 260rpx;
			}

			.my-header-content {
				position: absolute;
				top: 0rpx;
				left: 60rpx;
				width: 200rpx;
				margin-top: 80rpx;
				display: flex;

				.left {

					image {
						height: 100rpx;
						width: 100rpx;
						border-radius: 50%;
					}
				}

				.right {
					line-height: 100rpx;
					margin-left: 20rpx;
					color: white;
					font-size: 36rpx;
				}
			}
		}
	}
</style>
<script>
	export default {
		name: 'TabBarMy',
		data() {
			return {
				list: [{
					title: '我的曲谱',
					id: 1,
					url: '/pages/info/music-list'
				}, {
					title: '反馈吐槽',
					id: 2,
					url: '/pages/info/reback'
				}, {
					id: 3,
					title: '关于我们'
				}, {
					id: 4,
					title: '发布曲谱教程',
					url:'/pages/info/publish'
				}, {
					id: 5,
					title: '发布求谱订单',
					url:'/pages/info/music-buy'
				}]
			}
		},
		methods: {
			handleClick(item) {
				item.url && uni.navigateTo({
					url: item.url
				})
			}
		}
	}
</script>
