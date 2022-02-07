import { closeSidebar } from './toggleSidebar.js'

function scrollto(e) {
  e.preventDefault()
  // get hash of current link
  const elementHash = e.currentTarget.hash

  const element = document.querySelector(elementHash)

  window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' })

  closeSidebar()
}

export default scrollto
