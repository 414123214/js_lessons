function getSeasonName(monthNumber) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      return "зима"
      break
    case 3:
    case 4:
    case 5:
      return "весна"
      break
    case 6:
    case 7:
    case 8:
      return "літо"
      break
    default:
      return "осінь"
      break
  }
}

const result = getSeasonName(parseInt(prompt("Введіть номер місяця")))
document.write(`Цей місяць належить до пори року - ${result}`)
