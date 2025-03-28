document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in effect
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
        el.style.opacity = "1";
    });

    // Apply slide-in effect
    const slideElements = document.querySelectorAll(".slide-in");
    slideElements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
    });

    // Button Hover Animation
    const button = document.querySelector(".back-btn");
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
    });
});
