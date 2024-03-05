//opens the past projects card
let past = document.getElementById("past");
past.addEventListener("click", function () {
  console.log("clicked");
  document.getElementById("clickedPast").style.display = "flex";
});

//alows user to scroll through the projects
var pastDivIndex = 0;
var pastProjects = document.getElementsByClassName("content-past");

function showPastDiv(index) {
  for (var i = 0; i < pastProjects.length; i++) {
    if (i === index) {
      pastProjects[i].style.display = "flex";
    } else {
      pastProjects[i].style.display = "none";
    }
  }
}

function prevProjPast() {
  pastDivIndex = (pastDivIndex - 1 + pastProjects.length) % pastProjects.length;
  showPastDiv(pastDivIndex);
}

function nextProjPast() {
  pastDivIndex = (pastDivIndex + 1) % pastProjects.length;
  showPastDiv(pastDivIndex);
}

showPastDiv(pastDivIndex); // Initially show the first div

//scrolls through images within forest project
let pastImgIndexForest = 0;
let pastImagesForest = [
  "./img/completed1_image1.jpg",
  "./img/completed1_image2.jpg",
  "./img/completed1_image3.jpg",
  "./img/completed1_image4.jpg",
  "./img/completed1_image5.jpg",
  "./img/completed1_image6.jpg",
];

function showImageForest(index) {
  let imgElementForest = document.getElementById("past-img-forest");
  imgElementForest.src = pastImagesForest[index];
  pastImgIndexForest = index;
}

let leftArrowForest = document.getElementById("left-arrow-forest");
leftArrowForest.addEventListener("click", function () {
  console.log("clicked left arrow forest");
  pastImgIndexForest =
    (pastImgIndexForest - 1 + pastImagesForest.length) %
    pastImagesForest.length;
  showImageForest(pastImgIndexForest);
});

let rightArrowForest = document.getElementById("right-arrow-forest");
rightArrowForest.addEventListener("click", function () {
  console.log("clicked right arrow forest");
  pastImgIndexForest = (pastImgIndexForest + 1) % pastImagesForest.length;
  showImageForest(pastImgIndexForest);
});

//scrolls through images within sheffcol project
let pastImgIndexSheffcol = 0;
let pastImagesSheffcol = [
  "./img/completed2_image1.jpg",
  "./img/completed2_image2.jpg",
  "./img/completed2_image3.jpg",
  "./img/completed2_image4.jpg",
  "./img/completed2_image5.jpg",
  "./img/completed2_image6.jpg",
];

function showImageSheffcol(index) {
  let imgElementSheffcol = document.getElementById("past-img-sheffcol");
  imgElementSheffcol.src = pastImagesSheffcol[index];
  pastImgIndexSheffcol = index;
}

let leftArrowSheffcol = document.getElementById("left-arrow-sheffcol");
leftArrowSheffcol.addEventListener("click", function () {
  console.log("clicked left arrow Sheffcol");
  pastImgIndexSheffcol =
    (pastImgIndexSheffcol - 1 + pastImagesSheffcol.length) %
    pastImagesSheffcol.length;
  showImageSheffcol(pastImgIndexSheffcol);
});

let rightArrowSheffcol = document.getElementById("right-arrow-sheffcol");
rightArrowSheffcol.addEventListener("click", function () {
  console.log("clicked right arrow sheffcol");
  pastImgIndexSheffcol = (pastImgIndexSheffcol + 1) % pastImagesSheffcol.length;
  showImageSheffcol(pastImgIndexSheffcol);
});

//scrolls through images within lyceum project
let pastImgIndexCrucible = 0;
let pastImagesCrucible = [
  "./img/completed4_image1.jpg",
  "./img/completed4_image2.jpg",
  "./img/completed4_image3.jpg",
];

function showImageCrucible(index) {
  let imgElementCrucible = document.getElementById("past-img-crucible");
  imgElementCrucible.src = pastImagesCrucible[index];
  pastImgIndexCrucible = index;
}

let leftArrowCrucible = document.getElementById("left-arrow-crucible");
leftArrowCrucible.addEventListener("click", function () {
  console.log("clicked left arrow Crucible");
  pastImgIndexCrucible =
    (pastImgIndexCrucible - 1 + pastImagesCrucible.length) %
    pastImagesCrucible.length;
  showImageCrucible(pastImgIndexCrucible);
});

let rightArrowCrucible = document.getElementById("right-arrow-crucible");
rightArrowCrucible.addEventListener("click", function () {
  console.log("clicked right arrow Crucible");
  pastImgIndexCrucible = (pastImgIndexCrucible + 1) % pastImagesCrucible.length;
  showImageCrucible(pastImgIndexCrucible);
});

