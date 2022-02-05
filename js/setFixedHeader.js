const navbar = document.querySelector('.navbar')

function setFixedHeader() {
  const scrollPos = window.scrollY

  if (scrollPos >= 50) {
    navbar.classList.add('navbar--fixed')
  } else {
    navbar.classList.remove('navbar--fixed')
  }
}

export default setFixedHeader
