// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Using Map function
// function double(x) {
//     return x * 2;
// }
// const newNumbers = numbers.map(double);

//Using forEach loop
// var newNumbers = [];
// numbers.forEach(function (x) {
//     newNumbers.push(x * 2);
// })

//Using Map function and making it shorter
// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });


//Filter - Create a new array by keeping the items that return true.

//Using Filter function
// const newNumbers = numbers.filter(function (num) {
//     return num > 10
// });


//Using forEach loop
// var newNumber = []
// numbers.forEach(function(num) {
//     if (num < 10) {
//         newNumbers.push(num)
//     }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

//Using forEach loop
// var newNumber = 0
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber
// })

//Using Reduce function
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     console.log("accumulator = " + accumulator)
//     console.log("currentNumber = " + currentNumber)
//     return accumulator + currentNumber;
// })

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//     return num > 10;
// })

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//     return num > 10;
// })

import emojipedia from "./emojipedia";

//Long way function
// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//     return emojiEntry.meaning.substring(0, 100)
// })

//Short way function
const newEmojipedia = emojipedia.map(emojiEntry => emojiEntry.meaning.substring(0, 100))

console.log(newEmojipedia)
