const sidebar = document.querySelector('.sidebar')
const sidebarBg = document.querySelector('.sidebar-background')

export function openSidebar() {
  sidebar.classList.add('sidebar--active')
  sidebarBg.classList.add('sidebar-background--active')
}

export function closeSidebar() {
  sidebar.classList.remove('sidebar--active')
  sidebarBg.classList.remove('sidebar-background--active')
}
