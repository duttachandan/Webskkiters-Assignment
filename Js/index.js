let currentSlide = 0;

function navigate(direction) {
    const carouselItems = document.querySelectorAll("#myCarousel .carousel-item");
    const totalSlides = carouselItems.length;

    // Remove 'active' from current slide
    carouselItems[currentSlide].classList.remove("active");

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Add 'active' to the new slide
    carouselItems[currentSlide].classList.add("active");
}