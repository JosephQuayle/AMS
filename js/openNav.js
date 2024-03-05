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

//close nav when user clicks a button
let aboutBtn = document.getElementById("mobAboutBtn");
let assocBtn = document.getElementById("mobAssocBtn");
let servicesBtn = document.getElementById("mobServicesBtn");
let projectsBtn = document.getElementById("mobProjectsBtn");
let newsBtn = document.getElementById("mobNewsBtn");
let docsBtn = document.getElementById("mobDocsBtn");
let contactBtn = document.getElementById("mobContactBtn");

aboutBtn.addEventListener("click", closeNav);
assocBtn.addEventListener("click", closeNav);
servicesBtn.addEventListener("click", closeNav);
projectsBtn.addEventListener("click", closeNav);
newsBtn.addEventListener("click", closeNav);
docsBtn.addEventListener("click", closeNav);
contactBtn.addEventListener("click", closeNav);

function closeNav() {
  links.classList.toggle("none");
  btn.innerText = "≡";
  btn.style.fontSize = "5rem";
}
