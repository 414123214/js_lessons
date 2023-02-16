// ВВодимо необхідні дані
const productPrice = parseFloat(prompt('Введіть ціну товару', '1грн'))
const moneyQuantity = parseFloat(prompt('Скільки у вас грошей ?', '10грн'))
// Обчислюємо чи вистачає на квиток і виводимо якщо так
const surrender = moneyQuantity - productPrice
if (moneyQuantity >= (productPrice + 4))
	document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
</h1>
	<ul class="input-data">
	<li class="input-data__value">Ціна товару = ${productPrice.toFixed(2)}грн</li>
	<li class="input-data__value">Кількість грошей = ${moneyQuantity.toFixed(2)}грн</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">У вас вистачило грошей, не бажаєте купити лотерею за 4грн?</li>
	</ul>
</div>
</div>
`)
// Якщо не вистачає на квиток, але вистачає на товар
else if (moneyQuantity > productPrice)
	document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
</h1>
	<ul class="input-data">
	<li class="input-data__value">Ціна товару = ${productPrice.toFixed(2)}грн</li>
	<li class="input-data__value">Кількість грошей = ${moneyQuantity.toFixed(2)}грн</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">У вас вистачило грошей</li>
	</ul>
</div>
</div>
`)
// Якщо не вистачає на покупку товару і квитка
else
	document.write(`
<div class="task">
<div class="task__container">
<h1 class="task__title">2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
</h1>
	<ul class="input-data">
	<li class="input-data__value">Ціна товару = ${productPrice.toFixed(2)}грн</li>
	<li class="input-data__value">Кількість грошей = ${moneyQuantity.toFixed(2)}грн</li>
	</ul>
	<ul class="tasks__list">
		<li class="tasks__item task">У вас не вистачило грошей</li>
	</ul>
</div>
</div>
`)