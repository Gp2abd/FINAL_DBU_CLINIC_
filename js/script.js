const carousel = document.querySelector(".team-container");

const dragging = (e) => (carousel.scrollLeft = e.pageX);

carousel.addEventListener("mousemove", dragging);
