// Assinment 1

//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// Example : input = [1, -4, 12, 0, -3, 29, -150] => output= 42

let arr = [1, -4, 12, 0, -3, 29, -150];
let out = arr
  .filter((num) => num > 0)
  .reduce((accum, num1) => {
    return (accum += num1);
  }, 0);
console.log(out);

/////////////////////////
const numbers = [1, -4, 12, 0, -3, 29, -150];
const positiveAddsUp = (arr) => {
  return arr
    .filter((num) => num > 0)
    .reduce((accum, value) => {
      consuole.log(accum);
      console.log(value);
      return accum + value;
    }, 0);
};
console.log(positiveAddsUp(numbers));

// Assignment 2

// Write a JS code that calculates the average of scores that students took in a math class below.
// Example : input=const scores = {  Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60,} => output = 76

let obj = {
  Mary: 85,
  Susan: 75,
  Barry: 65,
  Alexis: 88,
  Jane: 45,
  Tina: 100,
  Tom: 90,
  Tim: 60,
};
let arr = Object.values(obj);
let sum = arr.reduce((accum, num) => (accum += num));
let average = sum / arr.length;
console.log(average);

///////////////////////////////

const averageGrade = (obj) => {
  const arr = Object.values(obj);
  let sum = arr.reduce((accum, num) => (accum += num), 0);
  let average = sum / arr.length;
  return average;
};
console.log(averageGrade(obj));

// Assignment 3

// Write a JS code to display the repetition number of each character in a string.
// Example: input = "www.clarusway.com" => output = {'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1, 's': 1, 'y': 1, 'o': 1, 'm': 1}

let input = "www.clarusway.com";
let obj = {};
let arr = input.split("");
arr.forEach(function (letter) {
  obj[letter] = (obj[letter] || 0) + 1;
});
console.log(obj);

/////////////

let text = "www.clarusway.com";
const letterCounter = (str) => {
  const newArr = str.split("");
  const newObj = newArr.reduce((acc, letter) => {
    // if(acc[letter]) acc[letter]++
    // else acc[letter] = 1
    acc[letter] ? acc[letter]++ : (acc[letter] = 1);
    return acc;
  }, {});
  return newObj;
};
console.log(letterCounter(text));

// Assignment 4

// Write a JS code to find the numbers that are greater than 150 in the text below, and sort these numbers.
// Example: input= 'Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.' => output= [167, 1976, 1981}

let input =
  "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.";
let arr = input.split(" ");
let newArr = [];
newArr.push(
  arr
    .filter((elem) => elem > 150)
    .sort()
    .join(", ")
);
console.log(newArr);

/////////////////

let checkAndSort = (str) => {
  let arr = str.split(" ");
  let newArr = [];
  arr.forEach((element) => {
    if (!isNaN(element)) newArr.push(+element);
  });
  console.log(newArr);
  return newArr.filter((number) => number > 150).sort();
};
console.log(checkAndSort(input));
