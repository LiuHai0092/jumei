//倒计时器
var count = 0;

function retime() {
	count++;
	var min = 59 - parseInt(count / 60);
	var second = 59 - parseInt(count % 60);
	var str = "剩余时间:" + min + "分" + second + "秒";
	$(".time_box").text(str)

}
setInterval("retime()", 1000);
//获得时间
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var time = year + "年" + month + "月" + day + "日";
var time1 = year + "年" + month + "月" + (day + 1) + "日";
$(".dayTime").text(time);
$(".dayTime_one").text(time1);