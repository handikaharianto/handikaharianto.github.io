import { skills } from './data.js'

const skillList = document.querySelector('.skills__list')

function displaySkillList() {
  const skillItems = skills
    .map((skill) => `<img src=${skill.url} alt=${skill.name}>`)
    .join('')

  skillList.innerHTML = skillItems
}

export default displaySkillList
