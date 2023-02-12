// Ввести вхідні величини для обчислення
let inputLength = (parseFloat(prompt('Введіть довжину у см', [0]))).toFixed(2)
// Обчислення
let metersLength = inputLength / 100
let kilometersLength = inputLength / 100000
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</h1>
	<ul class="input-data">
	<li class="input-data__value">Довжина у сантиметрах = ${inputLength}см</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Довжина у метрах: ${(metersLength)}м</li>
		<li class="tasks__item task">Довжина у кілометрах: ${kilometersLength}км</li>
	</ul>
</div>
</div>
`)