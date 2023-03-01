const maxNumber = 10
const minNumber = 1
let result
const guessedNumber = parseInt(
  prompt(`Загадайте число у проміжку від 1 до 10`, [1])
)
let randomNumber
for (let i = 1; i <= 3; i++) {
  randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  )
  result = confirm(
    `Спроба ${i}/3. Чи співпадає число компютера ${randomNumber} з вашим ${guessedNumber}`
  )
  if (result) {
    document.write(`Число компютера ${randomNumber}, а ваше ${guessedNumber}. Компютер <b>відгадав</b> ваше число`)
    break
  }
}
if (!result) {
  document.write(`Число компютера ${randomNumber}, а ваше ${guessedNumber}. Компютер <b>не відгадав</b> ваше число`)
}
