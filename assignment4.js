// Assignment 4 - loops

// for loop
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// while loop with break
console.log("");
console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
  if (num % 6 === 0) {
    console.log("Found: " + num);
    break;
  }
  num++;
}

// do while with continue, skipping the even numbers
console.log("");
console.log("-- Odd numbers from 1 to 9 --");
let j = 0;
do {
  j++;
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
} while (j < 9);
