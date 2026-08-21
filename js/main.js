document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(
    ".section > *, .project-card, .academic-card, .writing-card, .credential-card",
  )
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

// NAVIGATION PROGRESS LINE

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");
const navProgress = document.querySelector(".nav-progress");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeLink = document.querySelector(
          `.nav a[href="#${entry.target.id}"]`,
        );

        if (activeLink && navProgress) {
          const navRect = activeLink.parentElement.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();

          // Extend the line from the first nav item
          // to the center of the current section's nav item
          const progressWidth =
            linkRect.left -
            navRect.left +
            linkRect.width / 2;

          navProgress.style.width = `${progressWidth}px`;
        }
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  },
);

sections.forEach((section) => navObserver.observe(section));
