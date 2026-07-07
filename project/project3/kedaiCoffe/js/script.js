// Toggle class active

const navbarNav = document.querySelector(
    `.navbar-nav`
);

// ketika hamburger menu di klick

document.querySelector(`#menu`).
onclick = () => {
    navbarNav.classList.toggle(`active`);
};

// klik di luar side bar untuk menghilangkan navbar

const menu = document.querySelector(`#menu`);

document.addEventListener(`click`, function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
navbarNav.classList.remove(`active`);
    }
})