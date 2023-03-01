for (let numberOfArticle = 1; numberOfArticle <= 4; numberOfArticle++) {
  document.write(`<h1>Заголовок ${numberOfArticle}</h1>`)
  for (
    let NumberOfParagraphs = 1;
    NumberOfParagraphs <= numberOfArticle;
    NumberOfParagraphs++
  ) {
    document.write(`
		<p>Розділ ${numberOfArticle}, параграф ${NumberOfParagraphs}</p>
		`)
  }
  document.write(`<hr>`)
}
