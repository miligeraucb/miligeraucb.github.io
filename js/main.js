document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.section > *, .project-card, .academic-card, .writing-card, .credential-card').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
