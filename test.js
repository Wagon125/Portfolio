// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth"
        });
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
  
  // ===== Contact Form Submission (with EmailJS) =====
  const contactForm = document.getElementById("contact-form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // --- EmailJS Integration ---
      emailjs.sendForm("service_jheqmui", "template_ewvj928", contactForm)
        .then(() => {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again later.");
        });
    });
  }
  
  // ===== Initialize EmailJS =====
  // Replace with your actual PUBLIC_KEY from EmailJS dashboard
  (function() {
    emailjs.init("YOUR_PUBLIC_KEY");
  })();
  
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
  