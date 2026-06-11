// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';
    }
});


// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
    "Computer Engineering Student",
    "Web Developer",
    "Python Developer",
    "Android Developer"
];

const typingText =
    document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// PROJECT FILTERS
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projects.forEach(project => {

            const category =
                project.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";
            }
        });
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .experience-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );
                }
            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);
});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topButton =
    document.createElement("button");

topButton.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove(
            "show-top"
        );
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});