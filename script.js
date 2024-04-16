let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let firstItem = items[0];
    document.querySelector('.slide').appendChild(firstItem);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let lastItem = items[items.length - 1];
    let slide = document.querySelector('.slide');
    slide.insertBefore(lastItem, slide.firstChild);
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".food-slider .slide");
    const pagination = document.querySelector(".food-slider .pagination");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        for (let i = index; i < index + 3; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }
        updatePagination(index);
    }

    function updatePagination(index) {
        pagination.innerHTML = "";
        for (let i = 0; i < slides.length; i += 3) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === index) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => showSlide(i));
            pagination.appendChild(dot);
        }
    }

    showSlide(currentSlide);
});


function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var reason = document.getElementById("reason").value;
    var message = document.getElementById("message").value;

    if (name.trim() == "" || email.trim() == "" || phone.trim() == "" || reason.trim() == "" || message.trim() == "") {
        alert("All fields are required");
        return false;
    }

    // Email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Phone number validation regex (simple check for numeric value and length)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number. Please enter a 10-digit number");
        return false;
    }

    return true;
}