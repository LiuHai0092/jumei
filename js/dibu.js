//商品详情收起，查看特效
$(".btn ").click(function() {
	if($(".cjwt ").is(":visible ")) {
		$(".cjwt ").slideUp(1999);
		$(".btn ").text("点击查看 ");
		$(".first_div ").slideUp(1000);
	} else {
		$(".cjwt ").slideDown(1999);
		$(".first_div ").slideDown(1000);
		$(".btn ").text("点击收起 ");

	}
})
$(".ecope_carousel ").mouseover(function() {
	$(".next,.prev ").show();

});
$(".ecope_carousel ").mouseout(function() {
	$(".next,.prev ").hide();

});
//下一张图片

$(".next ").click(function() {
	var size = $(".lunbo ul li ").size(); //获得所有图片数量
	$(".lunbo ul li:lt(6) ").appendTo(".no ");
})

//上一张图片
$(".prev ").click(function() {
	$(".lunbo ul li:gt(5) ").prependTo(".no ");
})
$(".deal_sku input,i ").click(function() {
	$(".xinghao ").toggle(1000);
});
$(".head_left .first_zp ").mouseover(function() {
	$(".first_zp .zpbz ").show();
})
$(".head_left .first_zp ").mouseout(function() {
	$(".first_zp .zpbz ").hide();
})
$(".head_right .first_wd ").mouseover(function() {
	$(".first_wd .wdjm ").show();
})
$(".head_right .first_wd ").mouseout(function() {
	$(".first_wd .wdjm ").hide();
})
$(".head_right .first_gd ").mouseover(function() {
	$(".first_gd .gd ").show();
})
$(".head_right .first_gd ").mouseout(function() {
	$(".first_gd .gd ").hide();
});