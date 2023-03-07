function getRandomImage() {
	const randomImageNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1)
  document.write(
    `<div style="width: 300px; height: 300px; background: url(../img/0${randomImageNumber}.svg) 50%/ contain no-repeat"></div>`
  )
}
getRandomImage()