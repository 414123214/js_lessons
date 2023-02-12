// Знаходимо поточний рік
const todayDate = new Date();
let thisYear = todayDate.getFullYear()
// Ввести рік народження
let inputYear = parseInt(prompt('Введіть рік народження', [1900]))
// Обчислюємо вік
let age = thisYear - inputYear
// Виводимо вік
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.</h1>
	<ul class="input-data">
	<li class="input-data__value">Поточний рік = ${thisYear}</li>
	<li class="input-data__value">Рік народження = ${inputYear}</li>
	</ul>
	<ul class="tasks__list">
	<li class="tasks__item task">Вік: ${age}</li>
</ul>
</div>
</div>
`)
