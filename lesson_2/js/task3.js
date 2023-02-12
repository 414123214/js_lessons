// Ввести вхідні величини для обчислення
let productPrice = parseFloat(prompt('Введіть ціну товару', ['1грн']))
let productNumber = parseInt(prompt('Введіть кількість товару', [0]))
// Обчислення
let totalPrice = (productPrice * productNumber).toFixed(2)
let vat = totalPrice * 0.05
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної
	вартості).</h1>
	<ul class="input-data">
	<li class="input-data__value">Ціна одного товару = ${productPrice.toFixed(2)}грн</li>
	<li class="input-data__value">Кількість товару = ${productNumber}шт</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">Загальна вартість: ${totalPrice}грн</li>
		<li class="tasks__item task">ПДВ (5% від загальної вартості): ${vat}грн</li>
	</ul>
</div>
</div>
`)