const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    hamburger.textContent = hamburger.textContent === "≡" ? "×" : "≡";
});

document.addEventListener("click", (e) => {
    const isClickInsideMenu = navMenu.contains(e.targer);

    if (!isClickInsideMenu) {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        hamburger.textContent = "≡";
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    
    targets.forEach(target => observer.observe(target));
});

document.querySelectorAll(".slideshow").forEach((slideshow, index) => {
    const imageLists = [
        ["images/IMG_2995.jpeg", "images/IMG_6478.jpeg", "images/IMG_1218.jpeg", "images/IMG_1221.jpeg", "images/IMG_0152.jpeg"],
        ["images/IMG_6089.jpeg", "images/IMG_6501.jpeg", "images/IMG_9821.jpeg", "images/IMG_7784.jpeg", "images/IMG_0175.jpeg"]
    ];

    const images = imageLists[index];
    let currentIndex = 0;

    const img = slideshow.querySelector("img");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        img.src = images[currentIndex];

        img.classList.remove("slide-in-left", "slide-in-right");
        void img.offsetWidth;
        img.classList.add("slide-in-left");
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        img.src = images[currentIndex];

        img.classList.remove("slide-in-left", "slide-in-right");
        void img.offsetWidth;
        img.classList.add("slide-in-right");
    });
});

