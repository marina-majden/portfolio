/* JavaScript for parallax effect from images with id's of background, foreground and  text h1 and h2
 */
document.addEventListener("scroll", function () {
  const parallax = document.getElementById("parallax");
  const background = document.getElementById("background");
  const foreground = document.getElementById("foreground");

  let scrollPosition = window.pageYOffset;

  background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  foreground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

// JS for mouse-moving effect on hero background
document.addEventListener("mousemove", function (event) {
  const heroBackground = document.getElementById("hero-background");
  const moveX = (event.clientX / window.innerWidth) * 20 - 10;
  const moveY = (event.clientY / window.innerHeight) * 20 - 10;
  heroBackground.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
