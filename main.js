// javaScript of toggle menu

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// to-top button

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// meassage send

const check = document.getElementById("check");
const btn = document.getElementById("btn");
const meassage = document.getElementById("meassage");

btn.addEventListener("click", () => {
  btn.classList.add("hide");
  check.classList.add("rotateIn");
  meassage.classList.add("fadeIn");
});
