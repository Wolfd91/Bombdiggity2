const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
  if(navbarCollapse.classList.contains('show')){
    navbarToggle.setAttribute('aria-expanded', 'true');
  } else {
    navbarToggle.setAttribute('aria-expanded', 'false');
  }
});
