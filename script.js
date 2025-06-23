const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

document.addEventListener("DOMContentLoaded", () => {
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    previousButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 3000);
});

const updateImage = () => {
    mainImage.src = images[currentIndex];
};

updateImage();
