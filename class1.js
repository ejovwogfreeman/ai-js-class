// variable declaration

// var x = 23;

// var x;

// x = 23;

// var x = 23;

// var y = 24;

// var x, y;

// x = 23;

// y = 24;

// console.log(x + y);

// numbers

// js operators
// 1) arithmetic operator
// 2) assignment operator
// 3) Conditional operator
// 4) comparism operator
// 5) logical operator
// 6) Type operator

// arithmetic opertors

// +,-,*,/,%

// var x, y, z;

// x = 21;

// y = 5;

// z = x % y;

// var num = 23;

// num--;

// var x = "23";

// var x = "hello " + "faith";

// parseint
// parsefloat
// Number
// addition sign

// strings

// var name = "Precious";
// var school = "Uniben";

// var sentence = "Hello " + name + " welcome to " + school;

// var sentence = `Hello ${name} welcome to ${school}`;

// console.log(sentence);

// string indexing

// const name = "precious";
// const name2 = "PHEIGHT";

// stringName.length - 1=>>> the last index of a string
// stringName[stringName.length - 1]=>>> the last element of a string
// stringName.indexOf() =>> returns the index of a particular character or alphabet in a string
// console.log(name.indexOf("e"));

// string property =>>> stringName.length: returns the number of characters or alphabet in a string
// string methods =>>> are fucntions or methods to maniuplate a string.

// toUpperCase(), toLowerCase(), concat(), replace(), trim(), split(), slice(),substring(), substr()

// split a string method that converts string to array

// let name = "godbless";
// let sentence = "Hello " + name + " good morning.";
// console.log(sentence.concat(" Welcome to AI tech", " blaaaaaaa"));

// console.log(name.replace("god", "jesus"));

// let trimmedName = name.trim();

// console.log(name.length);
// console.log(trimmedName.length);

// var x = name.split("");

// x.push("p");

// let email = "ejovwofreeman007@gmail.com";
// email = "me@co.uk";
// email = "precious123@hotmail.com";

// console.log(email.split("@")[0]);

// var name = "godbless";

// console.log(name.substr(2, 3));

// slice(start, end)
// substring(start, end)
// substr(start, length)

let sentence = "Hello today is a beautiful day";

// to get today using all three methods
// console.log(sentence.slice(6, 11));
// console.log(sentence.substring(6, 11));
// console.log(sentence.substr(6, 5));

// using split method to get beautiful day
// let split = sentence.split(" ");
// console.log(split);
// console.log(split[4] + " " + split[5]);

// how to take a user input: prompt

// let name = prompt("what is your name?");
// alert("good morning " + name);

// var name = prompt("Hello, what is your name?");
// var amount = prompt(
//   name + " wecome to my ponzi scheme, how much would like to invest?"
// );
// alert("congratulations, your money is now N" + amount * 2);

// class work
// write a program that will take two names
// first should be your name
// second should be your surname
// condition: if last letter of name is
// not equal to last letter of surname it should
// alert condition not met, but if last letter of
// name is equal to last letter of surname it
// should print good job on your console.

let name = prompt("What is your name?");
let surName = prompt("What is your surname?");

if (name[name.length - 1] === surName[surName.length - 1]) {
  console.log("Good Job!!!");
} else {
  alert("Condition not met");
}

// your assignment:
// wirte a program that will take a user input of a number
// and alert the sum of all the digits that make up the number

// e.g when a user enters 11 it will alert 2
// e.g when a user enters 555 it will alert 15
// e.g when a user enters 3256 it will alert 16
