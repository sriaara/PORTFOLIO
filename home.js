document.addEventListener("DOMContentLoaded", function () {
    // Trigger fade-in and slide-in animations
    const fadeElements = document.querySelectorAll(".fade-in");
    const slideElements = document.querySelectorAll(".slide-in");

    fadeElements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    });

    slideElements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateX(0)";
    });

    // Button bounce effect
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});