document.write(`<form class="form" action="#" method="get">`)
for (i = 1; i <= 10; i++) {
document.write(`
<div class="form__item">
	<label class="form__label" for="product${i}">Product # ${i}</label>
	<input class="form__input" type="text" id="product${i}" name="product${i}">
</div>
`)
}
document.write(` <button type="submit" style="padding: 15px; border: 1px solid #000">Відправити</button></form>`)