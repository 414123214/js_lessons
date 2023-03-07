function getMonthName(monthNumber) {
  let result
  switch (monthNumber) {
    case 1:
      result = "січень"
      break
    case 2:
      result = "лютий"
      break
    case 3:
      result = "березень"
      break
    case 4:
      result = "квітень"
      break
    case 5:
      result = "травень"
      break
    case 6:
      result = "червень"
      break
    case 7:
      result = "липень"
      break
    case 8:
      result = "серпень"
      break
    case 9:
      result = "вересень"
      break
    case 10:
      result = "жовтень"
      break
    case 11:
      result = "листопад"
      break
    default:
      result = "грудень"
      break
  }
  return result
}
document.write(getMonthName(parseInt(prompt('Введіть номер місяця і дізнаєтесь його назву'))))
