$(window).scroll(function() {
  var top = document.querySelector(".top");
  top.classList.toggle("sticky", window.scrollY > 0);
});