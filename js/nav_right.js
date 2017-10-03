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
//搜索框的下拉效果
$(function() {
	var his_cookie = $.cookie("HIS_COOKIE");
	if(his_cookie != null) {
		var his = his_cookie.split(",");
		var html = '';
		for(var i = 0; i < his.length; i++) {
			html += '<a href=""><span>' + his[i] + '</span></a>';
			//$(".his_search").append('<a href=""><span>'+his[i]+'</span></a>');
		}
		//					alert(html);
		$(".his_search").html(html);
	}
	$(".search_box input").focus(function() {
		$(".his_search").show();
	});
	$(".search_box input").blur(function() {
		$(".his_search").hide();
	});
	//点击搜索
	$(".search_box button").click(function() {
		var searchText = $(this).prev().val().trim();
		//追加cookie值
		if(his_cookie != null) {
			his_cookie = searchText + "," + his_cookie;
		} else {
			his_cookie = searchText;
		}
		if(searchText.length > 1) {
			//						alert(his_cookie);
			$.cookie("HIS_COOKIE", his_cookie);
		}
	})
});