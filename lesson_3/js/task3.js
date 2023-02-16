// ВВодимо необхідні дані
const minNumber = 1
const maxNumber = 5
const firstTry = parseInt(prompt('Спроба 1. Спробуйте вгадати число від 1 до 5', '0'))
const secondTry = parseInt(prompt('Спроба 2. Спробуйте вгадати число від 1 до 5', '0'))
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
// Виводимо дані умовними операторами
if (firstTry == randomNumber)
document.write (`
<div class="task">
<div class="task__container">
<h1 class="task__title">3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.</h1>
	<ul class="input-data">
	<li class="input-data__value">Випадкове число = ${randomNumber}</li>
	<li class="input-data__value">Ваше перше число = ${firstTry}</li>
	<li class="input-data__value">Ваше друге число = ${secondTry}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Ви вгадали з першої спроби</li>
	</ul>
</div>
</div>
`)
else if (secondTry == randomNumber)
document.write (`
<div class="task">
<div class="task__container">
<h1 class="task__title">3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.</h1>
	<ul class="input-data">
	<li class="input-data__value">Випадкове число = ${randomNumber}</li>
	<li class="input-data__value">Ваше перше число = ${firstTry}</li>
	<li class="input-data__value">Ваше друге число = ${secondTry}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Ви вгадали з другої спроби</li>
	</ul>
</div>
</div>
`)
else
document.write (`
<div class="task">
<div class="task__container">
<h1 class="task__title">3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.</h1>
	<ul class="input-data">
	<li class="input-data__value">Випадкове число = ${randomNumber}</li>
	<li class="input-data__value">Ваше перше число = ${firstTry}</li>
	<li class="input-data__value">Ваше друге число = ${secondTry}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Ви не вгадали(</li>
	</ul>
</div>
</div>
`)