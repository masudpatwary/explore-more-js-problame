function woodCalculatore(chairQuantity, tableQuantity, bedQuantity) {
  const perChair = 5;
  const perTable = 10;
  const peerBed = 20;

  const chairWood = perChair * chairQuantity;
  const tableWood = perTable * tableQuantity;
  const bedWood = peerBed * bedQuantity;
  const tootalWood = chairWood + tableWood + bedWood;

  return tootalWood;
}

const mtootalWood = woodCalculatore(0, 0, 5);
console.log(tootalWood);
