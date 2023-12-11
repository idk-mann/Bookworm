document.addEventListener('DOMContentLoaded', function () {
    // Set custom date
    const customDate = new Date('2023-12-06'); // Format: 'YYYY-MM-DD'

    // Format the custom date
    const formattedDate = customDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update the Last Updated date in the footer
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = 'Last Updated: ' + formattedDate;
    }
});

// Slideshow in homepage
let slideIndex = 0;
const slideshowTimeout = 2000; // Timeout in milliseconds
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide after reaching the last one
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, slideshowTimeout); // Change image every 2 seconds
}


