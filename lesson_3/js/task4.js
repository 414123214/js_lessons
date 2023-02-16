// ВВодимо необхідні дані
const userAge = parseInt(prompt('Введіть вік людини'))
// Присвоюємо тернарним оператором і виводимо дані
const whoIs = userAge <= 6 ? 'Дитиною у садочку' : userAge <= 16 ? 'Школярем' : userAge <= 21 ? 'Студентом' : userAge < 60 ? 'Працівником' : 'Пенсіонером'
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
</h1>
	<ul class="input-data">
	<li class="input-data__value">Вік людини: ${userAge} років</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Людина є ${whoIs}</li>
	</ul>
</div>
</div>
`)