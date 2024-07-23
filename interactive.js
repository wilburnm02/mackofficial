// Get all elements with the class "animate-on-scroll"

const animateElements = document.querySelectorAll('.animate-on-scroll');


// Create an Intersection Observer instance

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // Animate the element when it comes into view

            entry.target.classList.add('animate');

        } else {

            // Remove the animation when it goes out of view

            entry.target.classList.remove('animate');

        }

    });

}, {

    root: null,

    threshold: 1.0, // Trigger when the element is fully visible

});


// Show the pop-up window and overlay when the page loads

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("popup").style.display = "block";

    document.getElementById("overlay").style.display = "block";

});


// Add an event listener to the close button

document.getElementById("close-popup").addEventListener("click", function() {

    document.getElementById("popup").style.display = "none";

    document.getElementById("overlay").style.display = "none";

});


// Observe each animate-on-scroll element

animateElements.forEach((element) => {

    observer.observe(element);

});