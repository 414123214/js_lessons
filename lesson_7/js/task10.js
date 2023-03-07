function getAveragePositiveTemperatureValue() {
  let positiveTemperatureValuesCount = 0
  let positiveTemperatureValuesSum = 0
  for (let i = 0; i < 5; i++) {
    const userTemperatureValue = parseInt(
      prompt(`Введіть покази температури ${i}/5`)
    )
    if (userTemperatureValue > 0) {
      positiveTemperatureValuesCount++
      positiveTemperatureValuesSum += userTemperatureValue
    }
	 else continue
  }

  return (positiveTemperatureValuesSum / positiveTemperatureValuesCount)
}
const averagePositiveTemperatureValue = getAveragePositiveTemperatureValue()
document.write(`Середнє значення температури - ${averagePositiveTemperatureValue}`)