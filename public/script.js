const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", () => {
        image.classList.toggle("active");
    });
});