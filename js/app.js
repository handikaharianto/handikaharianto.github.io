import displayProjectList from './displayProjectList.js'
import displaySkillList from './displaySkillList.js'
import setFixedHeader from './setFixedHeader.js'
import setTypewriterEffect from './setTypewriterEffect.js'

window.addEventListener('DOMContentLoaded', () => {
  displayProjectList()
  displaySkillList()
  setTypewriterEffect()
})

window.addEventListener('scroll', setFixedHeader)
