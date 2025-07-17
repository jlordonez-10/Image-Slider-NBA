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
    updateImage();

    nextButton.addEventListener("click", nextImage);

    previousButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
    });

    setInterval(() => {
        nextImage();
    }, 3000);
});

const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
};

const updateImage = () => {
    mainImage.src = images[currentIndex];
};
