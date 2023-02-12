// Ввести вхідні величини для обчислення
let seconds = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби', [0]))
// Обчислення
let hours = (seconds / 3600).toFixed()
let minutes = (((seconds / 3600) % 1) * 100).toFixed(2)
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</h1>
	<ul class="input-data">
	<li class="input-data__value">Кількість секунд = ${seconds}сек</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Кількість годин: ${(hours)}год</li>
		<li class="tasks__item task">Кількість хвилин: ${minutes}хв</li>
	</ul>
</div>
</div>
`)