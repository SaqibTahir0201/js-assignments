//? practice 1
/*
let studentNumber = prompt("tell me your percentage");

if (studentNumber >= 90 && studentNumber <= 100) {
  alert("A grade");
} else if (studentNumber >= 70 && studentNumber <= 89) {
  alert("B grade");
} else if (studentNumber >= 60 && studentNumber <= 69) {
  alert("C grade");
} else if (studentNumber >= 50 && studentNumber <= 59) {
  alert("D grade");
} else if (studentNumber >= 0 && studentNumber <= 49) {
  alert("F grade");
}
console.log("according to your percentage, your grade is", studentNumber);

*/
// let names = ["hello", "world", "hi", "xyz"];

// names.push("enter new name");

// console.log(names);

// names.pop();
// console.log(names);

// names.unshift("add");

// console.log(names, names[4]);

// names.shift();

// console.log(names);

// names.splice();

// // // ?

// var cities = ["karachi", "islamabad", "quetta"];

// var userInput = prompt("enter city name");

// var isFound = false;
// for (let i = 0; i < cities.length; i++) {
//   if (userInput === cities[i]) {
//     console.log("found" + userInput);
//     isFound = true;
//     break;
//   }
// }
// if (isFound == false) {
//   console.log("not found");
// }

// for (let i = 0; i < 20; i++) {

//   if (i % 2 === 0) {
//     console.log(`even number ${i}`);
//   }

// }

// var numbers = [5,10,50,100,200,300,];

// var largestNumber = 0

// for (let i = 0; i < numbers.length; i++) {

//   if (numbers[i] > largestNumber) {

//     largestNumber = numbers[i];

//   }

// }

// console.log(largestNumber);

//?

// var numbers = [5, 10, 50, 100, 200, 300];
// var smallestNumber = 0;
// for (let i = 300; i > 0; i--) {
//   if (numbers[i] < smallestNumber) {
//     var largestNumber = numbers[i];
//   }
// }
// console.log(smallestNumber);

// let userInput = prompt("enter random number");
// let number = 25;

// while (userInput != number) {
//   userInput = prompt("try again BROOOOOOOOOO");
// }
// console.log("MUBARKAAAAAA");

// let age = +prompt("your age ?");
// let citizen = prompt("are you a citizen");
// let voter = prompt("are you a registered to vote");

// if (person >= 18) {
//   console.log("you are old enough to vote");
//   if (citizen === false) {
//     console.log("you are not a citizen");
//   } else if (citizen === true) {
//     console.log(" you are a citizen");
//   }
//   if (voter === false) {
//     console.log("you are not a registered to vote");
//   } else if (voter === true) {
//     console.log("you are a registered voter");
//   } else {
//     console.log("you are not old enough");
//   }
// }

// var sum = 0;
// debugger;
// for (var i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

//$ Prime Number

// var number = Number(prompt("Please enter a number"));
// var isPrime = true;
// for (let i = 2; i < number; i++) {
//   if (number % i === 0) {
//     console.log("not a prime number");
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime === true) {
//   console.log(number + " is a prime number");
// }

//$ 9 TABLE
// var number;

// for (let i = 1; i <= 10; i++) {
// var  number = `9 * ${i} = ${9 * i}`;
// console.log(number);
// }

//$ Leap Year
// var LeapYear = +prompt("Leap Year");

// if ((LeapYear % 4 === 0 && LeapYear % 100 !== 0) || LeapYear % 400 === 0) {
//   console.log("it's a leap year");
// } else {
//   console.log("it's not a leap year");
// }

//$ FUNCTION

// function sun(a, b) {
//
// }
// console.log(sun(1, 2));

//# or

// debugger;
// function greet(name) {
//   console.log(`hello ${name}`);
// }

// greet(prompt("what is your name"));
// debugger;

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log("i =>", i,"j => ", j);
//   }
// }
// debugger
/*
var prizeBond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
var prizeBondOpened = [1, 2, 3, 22, 33, 44, 55, 66, 77, 9, 43, 50, 30];
var userWon = []

for (let i = 0; i < prizeBond.length; i++) {
  for (let j = 0; j < prizeBondOpened.length; j++) {
    if (prizeBond[i] === prizeBondOpened[j]) {
      console.log("number",prizeBond[i] , i , j);
      userWon.push(prizeBond[i]);
    }
  }
}console.log(userWon);

*/
