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

function updateNavigation() {
  const scrollY = window.scrollY;

  // At the very top of the page, remove the hash
  if (scrollY < 50) {
    history.replaceState(null, "", window.location.pathname);
    
    if (navProgress) {
      navProgress.style.width = "0px";
    }

    return;
  }

  // Find the section currently closest to the top of the viewport
  let currentSection = null;
  let closestDistance = Infinity;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top - 120);

    if (rect.top <= 160 && distance < closestDistance) {
      closestDistance = distance;
      currentSection = section;
    }
  });

  if (!currentSection) return;

  const sectionId = currentSection.id;

  const activeLink = document.querySelector(
    `.nav a[href="#${sectionId}"]`,
  );

  if (!activeLink) return;

  // Move the progress line
  if (navProgress) {
    const navRect = activeLink.parentElement.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const progressWidth =
      linkRect.left -
      navRect.left +
      linkRect.width / 2;

    navProgress.style.width = `${progressWidth}px`;
  }

  // Update URL only if it has actually changed
  if (window.location.hash !== `#${sectionId}`) {
    history.replaceState(null, "", `#${sectionId}`);
  }
}

// Update while scrolling
window.addEventListener("scroll", updateNavigation, { passive: true });

// Update once when page loads
updateNavigation();