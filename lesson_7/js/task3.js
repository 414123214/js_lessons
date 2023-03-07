const number1 = parseInt(prompt("Введіть число 1"))
const number2 = parseInt(prompt("Введіть число 2"))
const number3 = parseInt(prompt("Введіть число 3"))
const number4 = parseInt(prompt("Введіть число 4"))

function getSum(number1, number2, number3, number4) {
  let numbersSum = number1 + number2 + number3 + number4
  return numbersSum
}

function getProduct() {
	let numbersProduct = 1
	for (let i = 0; i < arguments.length; i++) {
	  numbersProduct *= arguments[i]
	}
	return numbersProduct
}

function getAverage(number1, number2, number3, number4) {
let numbersAverage = (number1 + number2 + number3 + number4)/arguments.length
return numbersAverage
}

function getMin(number1, number2, number3, number4) {
  let numbersMin = number1
  if (number2 < numbersMin) numbersMin = number2
  else if (number3 < numbersMin) numbersMin = number3
  else numbersMin = number4
  return numbersMin
}
numbersSum = getSum(number1, number2, number3, number4)
numbersProduct = getProduct(number1, number2, number3, number4)
numbersAverage = getAverage(number1, number2, number3, number4)
numbersMin = getMin(number1, number2, number3, number4)
document.write(`Сума чисел- ${numbersSum}<br>
Добуток чисел - ${numbersProduct}<br>
Середнє значення - ${numbersAverage}<br>
Мінімальне значення - ${numbersMin}
`)
