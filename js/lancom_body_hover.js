//添加鼠标的移入，移出事件

$("#lancom_body>.row dl").hover(function() {
	$(this).css({
		"border": "1px solid #e0dacc",
		"box-shadow": "5px 5px 3px 0px #e0dacc"
	})
}, function() {
	$(this).css({
		"border": "",
		"box-shadow": ""
	})

});