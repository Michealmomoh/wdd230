document.getElementById('hamburger').addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    document.getElementById('hamburger').textContent = navMenu.style.display === 'block' ? '✖' : '☰';
});

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.querySelector('main').classList.toggle('dark-mode');
});
