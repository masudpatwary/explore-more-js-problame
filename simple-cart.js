const product = [
  { name: "shirt", price: 1200, quantity: 1 },
  { name: "t-Shirt", price: 700, quantity: 3 },
  { name: "pant", price: 4200, quantity: 1 },
  { name: "shoe", price: 2200, quantity: 8 },
  { name: "sanglass", price: 600, quantity: 10 },
  { name: "smart watch", price: 7200, quantity: 2 },
];

function shoppingCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const elements = products[i];
    const productTotal = elements.price * elements.quantity;
    sum = sum + productTotal;
  }
  return sum;
}
const expense = shoppingCost(product);
console.log(expense);
