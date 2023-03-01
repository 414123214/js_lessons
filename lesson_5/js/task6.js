let tablesCounter = 1

for (let numberOfTables = 1; numberOfTables <= 3; numberOfTables++) {
  document.write(`<table>`)
  for (let numberOfRows = 1; numberOfRows <= 3; numberOfRows++) {
    document.write(`<tr>`)
    for (let numberOfCells = 1; numberOfCells <= 3; numberOfCells++) {
      document.write(`<td>${tablesCounter}</td>`)
      tablesCounter++
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)
}
