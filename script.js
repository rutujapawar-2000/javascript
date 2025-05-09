// VARIABLES & DATA Types Practice Questions
// Problem 1: Create a variable of type string and try to add a number to add a number to it 
let a = "Rutuja";
let b = 25;
console.log(a + b)
 // Problem 2: Use typeof operator to find a data type of the string in last question 
console.log(typeof (a+b));
 // Problem 3: Create a const object in JS. Can you change it to hold a number later? 
const c = {
name: "Rutik",
section: 1,
};
console.log(c);
 // c = 2000  //it will throw error 
 // Problem 4: Try to add a new key to the const object in problem 3, where you able to do it? 
c['Friend'] = "Somu"
c['name'] = "Rutuja"
console.log(c)
 // Problem 5: Write a JS program to create a word meaning dictionary of 3 words 
const dict = {
who: "kon",
What: "kay",
When: "kdhi"
}
console.log(dict);
console.log(dict.who);

 // write a JS program to store a name, phone number, and marks of a student using object 
let student = {
name: "Rutuja",
phoneNumber: "1122334455",
marks: 64
}
console.log(student)

// A basic program to explore SWITCH Statement
let dayNumber = prompt("Enter a number between 1 and 7 to know the day:");

switch (dayNumber) {
  case "1":
    alert("Sunday");
    break;
  case "2":
    alert("Monday");
    break;
  case "3":
    alert("Tuesday");
    break;
  case "4":
    alert("Wednesday");
    break;
  case "5":
    alert("Thursday");
    break;
  case "6":
    alert("Friday");
    break;
  case "7":
    alert("Saturday");
    break;
  default:
    alert("Invalid input! Please enter a number between 1 and 7.");
}

// A basic program to explore TERNARY Operator
let age = prompt("What is your age?");
age = Number.parseInt(age);

let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote);

// EXPRESSIONS & CONDITIONS Practice Questions
// Problem 1: Use logical operators to find whether the age of a person lies between 10 & 20
let age = prompt("What is your age?")
if(age>10 && age<20){
console.log("Your age lies between 10 and 20")
}
else{
console.log("Your age doesnt lies between 10 and 20")
}
// Problem 2: Demonstrate the use of Switch case statements in JS
let age = prompt("What is your age?")
switch(age){
case "12":
alert("Your age is 12");
 break;
 case "13":
alert("Your age is 13");
 break;
 case "14":
alert("Your age is 14");
 break;
 case "15":
alert("Your age is 15");
 break;
 default: 
 console.log("Your age is not special")
}
// Problem 3: Write a JS program to find whether a number is divisible by either 2 or 3
let num = prompt("What is your age?")
num = Number.parseInt(age)
if(num%2==0 && num%3==0){
	alert("Your number is divisible by 2 and 3")
}
else {
	alert("Your number is not divisible by 2 and 3")
}
// Problem 4: Write a JS program to find whether a number is divisible by either 2 or 3
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0) {
console.log("Your number is divisible by 2")
} if (num % 3 == 0) {
console.log("Your number is divisible by 3")
}
// Problem 5: Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator
let age = prompt("What is your age?");
age = Number.parseInt(age);
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)

// Loops
// For loop
//Program to print first 10 Natural numbers
for (let i = 1; i <= 10; i++){
console.log("Number:", i);
} 
// Program to add first n Natural Numbers
let sum = 0
let n = prompt("Enter the value of n");
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// For...in loop
// Print all keys and values of an object
const person = {
name: "Rutuja",
age:25,
city: "Pune"
};
for (let key in person) {
console.log(key + ":", person[key]);
}
// Print names and marks from an object
let obj = {
Rutuja: 50,
Rutik: 60,
Neha: 70,
Minal: 80,
Prasad: 90
}
for (let key in obj){
console.log("Marks of " + key + " are " + obj[key])
}
// For...of loop
// Print each character of a string using for...of loop
const name = "Riya";

for (let char of name) {
  console.log(char);
}
// Print each value of an array using for...of loop?
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}















