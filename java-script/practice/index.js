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

var numbers = [5,10,50,100,200,300,];

var smallestNumber = 0

for (let i = 300; i > 0; i--) {

  if (numbers[i] < smallestNumber) {
    
    largestNumber = numbers[i];
  }

}

console.log(smallestNumber);
