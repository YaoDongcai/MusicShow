<template>
	<view class="info">
		<input class="info-input" v-model="music.title" placeholder="请输入歌(曲)名" />
		<input class="info-input" v-model="music.person" placeholder="请输入艺人(组合)名" />
		<input class="info-input" v-model="music.cost" placeholder="请输入悬赏金额(不低于50音棒)" />
		<!--  点击上传曲谱 就是图片了-->
		
		<!--  点击上传视频 -->
		
		<button type="primary" class="info-btn">提交</button>
	</view>
</template>
<style lang="scss">
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
		name: 'BuyMusic', // 求购曲谱
		data() {
			return {
				music: {
					title:'',
					person: '',
					cost:''
				}
			}
		}
	}
</script>

