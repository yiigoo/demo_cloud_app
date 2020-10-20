const $toast = (opt) => {
	let _opt = opt || {title: '请输入标题'}
	if( typeof(opt)  === 'string' ){
		_opt = {
			title: opt
		}
	}
	wx.showToast({
		title: '请输入标题',
		icon: 'none',
		duration: 2000,
		..._opt
	})
}
const $loading = (opt) => {
	let _opt = opt || {title: '加载中'}
	if( typeof(opt)  === 'string' ){
		_opt = {
			title: opt
		}
	}
	wx.showLoading({
		..._opt
	})
}
module.exports = {
	$toast, $loading
}
