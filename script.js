// ******************* Toggle icon navbar ***********************
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

// ******************* Scroll action active link **********************
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
    }
  });

  // ************************ Sticky Navbar *******************************
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
}

// ************************ Scroll REveal *******************************
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
}).reveal('.home-content, .heading', { origin: 'top' })
  .reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
  .reveal('.home-contact h1, .about-img', { origin: 'left' })
  .reveal('.home-contact p, .about-content', { origin: 'right' });

// ************* Typed js ****************
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Web Designer'],
  typeSpeed: 70,
  backDelay: 1000,
  loop: true
});
