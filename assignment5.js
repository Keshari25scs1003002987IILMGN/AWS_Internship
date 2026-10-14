// Assignment 5 - functions and scope

// normal function with default values
function areaOfRect(length = 5, width = 4) {
  return length * width;
}

// same thing as an arrow function
const areaArrow = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + areaOfRect());
console.log("Arrow Function Area (Custom 10x3): " + areaArrow(10, 3));

// block scope test - let stays inside the block
{
  let blockVar = "inside the block";
}

try {
  console.log(blockVar);
} catch (err) {
  console.log("Scope Test Error: " + err.name + ": " + err.message + " (when accessed outside block)");
}
