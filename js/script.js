
$(window).on("load", function () {
	$(".preloader-section").fadeOut(200);
});


// Cursor
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


const backtotoplink = document.getElementById('gotop')
const onScroll = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    backtotoplink.classList.add("active");
  } else {
    backtotoplink.classList.remove("active")
  }
}
window.addEventListener('scroll', onScroll)


// ScrollReveal().reveal('.animation');
ScrollReveal().reveal('.animation', { delay: 1000 });