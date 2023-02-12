// Ввести вхідні величини для обчислення
let firtsNumber = parseFloat(prompt('Введіть перше число', [0]))
let secondNumber = parseFloat(prompt('Введіть друге число', [0]))
// Обчислення
let sum = (firtsNumber + secondNumber).toFixed(2)
let product = (firtsNumber * secondNumber).toFixed(1)
let fraction = (firtsNumber / secondNumber).toFixed(1)
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці</h1>
	<ul class="input-data">
	<li class="input-data__value">Перше число = ${firtsNumber}</li>
	<li class="input-data__value">друге число = ${secondNumber}</li>
	</ul>
	<table class="task__table table">
		<tr class="table__row">
			<th class="table__title">Сума</th>
			<th class="table__title">Добуток</th>
			<th class="table__title">Частка</th>
		</tr>
		<tr class="table__row">
			<td class="table__data">${sum}</td>
			<td class="table__data">${product}</td>
			<td class="table__data">${fraction}</td>
		</tr>
	</table>
</div>
</div>
`)