const phones = [
  { name: "smasung", model: "s22", price: 80000, color: "black" },
  { name: "iphone", model: "15 pro max", price: 120000, color: "black" },
  { name: "oppo", model: "reno 7 pro", price: 35000, color: "black" },
  { name: "xaomi", model: "mi ulpha", price: 55000, color: "black" },
  { name: "htc", model: "desire 840s", price: 47000, color: "black" },
  { name: "walton", model: "premio 4", price: 18000, color: "black" },
];

// function chipestPhone(phones) {
//   let chipest = phones[0];
//   for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if (phone.price > chipest.price) {
//       chipest = phone;
//     }
//   }
//   return chipest;
// }

// const mySelection = chipestPhone(phones);
// console.log(mySelection);

function chipestPhone(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}
const mySelected = chipestPhone(phones);
console.log(mySelected);
