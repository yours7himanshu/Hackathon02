var monuments = document.querySelectorAll(".monuments");
var foodImages = document.querySelectorAll(".food");
var festivalImages = document.querySelectorAll(".festival");
var imageIndexMonuments = 0;
var imageIndexFood = 0;
var imageIndexFestival = 0;

function changeMonuments() {
    var imageSourcesMonuments = [
        "images/lotus.jpeg",
        "images/tajmahal.jpeg",
        "images/monument4.jpeg",
        "images/monument5.jpeg",
        "images/india gate.jpeg",
    ];

    for (var i = 0; i < monuments.length; i++) {
        monuments[i].src = imageSourcesMonuments[imageIndexMonuments];
    }

    imageIndexMonuments = (imageIndexMonuments + 1) % imageSourcesMonuments.length;
}

function changeFood() {
    var imageSourcesFood = [
        "images/food.jpeg",
      
        "images/food2.jpeg",
        "images/food3.jpeg",
        "images/food4.jpeg",
        
        "images/food7.jpeg",
        "images/food8.jpeg",
        "images/food9.jpeg",
        "images/food10.jpeg",
    ];

    for (var i = 0; i < foodImages.length; i++) {
        foodImages[i].src = imageSourcesFood[imageIndexFood];
    }

    imageIndexFood = (imageIndexFood + 1) % imageSourcesFood.length;
}

function changeFestival() {
    var imageSourcesFestival = [
        "images/diwali.jpeg",
        "images/festival2.jpeg",
        "images/festival3.jpeg",
        "images/festival5.jpeg",
        "images/festival4.jpeg",
    ];

    for (var i = 0; i < festivalImages.length; i++) {
        festivalImages[i].src = imageSourcesFestival[imageIndexFestival];
    }

    imageIndexFestival = (imageIndexFestival + 1) % imageSourcesFestival.length;
}

// Use separate setInterval for each class with different timings
setInterval(changeMonuments, 2000); // Change images for "monuments" class every 2 seconds
setInterval(changeFood, 1000);      // Change images for "food" class every 1.5 seconds
setInterval(changeFestival, 2000);  // Change images for "festival" class every 3 seconds
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
