let btn = document.getElementById("menuBtn");
let mobNav = document.getElementById("mobNav");
let mainNav = document.getElementById("mainNav");
let links = document.getElementById("links");
let subNav = document.getElementById("subNav");

// btn.addEventListener("click", openNav());

function openNav() {
  console.log("openNav");
  links.classList.toggle("none");
  if (links.classList.contains("none")) {
    // Navigation is closed
    btn.innerText = "≡";
    btn.style.fontSize = "5rem";
  } else {
    // Navigation is open
    btn.innerText = "X";
    btn.style.fontSize = "3.5rem";
  }
}
