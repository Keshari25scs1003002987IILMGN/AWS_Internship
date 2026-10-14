// Assignment 6 - arrays and objects

let products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// forEach to print everything
console.log("-- All Products (forEach) --");
products.forEach(function (item) {
  console.log("Item: " + item.name + " - Price: $" + item.price);
});

// filter for cheap items
console.log("");
console.log("-- Filtered Products (Price < $50) --");
let cheapItems = products.filter(function (item) {
  return item.price < 50;
});
console.log(cheapItems);

// map to make the tags
console.log("");
console.log("-- Mapped Product Tags (map) --");
let tags = products.map(function (item) {
  return item.name.toUpperCase() + " costs $" + item.price;
});
console.log(tags);
