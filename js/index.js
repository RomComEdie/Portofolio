const menuBtn = document.querySelector(".ti-menu-2");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");

  // toggle antara ikon menu dan ikon X
  if (menuBtn.classList.contains("ti-menu-2")) {
    menuBtn.classList.remove("ti-menu-2");
    menuBtn.classList.add("ti-x");
  } else {
    menuBtn.classList.remove("ti-x");
    menuBtn.classList.add("ti-menu-2");
  }

    navigation.classList.toggle("active");
});

// javascript for video slide navigation

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".videoSlide")
const content = document.querySelectorAll(".content")

var slideNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

     slides.forEach((slide) => {
        slide.classList.remove("active")
    })

     content.forEach((content) => {
        content.classList.remove("active")
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    content[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slideNav(i);
    })
})

//  navbar slide 

const navLink = document.querySelectorAll('.navigation a')

navLink.forEach(link => {
    link.addEventListener('click', e => {
    e.preventDefault();
    let index = link.getAttribute('data-slide');

    slideNav(index);

})
})


// Footer 

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Tombol back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.opacity = window.scrollY > 300 ? "1" : "0.4";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form kontak sederhana (tanpa backend, cuma feedback visual)
const footerForm = document.getElementById("footerForm");
const formMsg = document.getElementById("formMsg");
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Terima kasih! Email kamu sudah tercatat.";
  footerForm.reset();
  setTimeout(() => (formMsg.textContent = ""), 4000);
});