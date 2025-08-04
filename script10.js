// Form Submission Alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Thank you! Your message has been received.");
  this.reset(); // Clear form fields
});

// Smooth Scroll (for nav links)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    }
  });
});

// Dynamic Year in Footer (if you want it dynamic)
const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = © ${year} Web Development Course. All rights reserved.;
}
