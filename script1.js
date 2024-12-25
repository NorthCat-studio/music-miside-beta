document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');
    const title = document.getElementById('title');
    const fireworks = document.getElementById('fireworks');
    const potato = document.getElementById('potato');
    const homeTab = document.getElementById('home-tab');
    const musicTab = document.getElementById('music-tab');
    const homeSection = document.getElementById('home-section');
    const musicSection = document.getElementById('music-section');

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(registerSection);
        closeSection(loginSection);
    });

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(loginSection);
        closeSection(registerSection);
    });

    homeTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
        hideSection(musicSection);
    });

    musicTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(musicSection);
        hideSection(homeSection);
    });

    title.addEventListener('mouseover', () => {
        fireworks.classList.add('fireworks-animation');
        potato.classList.add('potato-drop');
    });

    title.addEventListener('mouseout', () => {
        fireworks.classList.remove('fireworks-animation');
        potato.classList.remove('potato-drop');
    });

    if (localStorage.getItem('username')) {
        registerBtn.style.display = 'none';
        loginBtn.textContent = 'Logout';
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            alert('You have logged out.');
            location.reload();
        });
    }
});

function toggleSection(section) {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('open'), 10);
    } else {
        section.classList.remove('open');
        setTimeout(() => section.style.display = 'none', 500);
    }
}

function closeSection(section) {
    section.classList.remove('open');
    setTimeout(() => section.style.display = 'none', 500);
}

function showSection(section) {
    section.style.display = 'block';
}

function hideSection(section) {
    section.style.display = 'none';
}

function register() {
    const username = document.getElementById('username').value;
    const password = document }