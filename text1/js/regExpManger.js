var regExpManger = {
	//验证用户名的正则表达式
	userNameReg:/^[0-9a-z_-]+$/,
	wordReg:/[a-zA-Z]+/,
	NameReg:/^[\u4e00-\u9fa5]+$/,
	numReg:/[0-9]+/,
	emaiReg:/^[0-9a-z_]{3,22}@[0-9a-z]{2,8}\.[a-z]{2,3}$/,
	mobileReg:/^[1]\d{10}$/
}
/*/^(?:([0-9]+)|([a-zA-Z]+)|([^0-9a-zA-Z]+))+$/*/