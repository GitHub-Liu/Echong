var regExpManger = {
	//验证用户名的正则表达式
	uNameReg:/^([\u4e00-\u9fa5]|[0-9a-z_-]){4,20}$/,
	wordReg:/[a-zA-Z]+/,
	numReg:/\d+/,
	emaiReg:/^[0-9a-z_]{3,22}@[0-9a-z]{2,8}\.[a-z]{2,3}$/,
	phoneReg:/^[1]\d{10}$/,
	yzm01Reg:/^[0-9A-Z]{4}$/,
	yzm02Reg:/^[0-9]{6}$/
};
