//右侧导航弹出框的移动效果
$(".nav_right>ul li").hover(function() {
	$(".nav_right>ul .hit_w").hide().stop().css({
		"margin-left": "-150px"
	});
	$()
	//显示操作
	$(this).find(".hit_w").fadeIn().animate({
		"margin-left": "-100px"
	}, 200);
}, function() {
	//隐藏操作
	$(this).find(".hit_w").animate({
		"margin-left": "-150px"
	}).fadeOut();
});