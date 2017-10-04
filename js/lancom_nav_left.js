//下拉列表：展开，收起
function $(id) {
	return document.getElementById(id)
}
$("classification_ul").onclick = function(e) {
	var src = e ? e.target : event.srcElement;
	if(src.tagName == "H5") {
		var next = src.nextElementSibling || src.nextSibling;
		next.style.display = (next.style.display == "block") ? "none" : "block";
	}
}