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

var btn = document.getElementsByClassName("btn1");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
}

btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
}

btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
}

btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
}
