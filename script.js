// Smooth active link effect
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Simple form submission alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Hafiz Traders! We'll get back to you soon.");
  e.target.reset();
});
// ==== Scroll Animation ====
const sectionsToShow = document.querySelectorAll('.section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sectionsToShow.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');

  const options = {
    threshold: 0.2 // 20% visible before triggering
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, options);

  sections.forEach(section => {
    revealOnScroll.observe(section);
  });
});
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
