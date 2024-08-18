document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const introText = document.querySelector(".intro");
  const illustration = document.querySelector(".illustration img");
  const socialLinks = document.querySelectorAll(".social-links a");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    if (isInViewport(heroSection)) {
      introText.classList.add("fade-in-left");
      illustration.classList.add("fade-in-right");
    }

    socialLinks.forEach((link, index) => {
      if (isInViewport(link)) {
        link.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);

  animateOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  function animateOnScroll() {
    const windowHeight = window.innerHeight;

    skillItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemHeight = item.getBoundingClientRect().height;
      const isVisible =
        itemTop < windowHeight - 100 && itemTop + itemHeight > 0;

      if (isVisible) {
        item.classList.add("float-up");
      } else {
        item.classList.remove("float-up");
      }
    });
  }

  animateOnScroll();

  window.addEventListener("scroll", animateOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  projectItems.forEach((item) => {
    observer.observe(item);
  });
});

let index = 0;

function showNextSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  index = (index + 1) % totalSlides;
  const offset = -index * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); 