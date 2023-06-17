const navbar = document.querySelector("#nav-section");
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    navbar.className = "nav-sec"
  } else {
    navbar.className = "";
  }
}