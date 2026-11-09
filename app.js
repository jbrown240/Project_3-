const circle = document.getElementById("hover-circle");

// Add expansion class on mouse enter
circle.addEventListener("mouseenter", () => {
  circle.classList.add("expand");
});

// Remove expansion class on mouse leave
circle.addEventListener("mouseleave", () => {
  circle.classList.remove("expand");
});