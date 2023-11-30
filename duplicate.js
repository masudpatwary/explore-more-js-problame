const names = [
  "abul",
  "babul",
  "gabul",
  "sabul",
  "abul",
  "gabul",
  "tabul",
  "nabul",
  "abul",
  "abul",
  "abul",
  "rabul",
  "nabul",
];
// function removeDuplicate(names) {
//   const uniqeName = [];
//   for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     if (uniqeName.includes(element) === false) {
//       uniqeName.push(element);
//     }
//   }
//   return uniqeName;
// }
// const result = removeDuplicate(names);
// console.log(result);

function removeDuplicate(names) {
  const uniqe =  [];
  for (let i = 0; i < names.length; i++) {
    const Element = names[i];
    if (uniqe.includes(Element) === false) {
      uniqe.push(Element);
    }
    // console.log(Element);
  }
  return uniqe;
}
const result = removeDuplicate(names);
console.log(result);
