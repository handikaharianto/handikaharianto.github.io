import displayProjectList from './displayProjectList.js'
import setFixedHeader from './setFixedHeader.js'

window.addEventListener('DOMContentLoaded', () => {
  displayProjectList()
})

window.addEventListener('scroll', setFixedHeader)
