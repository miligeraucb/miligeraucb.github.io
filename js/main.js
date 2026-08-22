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
      if (!entry.isIntersecting) return;

      const sectionId = entry.target.id;
      const activeLink = document.querySelector(
        `.nav a[href="#${sectionId}"]`,
      );

      if (!activeLink || !navProgress) return;

      // Move the progress line
      const navRect = activeLink.parentElement.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const progressWidth =
        linkRect.left -
        navRect.left +
        linkRect.width / 2;

      navProgress.style.width = `${progressWidth}px`;

      // Update URL as the section changes
      history.replaceState(null, "", `#${sectionId}`);
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  },
);

sections.forEach((section) => navObserver.observe(section));


// Remove the hash when returning to the very top

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY < 50 && window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      
      if (navProgress) {
        navProgress.style.width = "0px";
      }
    }
  },
  { passive: true },
);