const tableRows = parseInt(prompt("Введіть кількість рядків таблиці"))
const tableColumns = parseInt(prompt("Введіть кількість колонок таблиці"))
const userMessage = prompt("Задайте фіксоване повідомлення")
document.write(`<table>`)
for (let rows = 0; rows < tableRows; rows++) {
  document.write(`<tr>`)
  for (let columns = 0; columns < tableColumns; columns++) 
  document.write(`<td>${userMessage}</td>`)
    document.write(`</tr>`)
}
document.write(`</table>`)
