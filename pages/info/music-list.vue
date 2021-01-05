<template>
	<view class="info">
		<!-- 这个是一个tabbar 显示栏 -->
		<view class="tabs">
			<view class="tabs-tab active">
				我上传的
			</view>
			<view class="tabs-tab">
				我下载的
			</view>
		</view>
		
		<!-- 这个是一个列表 可滚动的列表信息即可 -->
		<view class="user-ul">
			<view class="user-ul-li" v-for="(item, index) in newsList" @click="handlleClick(item)">
				<view class="user-ul-li-left">
					<view class="type">
						{{ item.type }}
					</view>
					<image :src="item.src">
						
					</image>
				</view>
				<view class="user-ul-li-center">
						<view class="name">
							{{ item.name }}
						</view>
						<view class="score">
							{{ item.score }}
						</view>
						<view class="author">
							{{item.author}}
						</view>
				</view>
				<view class="user-ul-li-center2">
					<span style="display: inline-block;font-size: 30rpx;">订单号:2022012123</span>
					<span>♪ {{ item.hot }}</span>
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss">
	@import '@/components/mixin.scss';
	.user-ul {
		display: flex;
		flex-direction: column;
		&-li {
			display: flex;
			padding-top: 15rpx;
			padding-bottom: 15rpx;
			height: 150rpx;
			position: relative;
			&::after {
				@include hairline();
				border-bottom-width: 1px;
				border-bottom-color: #D8D8D8;
				top: 0upx;
				left: 0px;
			}
			&-left {
				flex: 1;
				.type {
					color: rgb(242, 9, 9);
					line-height: 50rpx;
					height: 50rpx;
				}
				image {
					width: 100rpx;
					height: 100rpx;
				}
			}
			&-center {
				flex: 3;
				.name {
					line-height: 50rpx;
				}
				.score {
					line-height: 50rpx;
					color: #f20909;
				}
				.author {
					line-height: 50rpx;
					color: #999999;
				}
			}
			&-center2 {
				
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: rgb(242, 9, 9);
			}
			&-right {
				flex: 2;
				height: 150rpx;
				justify-content: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				.info {
					color: rgb(153, 153, 153);
				}
				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
	.info {
		padding: 30upx;
		.tabs {
			background-color: #f3f3f3;
			height: 100rpx;
			padding-left: 50rpx;
			padding-right: 50rpx;
			display: flex;
		
			.tabs-tab {
				height: 100rpx;
				color: #333333;
				display: flex;
				flex: 1;
				align-items: center;
				justify-content: center;
		
				&.active {
					color: #f20909;
				}
			}
		}
		.info-btn {
			margin-top: 60upx;
			width: 200upx;
		}
		.info-textarea {
			width: 100%;
			height: 300upx;
			margin-top: 60upx;
		}
		.info-input {
			margin-bottom: 30upx;
		}
	}
</style>
<script>
	export default {
		name: 'MusicList', // 我的曲谱页面
		data() {
			return {
				newsList: [{
					id: 1,
					src: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5acf13aa31ab9.jpg',
					type: '弹唱',
					name: '七里香(周杰伦)',
					author: '姚东才',
					score: '5.0',
					hot: '60',
					sales: '1220'
				},{
					id: 2,
					src: 'https://img.zhichiwangluo.com/zcimgdir/thumb/t_15242168045ad9b3e4c0e0b.jpg',
					type: '弹唱',
					name: '稻香(周杰伦)',
					author: '李朝阳',
					score: '5.0',
					hot: '90',
					sales: '3220'
				},{
					id: 3,
					src: 'https://img.zhichiwangluo.com/zcimgdir/album/file_5ae1c677cee8f.jpg',
					type: '弹唱',
					name: '夜的第七章(周杰伦)',
					author: '王臣',
					score: '5.0',
					hot: '90',
					sales: '5220'
				}],
				user: {
					name: '',
					remark: '' // 备注
				}
			}
		}
	}
</script>

