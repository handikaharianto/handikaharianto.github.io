import displayProjectList from './displayProjectList.js'
import displaySkillList from './displaySkillList.js'
import setFixedHeader from './setFixedHeader.js'

window.addEventListener('DOMContentLoaded', () => {
  displayProjectList()
  displaySkillList()
})

window.addEventListener('scroll', setFixedHeader)
