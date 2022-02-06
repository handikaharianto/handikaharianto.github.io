import { projects } from './data.js'

const projectList = document.querySelector('.project__list')

function displayProjectList() {
  const projectItems = projects
    .map((project) => {
      const { name, text, image, techStack, github, website } = project

      return `
          <article class="project__card">
            <div class="project__img-container">
              <img
                class="project__img"
                src=${image}
                alt=${name}
              />
            </div>
            <div class="project__content">
              <h4 class="project__name">
                <a href=${website} target="_blank">${name}</a>
              </h4>
              <p class="project__text">
                ${text}
              </p>
              <ul class="project__stack">
                ${techStack
                  .map((tech) => {
                    return `<li>${tech}</li>`
                  })
                  .join('')}
              </ul>
              <div class="project__links">
                <a class="project__link" href=${github} target="_blank">
                  <img
                    class="project__link-logo"
                    src="../images/github.svg"
                    alt="Github"
                  />
                </a>
                <a class="project__link" href=${website} target="_blank">
                  <img
                    class="project__link-logo"
                    src="../images/external-link.svg"
                    alt="Link"
                  />
                </a>
              </div>
            </div>
          </article>
        `
    })
    .join('')

  projectList.innerHTML = projectItems
}

export default displayProjectList
