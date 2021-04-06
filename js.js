var tooltip = document.querySelectorAll(".list a img");

document.addEventListener("mousemove", fn, false);

function fn(e) {
	for (var i = tooltip.length; i--; ) {
		tooltip[i].style.left = e.pageX + "px";
		tooltip[i].style.top = e.pageY + "px";
	}
}
