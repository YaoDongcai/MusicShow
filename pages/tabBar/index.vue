<template>
	<view class="index">
		<!-- 这个部分是一个搜索框子 -->
		<view class="index-search">
			<view class="index-search-right">
				<image src="../../static/images/search-icon.png" />
				<!-- @input="KeyInput" -->
				<input @confirm="search" v-model="searchkey" type="search" class="index-search-right-input" placeholder="请搜索歌曲或者作者" />
			</view>
		</view>
		<!--  这个部分是轮播图 -->
		<uni-swiper-dot :info="info" :current="current" field="content" mode="nav">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<image :src="item.images" class="swiper-item"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<!-- 这个是一个radio的勾选框子 -->
		<view class="index-block">
			<image src="https://img.zhichiwangluo.com/zcimgdir/album/file_5c2d7fed19955.png"></image>热门曲目教程
		</view>

		<!-- 这个是一个tabbar 显示栏 -->
		<view class="tabs" >
			<view @click="handleTab(item)" v-for="item in tabs" :key="item.id" :class="['tabs-tab', item.active ? 'active': '']">
				{{ item.name }}
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
					♪ {{ item.hot }}
				</view>
				<view class="user-ul-li-right">
					<image src="https://imgnew.zhichikeji.com/zcimgdir/album/file_5f72056d648d4.png">
						
					</image>
					<view class="info">
						销量{{ item.sales }}份
					</view>
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
		name: 'TabBarIndex',
		components: {
			uniSwiperDot
		},
		data() {
			return {
				tabs: [{
					name: '吉他',
					type: '1',
					active: true, // 默认
					id: 1
				}, {
					name: '架子鼓',
					type: '2',
					active: false, // 默认
					id: 2
				}, {
					name: '尤克里里',
					type: '3',
					active: false, // 默认
					id: 3
				}],
				searchKey: '',
				info: [{
					content: '探趣未来曲目，跟我学习吧',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/album/file_5f717cd0773b2.jpg'
				}, {
					content: 'uCharts荣获uni-app插件大赛一等奖',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/thumb/t_16012731295f717d2951c51.jpg'
				}, {
					content: '测试华东demo',
					images: 'https://imgnew.zhichikeji.com/zcimgdir/album/file_5f717cdfd57d2.jpg'
				}],
				current: 0,
				
				newsList: [],
			}
		},
		onShow() {
			this.getNewsList('1')
		},
		methods: {
			getNewsList(type) {
				const self = this
				uni.showLoading({
					title: '加载中...'
				})
				this.DB.collection('news').where({
					musicType: type
				}).get().then((res) => {
					uni.hideLoading()
					this.newsList = res.data
				} )
			},
			change(e) {
				this.current = e.detail.current;
			},
			handleTab(item) {
				this.tabs.map(tab => {
					if(item.id == tab.id) {
						tab.active = true
					} else {
						tab.active = false
					}
				})
				
				// 同时需要去查询对应的数据
				this.getNewsList(item.type)
			},
			handlleClick(item){
				uni.navigateTo({
					url: '../info/index'
				})
			},
			search() {

			}
		}
	}
</script>

<style lang="scss">
	@import '@/components/mixin.scss';
	.user-ul {
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		padding-right: 30upx;
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
				flex: 2;
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
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
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
	.swiper-box {
		width: calc(100% - 30upx);
		padding-left: 15upx;
		height: 400upx;
	}

	.swiper-item {
		width: 100%;
		height: 400upx;
		border-radius: 15rpx;
	}

	.index {
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

		&-block {
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			padding-left: 30rpx;

			image {
				width: 26rpx;
				height: 26rpx;
				margin-right: 16rpx;
			}
		}

		&-search {
			height: 100upx;
			display: flex;
			align-items: center;
			padding-left: 15upx;
			padding-right: 15upx;
			position: relative;

			&-right {
				flex: 1;
				display: flex;
				align-items: center;
				background: rgba(246, 246, 246, 1);
				border-radius: 8upx;
				display: flex;
				padding-left: 20upx;

				image {
					width: 32upx;
					height: 32upx;
					display: inline-block;
					vertical-align: middle;
				}

				input {
					padding-left: 16rpx;
					height: 72upx;
					flex: 1;
					background: rgba(246, 246, 246, 1);
					border-radius: 8upx;
					display: inline-block;
				}

			}

			&-txt {
				width: 120rpx;
				margin-left: 30upx;
				font-size: 30upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #1B71ED;
			}
		}
	}
</style>