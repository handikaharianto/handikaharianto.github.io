var text = document.querySelector('.bold')

function setTypewriterEffect() {
  const typewriter = new Typewriter(text, {
    loop: true,
    delay: 75,
  })

  typewriter
    .typeString('CS STUDENT')
    .pauseFor(500)
    .deleteAll()
    .typeString('SOFTWARE ENGINEER')
    .pauseFor(500)
    .deleteAll()
    .typeString('WEB DEVELOPER')
    .pauseFor(500)
    .start()
}

export default setTypewriterEffect
