const currentYear = new Date().getFullYear();
document.getElementById('2025').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 
  `Last Modified: ${lastModified.toDateString()} at ${lastModified.toLocaleTimeString()}`;