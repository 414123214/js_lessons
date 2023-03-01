// Вводимо к-сть чисел
const countOfRandomNumbers = parseInt(prompt("Введіть к-сть випадкових чисел"))
// Відомі величини
let i = 1
const maxRandomNumber = 100
const minRandomNumber = 1
// Цикл
document.write(`<ul class="tasks__list">`)
while (i <= countOfRandomNumbers) {
  const randomNumber = Math.floor(
    Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber
  )
  document.write(`<li class="tasks__item task">${randomNumber}</li>`)
  i++
}
document.write(`</ul>`)
document.write(`<ul class="input-data">
<li class="input-data__value">К-сть випадкових чисел: ${countOfRandomNumbers}</li>`)
