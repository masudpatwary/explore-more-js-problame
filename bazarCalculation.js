function bazarCalculation(
  chalQuantity,
  dhalQuantity,
  ciniQuantity,
  onioneQuantity,
  sabanQuantity,
  aluQuantity,
  gerlicQuantity
) {
  const chal = 50;
  const dhal = 130;
  const cini = 135;
  const onione = 125;
  const saban = 70;
  const alu = 60;
  const gerlic = 220;

  const chalPrice = chal * chalQuantity;
  const dhalPrice = dhal * dhalQuantity;
  const ciniPrice = cini * ciniQuantity;
  const onionePrice = onione * onioneQuantity;
  const sabanPrice = saban * sabanQuantity;
  const aluPrice = alu * aluQuantity;
  const gerlicPrice = gerlic * gerlicQuantity;

  const totalPrice =
    chalPrice +
    dhalPrice +
    ciniPrice +
    onionePrice +
    sabanPrice +
    aluPrice +
    gerlicPrice;

  return totalPrice;
}

const totalPrice = bazarCalculation(1, 5, 3, 8, 5, 2, 1);
console.log(totalPrice);
