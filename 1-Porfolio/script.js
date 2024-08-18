// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Elements to animate
  const heroSection = document.querySelector(".hero");
  const introText = document.querySelector(".intro");
  const illustration = document.querySelector(".illustration img");
  const socialLinks = document.querySelectorAll(".social-links a");

  // Function to check if element is in viewport
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

  // Animate elements on scroll
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

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll);

  // Initial animation check
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
        itemTop < windowHeight - 100 && itemTop + itemHeight > 0; // Adjust the value to control when the animation starts

      if (isVisible) {
        item.classList.add("float-up");
      } else {
        item.classList.remove("float-up"); // Remove the class if the item is not in view
      }
    });
  }

  // Initial check
  animateOnScroll();

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll);
});

// Project section CSS
// Project section JS
document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the item is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When item is in view
        entry.target.classList.add("fade-in");
      } else {
        // When item is out of view
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  projectItems.forEach((item) => {
    observer.observe(item);
  });
});

// caraousal Js
// Carousel JavaScript
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

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
