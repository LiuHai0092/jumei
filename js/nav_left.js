//根据滚动条的高度，左侧导航栏的显示与隐藏
$(window).scroll(function() {
	var s = $(window).scrollTop();
	if(s > 500) {
		$(".nav_left").show();
	} else {
		$(".nav_left").hide();
	}

});