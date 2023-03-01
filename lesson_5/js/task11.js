let initialNumber = parseInt(prompt(`Введіть початкове число`, [1]))
const finalNumber = parseInt(prompt(`Введіть кінцеве число`, [20]))
if (initialNumber % 2 == 0) {
  initialNumber++
}
let resultNumber = 0
document.write(`<h2>Непарні числа:</h2>,<ul>`)
let oddCounter = 1
for (let i = initialNumber; i <= finalNumber && oddCounter <= 5; i += 2) {
  oddCounter++
  document.write(`<li>${i}</li>`)
  resultNumber += i
}
document.write(`<li>Сума ${resultNumber}</li></ul>`)
