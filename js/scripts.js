const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const scrollToTopElement = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', () => {
  if (window.scrollY >= Math.floor(window.innerHeight)) {
    scrollToTopElement.className = 'scroll-to-top pointer active'
  } else {
    scrollToTopElement.className = 'scroll-to-top pointer'
  }
})

const body = document.querySelector('body')
const darkModeImg = document.querySelector('.dark-mode')
const lightModeImg = document.querySelector('.light-mode')

const changeTheme = () => {
  if (darkModeImg.className.includes('active')) {
    body.className = 'dark'
    darkModeImg.className = ''
    lightModeImg.className = 'active'
  } else {
    body.className = ''
    darkModeImg.className = 'active'
    lightModeImg.className = ''
  }
}

const nav = document.querySelector('header nav')

const toggleNav = () => {
  if (window.innerWidth <= 720) {
    if (nav.className == 'active') {
      nav.className = ''
    } else {
      nav.className = 'active'
    }
  }
}
