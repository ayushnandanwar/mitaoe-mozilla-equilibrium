const nav = document.getElementById('nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").classList.add('header-toggle');
  } else {
    document.getElementById("nav").classList.remove('header-toggle');
  }
}