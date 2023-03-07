function getDayOff (dayNumber) {

	if (dayNumber >= 1 && dayNumber <=5) return 'робочий'
	else return 'вихідний'
}
const userDayNumber = parseInt(prompt('Введіть номер дня тижня'))
const result = getDayOff(userDayNumber)
document.write(`Цей день є ${result}`)