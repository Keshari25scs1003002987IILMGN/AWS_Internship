// Assignment 2 - tip calculator
// prompt() only works in the browser, so in node I just use 100 and 15

let bill, tipPercent;

if (typeof prompt === "function") {
  bill = Number(prompt("Enter bill amount"));
  tipPercent = Number(prompt("Enter tip percentage"));
} else {
  bill = 100;
  tipPercent = 15;
}

if (isNaN(bill) || isNaN(tipPercent)) {
  console.log("Please enter valid numbers");
} else {
  let tip = bill * tipPercent / 100;
  let total = bill;
  total += tip;

  console.log("Subtotal: $" + bill);
  console.log("Tip Percentage: " + tipPercent + "%");
  console.log("Calculated Tip: $" + tip);
  console.log("Total Amount to Pay: $" + total);
}