//scrolls through images within RAF project
let pastImgIndexRaf = 0;
let pastImagesRaf = [
  "./img/completed5_image1.jpg",
  "./img/completed5_image2.jpg",
  "./img/completed5_image3.jpg",
];

function showImageRaf(index) {
  let imgElementRaf = document.getElementById("past-img-raf");
  imgElementRaf.src = pastImagesRaf[index];
  pastImgIndexRaf = index;
}

let leftArrowRaf = document.getElementById("left-arrow-raf");
leftArrowRaf.addEventListener("click", function () {
  console.log("clicked left arrow Raf");
  pastImgIndexRaf =
    (pastImgIndexRaf - 1 + pastImagesRaf.length) % pastImagesRaf.length;
  showImageRaf(pastImgIndexRaf);
});

let rightArrowRaf = document.getElementById("right-arrow-raf");
rightArrowRaf.addEventListener("click", function () {
  console.log("clicked right arrow Raf");
  pastImgIndexRaf = (pastImgIndexRaf + 1) % pastImagesRaf.length;
  showImageRaf(pastImgIndexRaf);
});

//scrolls through images within RAF project
let pastImgIndexHadfield = 0;
let pastImagesHadfield = [
  "./img/completed6_image1.jpg",
  "./img/completed6_image2.jpg",
  "./img/completed6_image3.jpg",
  "./img/completed6_image4.jpg",
  "./img/completed6_image5.jpg",
  "./img/completed6_image6.jpg",
];

function showImageHadfield(index) {
  let imgElementHadfield = document.getElementById("past-img-hadfield");
  imgElementHadfield.src = pastImagesHadfield[index];
  pastImgIndexHadfield = index;
}

let leftArrowHadfield = document.getElementById("left-arrow-hadfield");
leftArrowHadfield.addEventListener("click", function () {
  console.log("clicked left arrow Hadfield");
  pastImgIndexHadfield =
    (pastImgIndexHadfield - 1 + pastImagesHadfield.length) %
    pastImagesHadfield.length;
  showImageHadfield(pastImgIndexHadfield);
});

let rightArrowHadfield = document.getElementById("right-arrow-hadfield");
rightArrowHadfield.addEventListener("click", function () {
  console.log("clicked right arrow Hadfield");
  pastImgIndexHadfield = (pastImgIndexHadfield + 1) % pastImagesHadfield.length;
  showImageHadfield(pastImgIndexHadfield);
});

//scrolls through images within hicks project
let pastImgIndexHicks = 0;
let pastImagesHicks = [
  "./img/completed7_image1.jpg",
  "./img/completed7_image2.jpg",
  "./img/completed7_image3.jpg",
];

function showImageHicks(index) {
  let imgElementHicks = document.getElementById("past-img-hicks");
  imgElementHicks.src = pastImagesHicks[index];
  pastImgIndexHicks = index;
}

let leftArrowHicks = document.getElementById("left-arrow-hicks");
leftArrowHicks.addEventListener("click", function () {
  console.log("clicked left arrow Hicks");
  pastImgIndexHicks =
    (pastImgIndexHicks - 1 + pastImagesHicks.length) % pastImagesHicks.length;
  showImageHicks(pastImgIndexHicks);
});

let rightArrowHicks = document.getElementById("right-arrow-hicks");
rightArrowHicks.addEventListener("click", function () {
  console.log("clicked right arrow Hicks");
  pastImgIndexHicks = (pastImgIndexHicks + 1) % pastImagesHicks.length;
  showImageHicks(pastImgIndexHicks);
});

//scrolls through images within hicks project
let pastImgIndexXeros = 0;
let pastImagesXeros = [
  "./img/completed8_image1.jpg",
  "./img/completed8_image2.jpg",
  "./img/completed8_image3.jpg",
];

function showImageXeros(index) {
  let imgElementXeros = document.getElementById("past-img-xeros");
  imgElementXeros.src = pastImagesXeros[index];
  pastImgIndexXeros = index;
}

let leftArrowXeros = document.getElementById("left-arrow-xeros");
leftArrowXeros.addEventListener("click", function () {
  console.log("clicked left arrow Xeros");
  pastImgIndexXeros =
    (pastImgIndexXeros - 1 + pastImagesXeros.length) % pastImagesXeros.length;
  showImageXeros(pastImgIndexXeros);
});

let rightArrowXeros = document.getElementById("right-arrow-xeros");
rightArrowXeros.addEventListener("click", function () {
  console.log("clicked right arrow Xeros");
  pastImgIndexXeros = (pastImgIndexXeros + 1) % pastImagesXeros.length;
  showImageXeros(pastImgIndexXeros);
});

//closes past projects card
function closeProjPast() {
  document.getElementById("clickedPast").style.display = "none";
}
