// Вводимо необхідні дані
const childOneName = prompt('Введіть ім\'я першої дитини', 'Дитина №1')
const childTwoName = prompt('Введіть ім\'я Другої дитини', 'Дитина №2')
const childOneCandiesNumber = parseInt(prompt('Введіть к-сть цукерок першої дитини', [0]))
const childTwoCandiesNumber = parseInt(prompt('Введіть к-сть цукерок другої дитини', [0]))
// Перевіряємо яке значення більше і виводимо результат
if (childOneCandiesNumber > childTwoCandiesNumber)
	document.write(`
	<div class="task">
	<div class="task__container">
	<h1 class="task__title">1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести
	не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що
	кількість однакова.</h1>
		<ul class="input-data">
		<li class="input-data__value">Ім\'я першої дитини = ${childOneName}</li>
		<li class="input-data__value">Ім\'я другої дитини = ${childTwoName}</li>
		<li class="input-data__value">К-сть цукерок першої дитини = ${childOneCandiesNumber} шт</li>
		<li class="input-data__value">К-сть цукерок другої дитини = ${childTwoCandiesNumber} шт</li>
		</ul>
		<ul class="tasks__list">
		<li class="tasks__item task">У першої дитини ${childOneName} к-сть цукерок більше - ${childOneCandiesNumber} шт</li>
	</ul>
	</div>
	</div>
`)
else if (childOneCandiesNumber < childTwoCandiesNumber)
	document.write(`
	<div class="task">
	<div class="task__container">
	<h1 class="task__title">1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести
	не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що
	кількість однакова.</h1>
		<ul class="input-data">
		<li class="input-data__value">Ім\'я першої дитини = ${childOneName}</li>
		<li class="input-data__value">Ім\'я другої дитини = ${childTwoName}</li>
		<li class="input-data__value">К-сть цукерок першої дитини = ${childOneCandiesNumber}</li>
		<li class="input-data__value">К-сть цукерок другої дитини = ${childTwoCandiesNumber}</li>
		</ul>
		<ul class="tasks__list">
		<li class="tasks__item task">У другої дитини ${childTwoName} к-сть цукерок більше - ${childTwoCandiesNumber} шт</li>
	</ul>
	</div>
	</div>
`)
else
	document.write(`
	<div class="task">
	<div class="task__container">
	<h1 class="task__title">1. З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести
	не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що
	кількість однакова.</h1>
		<ul class="input-data">
		<li class="input-data__value">Ім\'я першої дитини = ${childOneName}</li>
		<li class="input-data__value">Ім\'я другої дитини = ${childTwoName}</li>
		<li class="input-data__value">К-сть цукерок першої дитини = ${childOneCandiesNumber}</li>
		<li class="input-data__value">К-сть цукерок другої дитини = ${childTwoCandiesNumber}</li>
		</ul>
		<ul class="tasks__list">
		<li class="tasks__item task">Кількість цукерок одинакова</li>
	</ul>
	</div>
	</div>
`)