document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const backToTopButton = document.getElementById("backToTop");

  let lastScrollTop = 0;

  // Handle scroll to show/hide navbar
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px"; // Hide the navbar
    } else {
      navbar.style.top = "0"; // Show the navbar
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // Show "Back to Top" button
    if (scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Toggle mobile menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Scroll to top
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
