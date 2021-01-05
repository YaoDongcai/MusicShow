export class DB {
	// 用单例模式来返回这个DB
	constructor(arg) {
		// 初始化这个db 的数据
		this.db = wx.cloud.database()
	}
	
	
}