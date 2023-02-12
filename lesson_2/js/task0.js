// Ввести вхідні величини для обчислення
let a = parseInt(prompt('Введіть число a', [0]))
let b = parseInt(prompt('Введіть число b', [0]))
let c = parseInt(prompt('Введіть число c', [0]))
// Обчислення
let s1 = a + 12 + b
let s2 = (Math.sqrt((a + b) / (2 * a))).toFixed(2)
let s3 = (Math.cbrt((a + b) * c)).toFixed(2)
let s4 = (Math.sin(a / -b)).toFixed(2)
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 0. Обчислити значення виразів</h1>
<img src="../img/01.png" alt="Формули" class="task__img"/>
	<ul class="input-data">
	<li class="input-data__value">Число a = ${a}</li>
	<li class="input-data__value">Число b = ${b}</li>
	<li class="input-data__value">Число c = ${c}</li>
	</ul>
	<ul class="tasks__list">
	<li class="tasks__item task">S<sub>1</sub>: ${s1}</li>
	<li class="tasks__item task">S<sub>2</sub>: ${s2}</li>
	<li class="tasks__item task">S<sub>3</sub>: ${s3}</li>
	<li class="tasks__item task">S<sub>4</sub>: ${s4}</li>
</ul>
</div>
</div>
`)