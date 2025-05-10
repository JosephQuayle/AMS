let i = 0;
let images = [];
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

function changeImg() {
  let slide = document.getElementById("slide");

  fadeOut(slide, function () {
    // Set the next image
    slide.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    fadeIn(slide);
  });

  setTimeout("changeImg()", time);
}

function fadeIn(slide) {
  slide.style.opacity = 0;
  let opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    slide.style.opacity = opacity;
    opacity += 0.05; // Adjust the increment to control fade speed
  }, 20); // Adjust the interval to control fade smoothness
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

// window.onload = changeImg;

window.onload = function () {
  for (let j = 0; j < images.length; j++) {
    let img = new Image();
    img.src = images[j];
  }

  let slide = document.getElementById("slide");
  slide.style.display = "block"; // Show the image container

  changeImg(); // Start the slideshow
};
