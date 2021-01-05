<template>
	<view class="info">
		<input class="info-input" v-model="music.title" placeholder="请输入歌(曲)名" />
		<input class="info-input" v-model="music.songAuthor" placeholder="请输入曲作者" />
		<input class="info-input" v-model="music.writeAuthor" placeholder="请输入词作者" />
		<input class="info-input" v-model="music.performer" placeholder="请输入演绎者" />
		<input class="info-input" v-model="music.chord" placeholder="请输入调性(和弦调性)" />
		<input class="info-input" v-model="music.pages" placeholder="请输入页数" />
		<input class="info-input" v-model="music.cost" placeholder="请输入售价" />
		<!--  点击上传曲谱 就是图片了-->
		<view class="hx-video">
			<view class="hx-video-title">
				请上传曲谱图片
			</view>
			<view class="hx-video-conent">
				<view class="hx-video-content-item" :style="{
					'paddingRight':((index + 1) %4 == 0) ? '0rpx': '10rpx'
				}"
				 v-for="(image,index) in imageList" :key="index">
					<image class="hx-video-content-item-image" :src="image" />
					<image :data-index="index" @tap='deleteImage' class="hx-video-content-item-del" src="../../static/images/file-del.png">
		
					</image>
				</view>
				<view class="hx-video-content-add" @tap="chooseImage">
					<image src="../../static/images/file-add.png" />
				</view>
			</view>
		</view>
		<!--  点击上传视频 -->
		
		<button type="primary" class="info-btn">提交</button>
	</view>
</template>
<style lang="scss">
	.hx-video {
		// padding-left: 20upx;
		// padding-right: 20upx;
		margin-top: 20rpx;
		background: white;
	
		&-title {
			font-size: 16px;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			line-height: 45px;
		}
	
		&-content {
			display: flex;
			position: relative;
			flex-wrap: wrap;
	
			&-item {
				width: 25%;
				display: inline-block;
				position: relative;
	
				&-image {
					width: 100%;
					height: 165upx;
				}
	
				padding-right: 10upx;
				box-sizing: border-box;
	
				&-del {
					display: inline-block;
					position: absolute;
					top: 0px;
					right: 10upx;
					z-index: 12;
					width: 44upx !important;
					height: 44upx !important;
				}
			}
	
			&-add {
				width: 25%;
				display: inline-block;
	
				image {
					width: 100%;
					height: 165upx;
				}
			}
		}
	}
	.info {
		padding: 30upx;
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
		name: 'PublishMusic', // 发布曲谱
		data() {
			return {
				imageList: [],
				
				music: {
					title:'',
					songAuthor: '',
					writeAuthor: '',
					performer: '',
					chord: '',
					pages: '',
					cost: ''
				}
			}
		},
		methods: {
			chooseImage: async function() {
				var _this = this;
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					// #ifdef MP-WEIXIN
					sizeType: ['compressed', 'original'],
					// #endif
					count: this.imageLength - this.imageList.length,
					success: (res) => {
						//console.log(JSON.stringify(res.tempFilePaths))
						this.imageList = this.imageList.concat(res.tempFilePaths);
						let tempFilePaths = res.tempFilePaths;
			// 			console.log('uni.chooseImage', res)
			// 			for (var i = 0; i < tempFilePaths.length; i++) {
			// 				uni.uploadFile({
			// 					url: BASEURL + "/att/upload",
			// 					filePath: tempFilePaths[i],
			// 					name: 'file',
			// 					formData: {
			// 						'type': _this.type
			// 						// fileName: 
			// 					},
			// 					method: 'POST',
			// 					success: function(uploadFileRes) {
			// 						var data = JSON.parse(uploadFileRes.data);
			// 						_this.atts.push(data.data.attId);
			
			// 						//if (_this.atts.length == tempFilePaths.length) {
			
			// 						_this.$emit("sendAtts", _this.atts);
			// 						//}
			// 					}
			// 				});
			// 			}
			
					}
				})
			},
			
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			//删除图片
			deleteImage: function(e) {
				var index = e.target.dataset.index;
				var that = this;
				var images = that.imageList;
				images.splice(index, 1);
				that.imageList = images;
			
				//附件材料Id
				var arrImg = that.atts;
				arrImg.splice(index, 1);
				that.atts = arrImg;
			
				that.$emit("sendAtts", that.atts);
			
			}
			
		}
	}
</script>

