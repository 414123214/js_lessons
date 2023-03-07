const number1 = parseInt(prompt('Введіть число 1'))
const number2 = parseInt(prompt('Введіть число 2'))
const number3 = parseInt(prompt('Введіть число 3'))
let evenNumbersCount = 0
let positiveIntegersCount = 0
let numbersGreaterThan100Count = 0
function operationsWithNumbers (number1, number2, number3) {
	for(let i = 0; i<arguments.length; i++) {
		if (arguments[i]%2 === 0) evenNumbersCount++
		if (arguments[i]>0) positiveIntegersCount++
		if (arguments[i]>100) numbersGreaterThan100Count++
	}
}
operationsWithNumbers(number1, number2, number3)
document.write(`Парних - ${evenNumbersCount}<br>
Додатних - ${positiveIntegersCount}<br>
Більших за 100 - ${numbersGreaterThan100Count}
`)