const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

    if (cursor) {
        cursor.style.transform =
            `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }

    if (cursorDot) {
        cursorDot.style.transform =
            `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }

});


/* VIDEO */

const video = document.querySelector(".hero-video");

if (video) {

    video.play().catch(() => {
        console.log("Autoplay requires user interaction.");
    });

}


/* REVEAL */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".process-card, .project, .engineering-content, .interior-content"
    )
    .forEach(el => observer.observe(el));


/* MOBILE MENU */

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

if (menu) {

    menu.addEventListener("click", () => {

        if (nav) {
            nav.classList.toggle("mobile-open");
        }

    });

}


/* IMAGE PARALLAX */

window.addEventListener("scroll", () => {

    const images = document.querySelectorAll(".vision-image img");

    images.forEach(image => {

        const rect = image.getBoundingClientRect();

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const progress =
                (window.innerHeight - rect.top) /
                (window.innerHeight + rect.height);

            image.style.transform =
                `scale(1.05) translateY(${progress * 20 - 10}px)`;

        }

    });

});