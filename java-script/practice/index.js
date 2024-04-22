// let calculator = (num1, num2, operator) => {
//   let result;
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       result = num1 - num2;
//       return result;
//     case "*":
//       return result;
//     case "/":
//       if (num2 === 0) {
//         return "0 is not allowed";
//       } else {
//         retuen = num1 / num2;
//         return result;
//       }
//     default:
//       return "no operator found";
//   }
// };
// console.log(calculator(5,2,"+"));
/*
let isPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  // if (str === reverse) {
  //   return alert ("true") ;
  // } else {
  //   return  alert ("false");
  // }
  return str === reverse ? alert ("yes "+ userInput + " is palindrome") : alert ("false " + userInput + " is palindrome");
};
let userInput = prompt("Enter string")
console.log(isPalindrome(userInput));

let fruits = ["a", "b", "c", "d", "e",]

// fruits.forEach((currentElement , index, arr)=>{
//   console.log(`${index} ${arr} ${currentElement}`);
// })


let newFruits = fruits.map((currentElement,index,arr)=>{
  return `my favorite ${currentElement}`
})

console.log(newFruits);

//$ DOM

function helloWorld() {
  console.log("heading");
}

helloWorld();


// document.getElementById("heading").innerHTML = "Hello World!";
let h1 = document.getElementById("heading")
h1.innerText = "Hello World!"
console.log(h1.innerHTML = "Hello World!");

*/
