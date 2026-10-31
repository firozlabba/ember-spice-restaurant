/* =========================================================
   EMBER & SPICE — PREMIUM ANIMATION SYSTEM
   SAFE VERSION
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetID = this.getAttribute("href");

        const target = document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}, { passive: true });


/* ================= SCROLL PROGRESS ================= */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);


function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (totalHeight <= 0) {

        progressBar.style.width = "0%";

        return;

    }

    const percentage =
        (scrollTop / totalHeight) * 100;

    progressBar.style.width =
        `${percentage}%`;

}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    `
    .section-heading,
    .intro-grid,
    .dish-card,
    .story-content,
    .gallery-item,
    .testimonial,
    .reservation-content,
    .contact-grid,
    .hero-content,
    .hero-image
    `
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        element.classList.add(
            "reveal-hidden"
        );

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "reveal-visible"
        );

    });

}


/* ================= DISH STAGGER ================= */

document
    .querySelectorAll(".dish-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


/* ================= GALLERY STAGGER ================= */

document
    .querySelectorAll(".gallery-item")
    .forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 100}ms`;

    });


/* ================= IMAGE REVEAL ================= */

const images =
    document.querySelectorAll("img");


if ("IntersectionObserver" in window) {

    const imageObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "image-loaded"
                    );

                    imageObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.1
            }
        );


    images.forEach(image => {

        image.classList.add(
            "image-reveal"
        );

        imageObserver.observe(image);

    });

}


/* ================= HERO MOUSE PARALLAX ================= */

const heroImage =
    document.querySelector(".hero-image");


if (
    heroImage &&
    window.innerWidth > 900
) {

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            targetX =
                (event.clientX -
                    window.innerWidth / 2) / 70;

            targetY =
                (event.clientY -
                    window.innerHeight / 2) / 70;

        }
    );


    function animateHero() {

        currentX +=
            (targetX - currentX) * 0.05;

        currentY +=
            (targetY - currentY) * 0.05;


        heroImage.style.transform =
            `translate3d(
                ${currentX}px,
                ${currentY}px,
                0
            )`;


        requestAnimationFrame(
            animateHero
        );

    }


    animateHero();

}


/* ================= 3D DISH CARD ================= */

if (window.innerWidth > 900) {

    document
        .querySelectorAll(".dish-card")
        .forEach(card => {


            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -3;


                    const rotateY =
                        ((x - centerX) /
                            centerX) * 3;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-6px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

}


/* ================= BUTTON MAGNETIC EFFECT ================= */

if (window.innerWidth > 900) {

    document
        .querySelectorAll(".btn")
        .forEach(button => {


            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `
                        translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )
                        `;


                    button.style.setProperty(
                        "--mouse-x",
                        `${event.clientX - rect.left}px`
                    );


                    button.style.setProperty(
                        "--mouse-y",
                        `${event.clientY - rect.top}px`
                    );

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });

}


/* ================= BUTTON CLICK ================= */

document
    .querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "button-clicked"
                );


                setTimeout(() => {

                    button.classList.remove(
                        "button-clicked"
                    );

                }, 220);

            }
        );

    });


/* ================= CURSOR SYSTEM ================= */

if (window.innerWidth > 900) {

    /* ---------- Glow ---------- */

    const cursorGlow =
        document.createElement("div");

    cursorGlow.className =
        "cursor-glow";

    /* Start completely hidden */
    cursorGlow.style.opacity = "0";
    cursorGlow.style.visibility = "hidden";

    document.body.appendChild(
        cursorGlow
    );


    /* ---------- Dot ---------- */

    const cursorDot =
        document.createElement("div");

    cursorDot.className =
        "cursor-dot";

    document.body.appendChild(
        cursorDot
    );


    /* ---------- Mouse position ---------- */

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    let dotX = 0;
    let dotY = 0;


    /* ---------- Cursor state ---------- */

    let cursorInside = false;


    /* ---------- Mouse enters page ---------- */

    document.addEventListener(
        "mouseenter",
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            glowX = mouseX;
            glowY = mouseY;

            dotX = mouseX;
            dotY = mouseY;

            cursorInside = true;

            /* Smoothly show glow */

            cursorGlow.style.visibility =
                "visible";

            requestAnimationFrame(() => {

                cursorGlow.style.transition =
                    "opacity 0.6s ease";

                cursorGlow.style.opacity =
                    "1";

            });

        }
    );


    /* ---------- Mouse movement ---------- */

    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;
            mouseY = event.clientY;

        }
    );


    /* ---------- Mouse leaves page ---------- */

    document.addEventListener(
        "mouseleave",
        () => {

            cursorInside = false;

            cursorGlow.style.opacity =
                "0";

            setTimeout(() => {

                if (!cursorInside) {

                    cursorGlow.style.visibility =
                        "hidden";

                }

            }, 600);

        }
    );


    /* ---------- Animation ---------- */

    function animateCursor() {

        if (cursorInside) {

            /* Smooth glow */

            glowX +=
                (mouseX - glowX) * 0.18;

            glowY +=
                (mouseY - glowY) * 0.18;


            /* Faster pointer dot */

            dotX +=
                (mouseX - dotX) * 0.45;

            dotY +=
                (mouseY - dotY) * 0.45;


            cursorGlow.style.transform =
                `
                translate3d(
                    ${glowX}px,
                    ${glowY}px,
                    0
                )
                translate(-50%, -50%)
                `;


            cursorDot.style.transform =
                `
                translate3d(
                    ${dotX}px,
                    ${dotY}px,
                    0
                )
                translate(-50%, -50%)
                `;

        }


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /* ---------- Cursor hover ---------- */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, .dish-card, .gallery-item"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                /*
                 * Keep cursor size unchanged.
                 * No expansion on hover.
                 */

                cursorGlow.style.width =
                    "160px";

                cursorGlow.style.height =
                    "160px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                /*
                 * Return to same size.
                 */

                cursorGlow.style.width =
                    "160px";

                cursorGlow.style.height =
                    "160px";

            }
        );

    });

}


/* ================= IMAGE HOVER ================= */

document
    .querySelectorAll(
        ".gallery-item, .dish-card"
    )
    .forEach(card => {


        card.addEventListener(
            "mouseenter",
            () => {

                const image =
                    card.querySelector("img");

                if (image) {

                    image.style.transform =
                        "scale(1.08)";

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                const image =
                    card.querySelector("img");

                if (image) {

                    image.style.transform =
                        "";

                }

            }
        );

    });


/* ================= NUMBER COUNTER ================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


if ("IntersectionObserver" in window) {

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.count
                        );


                    if (!target) return;


                    const duration =
                        1600;


                    const startTime =
                        performance.now();


                    function updateCounter(time) {


                        const progress =
                            Math.min(
                                (
                                    time -
                                    startTime
                                ) / duration,
                                1
                            );


                        const value =
                            Math.floor(
                                progress *
                                target
                            );


                        counter.textContent =
                            value;


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target;

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                    counterObserver.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: 0.6
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {


    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 220;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* ================= FLOATING PARTICLES ================= */

const particleContainer =
    document.createElement("div");

particleContainer.className =
    "particle-container";

document.body.appendChild(
    particleContainer
);


if (window.innerWidth > 768) {

    for (let i = 0; i < 18; i++) {


        const particle =
            document.createElement("span");


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDelay =
            `${Math.random() * 8}s`;


        particle.style.animationDuration =
            `${6 + Math.random() * 8}s`;


        particleContainer.appendChild(
            particle
        );

    }

}


/* ================= SCROLL TO TOP ================= */

const topButton =
    document.createElement("button");


topButton.className =
    "scroll-top";


topButton.innerHTML =
    "↑";


topButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


document.body.appendChild(
    topButton
);


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            topButton.classList.add(
                "show"
            );

        } else {

            topButton.classList.remove(
                "show"
            );

        }

    },
    { passive: true }
);


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );


        updateScrollProgress();
        updateActiveNavigation();

    }
);


/* ================= YEAR ================= */

const yearElement =
    document.querySelector(
        ".footer-bottom p"
    );


if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Ember & Spice. All rights reserved.`;

}


/* ================= CONSOLE ================= */

console.log(
    "%c Ember & Spice ",
    "background:#111;color:#d6a75c;font-size:18px;padding:8px 14px;"
);

console.log(
    "%c Crafted with fire. Served with passion. ",
    "color:#d6a75c;font-size:13px;"
);