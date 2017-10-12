//倒计时显示器
var time_wrap = document.getElementById("times_wrap");
var time_d = document.getElementById("times_d");
var time_h = document.getElementById("times_h");
var time_m = document.getElementById("times_m");
var time_s = document.getElementById("times_s");

var time_end = new Date("2017/10/15 08:00:00"); // 设定结束时间
time_end = time_end.getTime();

function show_time() {
	var time_now = new Date(); // 获取当前时间
	time_now = time_now.getTime();
	var time_distance = time_end - time_now; // 结束时间减去当前时间
	var int_day, int_hour, int_minute, int_second;
	if(time_distance >= 0) {
		// 天时分秒换算
		int_day = Math.floor(time_distance / 86400000)
		time_distance -= int_day * 86400000;
		int_hour = Math.floor(time_distance / 3600000)
		time_distance -= int_hour * 3600000;
		int_minute = Math.floor(time_distance / 60000)
		time_distance -= int_minute * 60000;
		int_second = Math.floor(time_distance / 1000)

		// 时分秒为单数时、前面加零站位
		if(int_hour < 10)
			int_hour = "0" + int_hour;
		if(int_minute < 10)
			int_minute = "0" + int_minute;
		if(int_second < 10)
			int_second = "0" + int_second;

		// 显示时间
		time_d.innerHTML = int_day;
		time_h.innerHTML = int_hour;
		time_m.innerHTML = int_minute;
		time_s.innerHTML = int_second;

		setTimeout("show_time()", 1000);
	} else {
		time_d.innerHTML = time_d.innerHTML;
		time_h.innerHTML = time_h.innerHTML;
		time_m.innerHTML = time_m.innerHTML;
		time_s.innerHTML = time_s.innerHTML;

		clearTimeout(timerID)
	}
}
setTimeout("show_time()", 1000);
//关闭倒计时的方法
$(".time_close").click(function() {
	$(".daojishi").hide();
});