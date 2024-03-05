//opens the current projects card
let current = document.getElementById("current");
current.addEventListener("click", function () {
  console.log("clicked");
  document.getElementById("clicked").style.display = "flex";
});

//alows user to scroll through the projects
var currentDivIndex = 0;
var currentProjects = document.getElementsByClassName("content-current");

function showDiv(index) {
  for (var i = 0; i < currentProjects.length; i++) {
    if (i === index) {
      currentProjects[i].style.display = "flex";
    } else {
      currentProjects[i].style.display = "none";
    }
  }
}

function prevProj() {
  currentDivIndex =
    (currentDivIndex - 1 + currentProjects.length) % currentProjects.length;
  showDiv(currentDivIndex);
}

function nextProj() {
  currentDivIndex = (currentDivIndex + 1) % currentProjects.length;
  showDiv(currentDivIndex);
}

showDiv(currentDivIndex); // Initially show the first div

let currentImgIndex = 0;
let currentImages = [
  "./img/current1_image1.jpg",
  "./img/current1_image2.jpg",
  "./img/current1_image3.jpg",
  "./img/current1_image4.jpg",
  "./img/current1_image5.jpg",
  "./img/current1_image6.jpg",
  "./img/current1_image7.jpg",
];

function showImage(index) {
  let imgElement = document.getElementById("current-img");
  imgElement.src = currentImages[index];
  currentImgIndex = index;
}

let leftArrowCathedral = document.getElementById("left-arrow-cathedral");
leftArrowCathedral.addEventListener("click", function () {
  console.log("clicked left arrow");
  currentImgIndex =
    (currentImgIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentImgIndex);
});

let rightArrowCathedral = document.getElementById("right-arrow-cathedral");
rightArrowCathedral.addEventListener("click", function () {
  console.log("clicked right arrow");
  currentImgIndex = (currentImgIndex + 1) % currentImages.length;
  showImage(currentImgIndex);
});

//scrolls through images within endcliffe crescent project
let currentImgIndexEndcliffe = 0;
let currentImagesEndcliffe = [
  "./img/current2_image1.jpg",
  "./img/current2_image2.jpg",
  "./img/current2_image3.jpg",
  "./img/current2_image4.jpg",
  "./img/current2_image5.jpg",
  "./img/current2_image6.jpg",
];

function showImageEndcliffe(index) {
  let imgElementEndcliffe = document.getElementById("current-img-endcliffe");
  imgElementEndcliffe.src = currentImagesEndcliffe[index];
  currentImgIndexEndcliffe = index;
}

let leftArrowEndcliffe = document.getElementById("left-arrow-endcliffe");
leftArrowEndcliffe.addEventListener("click", function () {
  console.log("clicked left arrow endcliffe");
  currentImgIndexEndcliffe =
    (currentImgIndexEndcliffe - 1 + currentImagesEndcliffe.length) %
    currentImagesEndcliffe.length;
  showImageEndcliffe(currentImgIndexEndcliffe);
});

let rightArrowEndcliffe = document.getElementById("right-arrow-endcliffe");
rightArrowEndcliffe.addEventListener("click", function () {
  console.log("clicked right arrow endcliffe");
  currentImgIndexEndcliffe =
    (currentImgIndexEndcliffe + 1) % currentImagesEndcliffe.length;
  showImageEndcliffe(currentImgIndexEndcliffe);
});

//scrolls through images within our offices project
let currentImgIndexOurs = 0;
let currentImagesOurs = [
  "./img/current3_image1.jpg",
  "./img/current3_image2.jpg",
  "./img/current3_image3.jpg",
  "./img/current3_image4.jpg",
  "./img/current3_image5.jpg",
  "./img/current3_image6.jpg",
];

function showImageOurs(index) {
  let imgElementEndcliffe = document.getElementById("current-img-our");
  imgElementEndcliffe.src = currentImagesOurs[index];
  currentImgIndexOurs = index;
}

let leftArrowOurs = document.getElementById("left-arrow-our");
leftArrowOurs.addEventListener("click", function () {
  console.log("clicked left arrow endcliffe");
  currentImgIndexOurs =
    (currentImgIndexOurs - 1 + currentImagesOurs.length) %
    currentImagesOurs.length;
  showImageOurs(currentImgIndexOurs);
});

let rightArrowOurs = document.getElementById("right-arrow-our");
rightArrowOurs.addEventListener("click", function () {
  console.log("clicked right arrow endcliffe");
  currentImgIndexOurs = (currentImgIndexOurs + 1) % currentImagesOurs.length;
  showImageOurs(currentImgIndexOurs);
});

function closeProj() {
  document.getElementById("clicked").style.display = "none";
}
