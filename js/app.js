import displayProjectList from './displayProjectList.js'
import displaySkillList from './displaySkillList.js'
import setFixedHeader from './setFixedHeader.js'
import setTypewriterEffect from './setTypewriterEffect.js'
import { openSidebar, closeSidebar } from './toggleSidebar.js'
import scrollto from './scrollTo.js'

const navbarBtns = document.querySelector('.navbar__buttons')
const sidebarBg = document.querySelector('.sidebar-background')
const closeBtn = document.querySelector('.sidebar__close-btn')
const sidebarLinks = document.querySelectorAll('.sidebar__link')

window.addEventListener('DOMContentLoaded', () => {
  displayProjectList()
  displaySkillList()
  setTypewriterEffect()
})

window.addEventListener('scroll', setFixedHeader)

navbarBtns.addEventListener('click', openSidebar)

sidebarBg.addEventListener('click', closeSidebar)

closeBtn.addEventListener('click', closeSidebar)

sidebarLinks.forEach((link) => {
  link.addEventListener('click', scrollto)
})
