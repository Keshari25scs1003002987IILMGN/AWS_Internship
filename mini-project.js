// Mini Project - Product Inventory and Analytics
// in the browser it asks for the product with prompt(), in node it just uses Monitor and 150

console.log("--- Initializing Inventory System ---");

// products we already have
let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// getting the new product from the user
let productName;
let productPrice;

if (typeof prompt === "function") {
  productName = prompt("Enter product name");
  productPrice = Number(prompt("Enter product price"));
} else {
  productName = "Monitor";
  productPrice = 150;
}

// checking the input, if it is bad we skip adding it
let newProducts = [{ name: productName, price: productPrice }];

for (let i = 0; i < newProducts.length; i++) {
  let p = newProducts[i];

  if (!p.name || p.name.trim() === "") {
    console.log("Product name is missing, skipping");
    continue;
  }
  if (isNaN(p.price) || p.price <= 0) {
    console.log("Price is not valid for " + p.name + ", skipping");
    continue;
  }

  inventory.push({ name: p.name.trim(), price: p.price });
  console.log('[Prompt executed: User adds "' + p.name + '" at "$' + p.price + '"]');
}

// gives a category depending on the price
function getCategory(price) {
  if (price >= 500) {
    return "Premium";
  } else if (price >= 50) {
    return "Standard";
  } else {
    return "Budget";
  }
}

// switch is used here for the badge text
function getBadge(category) {
  switch (category) {
    case "Premium":
      return "Premium";
    case "Standard":
      return "Standard";
    case "Budget":
      return "Budget";
    default:
      return "Unknown";
  }
}

console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(function (item) {
  let badge = getBadge(getCategory(item.price));
  console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + badge);
});

// normal function to add up all prices
function getTotal(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i].price;
  }
  return sum;
}

// arrow function for tax and discount
const finalPrice = (amount, tax = 0, discount = 0) => {
  return amount + (amount * tax / 100) - (amount * discount / 100);
};

let total = getTotal(inventory);

let affordable = inventory
  .filter(function (item) { return item.price < 200; })
  .map(function (item) { return item.name; });

let reportList = inventory.map(function (item) {
  return item.name.toUpperCase() + ": $" + item.price;
});

console.log("");
console.log("--- Financial Analytics ---");
console.log("Total Inventory Value: $" + total);
console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordable));
console.log("Formatted Report List: " + JSON.stringify(reportList));
console.log("Total with 10% tax and 5% discount: $" + finalPrice(total, 10, 5).toFixed(2));
