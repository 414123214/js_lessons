const monthNumber = parseInt(prompt('Введіть номер місяця (Від 1 до 12)', [1]))
const timeOfYear = monthNumber == 12 || monthNumber < 3 ? 'Зима' : monthNumber < 6 ? 'Весна' : monthNumber < 9 ? 'Літо' : monthNumber <12 ? 'Осінь' : 'Щось пішло не так)'
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">7. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься</h1>
	<ul class="input-data">
	<li class="input-data__value">Введений місяць = ${monthNumber}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">${(timeOfYear)}</li>
	</ul>
</div>
</div>
`)