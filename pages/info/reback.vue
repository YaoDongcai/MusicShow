<template>
	<view class="info">
		<input class="info-input" v-model="user.name" placeholder="请输入昵称" />
		<textarea class="info-textarea" v-model="user.remark" placeholder="请输入备注"></textarea>
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
			
		}
	}
</style>
<script>
	export default {
		name: 'Reback', // 我的反馈页面
		data() {
			return {
				user: {
					name: '',
					remark: '' // 备注
				}
			}
		}
	}
</script>


