const maxNumber = 10
const minNumber = 1
let result
const guessedNumber = parseInt(
  prompt(`Загадайте число у проміжку від 1 до 10`, [1])
)
let randomNumber
do {
  randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  )
  result = confirm(
    `Чи співпадає число компютера ${randomNumber} з вашим ${guessedNumber}`
  )
  if (result) {
    document.write(`Число компютера ${randomNumber}, а ваше ${guessedNumber}. Компютер <b>відгадав</b> ваше число`)
    break
  }
} while (true)
