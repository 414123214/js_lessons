const amountToPay = 1000
let moneyEntered = 0
for (; moneyEntered < amountToPay; ) {
  moneyEntered += parseFloat(
    prompt(
      `Поступово введіть суму ${amountToPay}грн. Внесено ${moneyEntered}грн, ще ${
        amountToPay - moneyEntered
      }грн`
    )
  )
}
if (moneyEntered >= amountToPay) document.write(`<div>Ви оплатили товар</div>`)
