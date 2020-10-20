Page({
	onLoad() {
		// toast
		// wx.$toast('提示')
		// wx.$loading()

		wx.showActionSheet({
			itemList: ['A', 'B', 'C'],
			success (res) {
			  console.log(res.tapIndex)
			},
			fail (res) {
			  console.log(res.errMsg)
			}
		})
	}
})