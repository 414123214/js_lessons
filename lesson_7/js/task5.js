const userCentimeters = parseInt(prompt(`Введіть довжину у сантиметрах`))
const userKilograms = parseInt(prompt(`Введіть вагу у кілограмах`))
const userKilometers = parseInt(prompt(`Введіть довжину у кілометрах`))

function convertCmToInch() {
  return userCentimeters / 2.54
}
function convertKgToPounds() {
  return userKilograms * 2.2046
}
function convertKmToMiles() {
  return userKilometers * 0.6214
}
const inches = convertCmToInch()
const pounds = convertKgToPounds()
const miles = convertKmToMiles()

document.write(`${userCentimeters}см - це ${inches.toFixed(2)}дюймів,<br>
${userKilograms}кг - це ${pounds.toFixed(2)}фунтів,<br>
${userKilometers}км - це ${miles.toFixed(2)}миль
`)
