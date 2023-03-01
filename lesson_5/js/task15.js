const numberOfMonths = 12
let averageTemperature = 0
for (i = 1; i <= numberOfMonths; i++) {
  let monthName
  switch (i) {
    case 1:
      monthName = "Січні"

      break
    case 2:
      monthName = "Лютому"

      break
    case 3:
      monthName = "Березні"

      break
    case 4:
      monthName = "Квітні"

      break
    case 5:
      monthName = "Травні"

      break
    case 6:
      monthName = "Червні"

      break
    case 7:
      monthName = "Липні"

      break
    case 8:
      monthName = "Серпні"

      break
    case 9:
      monthName = "Вересні"

      break
    case 10:
      monthName = "Жовтні"

      break
    case 11:
      monthName = "Листопаді"

      break

    default:
      monthName = "Грудні"
      break
  }
  const averageTemperatureMonth = parseInt(
    prompt(`Введіть середню температуру у ${monthName}`)
  )
  averageTemperature += averageTemperatureMonth
}
averageTemperature = averageTemperature / numberOfMonths
document.write(
  `Середня температура ${averageTemperature.toFixed(1) + "\u2103"}`
)
