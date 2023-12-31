// Variable
const navbarIconList = document.getElementById("navbar-icon-list");
const navbarListContent = document.getElementById("navbar-list-content");
const menusAnimation = document.querySelectorAll(".menus-animation");
const dailypicksAnimation = document.querySelectorAll(".dailypicks-animation");
const contactusAnimation = document.querySelectorAll(".contactus-animation");

// Responsive Navbar
navbarIconList.addEventListener("click", () => {
  navbarListContent.classList.toggle("hidden");
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

menusAnimation.forEach((el) => observer.observe(el));
dailypicksAnimation.forEach((el) => observer.observe(el));
contactusAnimation.forEach((el) => observer.observe(el));
