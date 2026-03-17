const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close menu when any link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
}); 