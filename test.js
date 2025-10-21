// Smooth section slide-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 } // Adjust to trigger earlier/later
);

sections.forEach(section => observer.observe(section));

// Scroll animations for sections and hero text
const revealElements = document.querySelectorAll("section, .slide-element");

const observer2 = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => observer2.observe(el));


// ✅ New: Hero text + image slide animation (added safely below)
const slideElements = document.querySelectorAll(".slide-left, .slide-right");

const heroObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
    });
  },
  { threshold: 0.3 }
);

slideElements.forEach(el => heroObserver.observe(el));
