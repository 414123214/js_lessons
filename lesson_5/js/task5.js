let tableCounter = 1
document.write(`<table>`)
for (let numberOfRows = 1; numberOfRows <= 3; numberOfRows++) {
  document.write(`<tr>`)
  for (let numberOfCells = 1; numberOfCells <= 3; numberOfCells++) {
    document.write(`<td>${tableCounter}</td>`)
    tableCounter++
  }
  document.write(`</tr>`)
}
document.write(`</table>`)
