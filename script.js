"use strict";
// завдання 1

let value = +prompt("Введіть число!");

if (!value) {
  console.log("Помилка: введіть число");
} else {
  for (let i = 2; i < value; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// WHILE

let i = 2;
if (!value) {
  console.log("Помилка: введіть число");
} else {
  while (i < value) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

// завдання 2

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// завдання 3

let string = "42559125";
let result = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] < "5") {
    result += "0";
  } else {
    result += "1";
  }
}

console.log(result);
