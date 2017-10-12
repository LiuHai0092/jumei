//下拉列表：展开，收起
//function $(id) {
//	return document.getElementById(id)
//};
//window.onload = function() {
//	$("classification_ul").onclick = function(e) {
//		var src = e ? e.target : event.srcElement;
//		if(src.tagName == "H5") {
//			var next = src.nextElementSibling || src.nextSibling;
//			next.style.display = (next.style.display == "block") ? "none" : "block";
//		}
//	}
//};

//下拉列表：展开，收起
$("h5").click(function() {
	$("ul>li>ul").slideUp();
	$(this).next().slideDown();
})

//搜索框的下拉效果
//$(function() {
var his_cookie = $.cookie("HIS_COOKIE");
if(his_cookie != null) {
	var his = his_cookie.split(",");
	var html = '';
	for(var i = 0; i < his.length; i++) {
		html += '<a href=""><span>' + his[i] + '</span></a>';
		//$(".his_search").append('<a href=""><span>'+his[i]+'</span></a>');
	}
	//					alert(html);
	$(".his_search_small").html(html);
}
$(".search_box_small input").focus(function() {
	$(".his_search_small").show();
});
$(".search_box_small input").blur(function() {
	$(".his_search_small").hide();
});
//点击搜索
$(".search_box_small button").click(function() {
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
	//})
});