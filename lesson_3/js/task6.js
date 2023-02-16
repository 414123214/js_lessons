const dayNumber = parseInt(prompt('Введіть номер дня тижня (Від 1 до 7)', [1]))
const dayDefinion = dayNumber == 1 ? 'Понеділок': dayNumber == 2 ? 'Вівторок' : dayNumber == 3 ? 'Середа' : dayNumber == 4 ? 'Четвер' : dayNumber == 5 ? 'П\'ятниця' : dayNumber == 6 ? 'Субота' : dayNumber == 7 ? 'Неділя' : 'Помилка'
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
</h1>
	<ul class="input-data">
	<li class="input-data__value">Введений день тижня = ${dayNumber}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Цей день - ${(dayDefinion)}</li>
	</ul>
</div>
</div>
`)