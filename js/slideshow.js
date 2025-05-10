let i = 0;
let images = [];
let preloadedImages = []; // Store preloaded images
let time = 5000;

images[0] = "./img/title2.png";
images[1] = "./img/title3.png";
images[2] = "./img/title4.png";
images[3] = "./img/title5.png";
images[4] = "./img/title6.png";
images[5] = "./img/our_work1.png";
images[6] = "./img/our_work3.png";
images[7] = "./img/our_work8.png";
images[8] = "./img/our_work9.png";

// Preload images before starting the slideshow
function preloadImages(callback) {
  let loadedCount = 0;

  for (let j = 0; j < images.length; j++) {
    preloadedImages[j] = new Image();
    preloadedImages[j].src = images[j];

    preloadedImages[j].onload = function () {
      loadedCount++;
      if (loadedCount === images.length) {
        callback(); // Start slideshow once all images are loaded
      }
    };
  }
}

function changeImg() {
  let slide = document.getElementById("slide");

  fadeOut(slide, function () {
    slide.src = preloadedImages[i].src;

    i = (i + 1) % preloadedImages.length; // Loop back to the first image

    fadeIn(slide);
  });

  setTimeout(changeImg, time);
}

function fadeIn(slide) {
  slide.style.opacity = 0;
  let opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    slide.style.opacity = opacity;
    opacity += 0.05;
  }, 20);
}

function fadeOut(slide, callback) {
  let opacity = 1;
  let timer = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(timer);
      if (callback) callback();
    }
    slide.style.opacity = opacity;
    opacity -= 0.05;
  }, 20);
}

window.onload = function () {
  let slide = document.getElementById("slide");
  slide.style.display = "block"; // Show the image container

  preloadImages(changeImg); // Ensure all images are loaded before starting slideshow
};
