function getnumberOfNegativeTemperatureValues() {
  let negativeTemperatureValuesCount = 0
  for (let i = 0; i < 5; i++) {
	const userTemperature = parseInt(prompt(`Введіть покази температури ${i}/5`))
    if (userTemperature < 0) negativeTemperatureValuesCount++
  }
  return negativeTemperatureValuesCount
}
const numberOfNegativeTemperatureValues = getnumberOfNegativeTemperatureValues()
document.write(`Кількість від’ємних показів температури - ${numberOfNegativeTemperatureValues}`)