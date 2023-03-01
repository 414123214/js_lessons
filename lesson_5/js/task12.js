let randomImage
let firstSlot
let secondSlot
let thirdSlot
for (let i = 0; i < 3; i++) {
  randomImage = Math.floor(Math.random() * (6 - 3 + 1) + 3)
  document.write(
    `<img style="max-width: 200px"src="../img/0${randomImage}.jpg" alt="slot">`
  )
  switch (i) {
    case (i = 0):
      firstSlot = randomImage
      break
    case (i = 1):
      secondSlot = randomImage
      break
    case (i = 2):
      thirdSlot = randomImage
      break
  }
}
let result = 'нуль'
if (firstSlot === secondSlot && secondSlot === thirdSlot) {
  if (firstSlot === 3) {
    result = 1000
  } else if (firstSlot === 4) {
    result = 500
  } else if (firstSlot === 5) {
    result = 200
  } else {
    result = 100
  }
}
document.write(`<h2>Вітаємо. Ви виграли ${result} грн!</h2>`)
