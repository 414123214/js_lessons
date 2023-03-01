const numberOfWeeks = parseInt(prompt(`Введіть кількість тижнів`))
let totalProfit = 0
let weekProfit
for (let i = 1; i <= numberOfWeeks; i++) {
  let dayProfit
  weekProfit = 0
  for (let dayNumber = 1; dayNumber <= 7; dayNumber++) {
    dayProfit = parseInt(prompt(`Введіть прибуток за день`))
    weekProfit += dayProfit
  }
  totalProfit += weekProfit
  alert(`Прибуток за ${i} тиждень - ${weekProfit} грн`)
  document.write(`<div>Прибуток за ${i} тиждень - ${weekProfit} грн</div>`)
}
alert(`Загальний прибуток ${totalProfit} грн`)
document.write(`<div>Загальний прибуток ${totalProfit} грн</div>`)
