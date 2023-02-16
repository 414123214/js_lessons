// Вводимо необхідні дані
const driversCategory = prompt('Введіть категорію водія (A, B, C)', 'A')
// Присвоюємо дані умовними операторами
const categoryDefinion = driversCategory == 'A' ? 'мотоциклом' : driversCategory == 'B' ?  'легковим автомобілем' : driversCategory == 'C' ? 'С-вантажним автомобілем' : null
// Вивід
if (categoryDefinion !== null)
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.</h1>
	<ul class="input-data">
	<li class="input-data__value">Введено категорію = ${driversCategory}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Ви можете керувати ${categoryDefinion}</li>
	</ul>
</div>
</div>
`)
else
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.</h1>
	<ul class="input-data">
	<li class="input-data__value">Введено категорію = ${driversCategory}</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Ви можете керувати велосипедом</li>
	</ul>
</div>
</div>
`)