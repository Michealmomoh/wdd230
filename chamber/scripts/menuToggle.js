document.getElementById('hamburger').addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    document.getElementById('hamburger').textContent = navMenu.style.display === 'block' ? '✖' : '☰';
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.querySelector('main').classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll(".lazy");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach((image) => {
      imageObserver.observe(image);
    });
  });
  const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysSinceLastVisit < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysSinceLastVisit === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
  }
}

localStorage.setItem("lastVisit", currentVisit);

