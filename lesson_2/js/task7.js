// Граничні значення даних
let minMonth = 1
let maxMonth = 12
let minDay = 0
let maxDay = 6
// Обчислення
let randomMonth = parseInt(minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1)))
let randomDay = parseInt(minDay + Math.floor(Math.random() * (maxDay - minDay + 1)))
let randomSum = randomMonth + randomDay
//Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</h1>
	<ul class="input-data">
	<li class="input-data__value">Випадковий місяць = ${randomMonth}</li>
	<li class="input-data__value">Випадковий день = ${randomDay}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Сума: ${(randomSum)}</li>
	</ul>
</div>
</div>
`)