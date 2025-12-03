const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");
    const closeBtn = document.querySelector(".close-btn");

    menuBtn.onclick = () => {
        navList.classList.add("active");
        menuBtn.classList.add("hide");  
    };

    closeBtn.onclick = () => {
        navList.classList.remove("active");
        menuBtn.classList.remove("hide"); 
    };


let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");

/* Create Dots According to Number of Slides */
slides.forEach((_, i) => {
    let dot = document.createElement("span");
    dot.setAttribute("onclick", `goToSlide(${i})`);
    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[n].classList.add("active");
    dots[n].classList.add("active-dot");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function goToSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

/* Auto Slide */
setInterval(() => {
    nextSlide();
}, 3000); // 3 seconds