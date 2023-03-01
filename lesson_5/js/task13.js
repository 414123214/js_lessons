const verticalFieldSize = parseInt(prompt(`Введіть висоту поля`))
const horizontalFieldSize = parseInt(prompt(`Введіть ширину поля`))
const numberOfShells = parseInt(prompt(`Введіть к-сть снарядів`))
const verticalShipLocation = Math.floor(
  Math.random() * (verticalFieldSize - 1) + 1
)
const horizontalShipLocation = Math.floor(
  Math.random() * (verticalFieldSize - 1) + 1
)
let result = false
for (let i = 1; i <= numberOfShells; i++) {
  const verticalAttackCell = parseInt(
    prompt(`Спроба ${i}. Введіть клітинку по вертикалі`)
  )
  const horizontalAttackCell = parseInt(
    prompt(`Спроба ${i}. Введіть клітинку по горизонталі`)
  )
  if (
    verticalAttackCell === verticalShipLocation &&
    horizontalAttackCell === horizontalShipLocation
  ) {
    alert(`Ви влучили`)
	result = true
    break
  } else alert(`Мимо`)
}
result ? document.write(`<div>Ви потопили корабель</div>`) : document.write(`<a href="">Ви не влучили. Хочете спробувати ще раз?</a>`)
