// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // only smooth scroll for internal links starting with #
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });
  
  // ===== Scroll Reveal Animation =====
  const sections = document.querySelectorAll("section, footer");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  
  // ===== Contact Form Submission =====
  const contactForm = document.querySelector("form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Thank you! Your message has been sent (demo only).");
      contactForm.reset();
    });
  }
  
  // ===== Back to Top Button =====
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);
  
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 14px";
  backToTop.style.fontSize = "20px";
  backToTop.style.background = "#7c5cff";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "50%";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "999";
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

 // Initialize EmailJS
(function() {
  emailjs.init("IOIKirpMrCPhCInr6"); // Example: "C0xg7FQn4abc12345"
})();

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_jheqmui", "template_ewvj928", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      }, (error) => {
        alert("❌ Failed to send message: " + error.text);
      });
  });
}
