var monuments = document.querySelectorAll(".monuments");
var foodImages = document.querySelectorAll(".food");
var festivalImages = document.querySelectorAll(".festival");
var imageIndexMonuments = 0;
var imageIndexFood = 0;
var imageIndexFestival = 0;

function changeMonuments() {
    var imageSourcesMonuments = [
        "lotus.jpeg",
        "tajmahal.jpeg",
        "monument4.jpeg",
        "monument5.jpeg",
        "india gate.jpeg",
    ];

    for (var i = 0; i < monuments.length; i++) {
        monuments[i].src = imageSourcesMonuments[imageIndexMonuments];
    }

    imageIndexMonuments = (imageIndexMonuments + 1) % imageSourcesMonuments.length;
}

function changeFood() {
    var imageSourcesFood = [
        "food.jpeg",
        "food1.jpeg",
        "food2.jpeg",
        "food3.jpeg",
        "food4.jpeg",
    ];

    for (var i = 0; i < foodImages.length; i++) {
        foodImages[i].src = imageSourcesFood[imageIndexFood];
    }

    imageIndexFood = (imageIndexFood + 1) % imageSourcesFood.length;
}

function changeFestival() {
    var imageSourcesFestival = [
        "diwali.jpeg",
        "festival2.jpeg",
        "festival3.jpeg",
        "festival5.jpeg",
        "festival4.jpeg",
    ];

    for (var i = 0; i < festivalImages.length; i++) {
        festivalImages[i].src = imageSourcesFestival[imageIndexFestival];
    }

    imageIndexFestival = (imageIndexFestival + 1) % imageSourcesFestival.length;
}

// Use separate setInterval for each class with different timings
setInterval(changeMonuments, 2000); // Change images for "monuments" class every 2 seconds
setInterval(changeFood, 1500);      // Change images for "food" class every 1.5 seconds
setInterval(changeFestival, 2000);  // Change images for "festival" class every 3 seconds
