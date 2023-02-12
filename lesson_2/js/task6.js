// Ввести вхідні величини для обчислення
let product1Price = parseFloat(prompt('Введіть вартість першого товару', ['1грн']))
let product2Price = parseFloat(prompt('Введіть вартість другого товару', ['1грн']))
let product3Price = parseFloat(prompt('Введіть вартість третього товару', ['1грн']))
let product1quantity = parseInt(prompt('Введіть к-сть першого товару', [0]))
let product2quantity = parseInt(prompt('Введіть к-сть другого товару', [0]))
let product3quantity = parseInt(prompt('Введіть к-сть третього товару', [0]))
// Обчислення
let total1Price = parseFloat((product1Price * product1quantity).toFixed(2))
let total2Price = parseFloat((product2Price * product2quantity).toFixed(2))
let total3Price = parseFloat((product3Price * product3quantity).toFixed(2))
let totalPrice = total1Price + total2Price + total3Price
// Вивід
document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.</h1>
	<ul class="input-data">
	<li class="input-data__value">Вартість першого товару = ${product1Price} грн</li>
	<li class="input-data__value">Вартість другого товару = ${product2Price} грн</li>
	<li class="input-data__value">Вартість третього товару = ${product3Price} грн</li>
	</ul>
	<table class="task__table table receipt">
		<tr class="table__row">
			<th class="table__title align="center" colspan="4">Чек</th>
		</tr>
		<tr class="table__row">
			<th class="table__title">Товар</th>
			<th class="table__title">Ціна за одиницю</th>
			<th class="table__title">кількість</th>
			<th class="table__title">Загальна ціна товару</th>
		</tr>
		<tr class="table__row">
			<td class="table__data">Товар 1</td>
			<td class="table__data">${product1Price} грн</td>
			<td class="table__data">${product1quantity} шт</td>
			<td class="table__data">${total1Price} грн</td>
		</tr>
		<tr class="table__row">
			<td class="table__data">Товар 2</td>
			<td class="table__data">${product2Price} грн</td>
			<td class="table__data">${product2quantity} шт</td>
			<td class="table__data">${total2Price} грн</td>
		</tr>
		<tr class="table__row">
			<td class="table__data">Товар 3</td>
			<td class="table__data">${product3Price} грн</td>
			<td class="table__data">${product3quantity} шт</td>
			<td class="table__data">${total3Price} грн</td>
		</tr>
		<tr class="table__row">
		<th class="table__title align="center" colspan="2">Загальна сума</th>
		<th class="table__title align="center" colspan="2">${totalPrice} грн</th>
	</tr>
	</table>
`)