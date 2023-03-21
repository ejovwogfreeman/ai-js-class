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

// let sentence = "Hello today is a beautiful day";

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

// let name = prompt("What is your name?");
// let surName = prompt("What is your surname?");

// if (name[name.length - 1] === surName[surName.length - 1]) {
//   console.log("Good Job!!!");
// } else {
//   alert("Condition not met");
// }

// your assignment:
// wirte a program that will take a user input of a number
// and alert the sum of all the digits that make up the number

// e.g when a user enters 11 it will alert 2
// e.g when a user enters 555 it will alert 15
// e.g when a user enters 3256 it will alert 16

// let number = prompt("please enter a number");
// let numberArr = number.split("");

// let acc = 0;
// for (let i = 0; i < numberArr.length; i++) {
//   acc += Number(numberArr[i]);
// }
// console.log(acc);

// ARRAYS
// var names = ["faith", "jb", "profit"];
// var arr = [
//   "godbless",
//   true,
//   30,
//   "emmanuel",
//   { surname: "ejovwo" },
//   [10, 20, 30],
// ];
// console.log(arr[5][2]);

// Array properties
// let names = ["godbless", "freeman", "elon", "bill", "steve"];
// // push adds to the end of an array
// names.push("profit", "precious", "phieght");
// // pop removes from the end of an array
// names.pop();
// names.pop();
// // unshift adds to the beginning of an array
// names.unshift("jb");
// // shifts removes from the beginning of an array
// names.shift();
// console.log(names.splice(0, 3));
// console.log(names.slice(0, 3));
// slice can repalce any element on any osition in an array
// names.splice(2, 1, "Zuckeberg");
// console.log(names);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// assignment
// write code to add the element of an array
// e.g [20,10,30] will print 60

let num = [20, 10, 30, 33.3];

// let acc = 0;
// for (let i = 0; i < num.length; i++) {
//   acc += num[i];
// }
// console.log(acc);

// break and continue

// print even numbers
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// break
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// continue
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// while

// while(condition){
//     codeblock;
//     increment
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// console.log(num.sort((a, b) => b - a));

// forEach
// num.forEach((x) => console.log(x));

// map
// num.map((x) => console.log(x));

// let days = ["sunday", "monday", "tuesday"];
// let hour = new Date().getHours();
// if (hour > 0 && hour < 12) {
//   console.log("good morning");
// } else if (hour >= 12 && hour < 16) {
//   console.log("good afternoon");
// } else if (hour >= 16 && hour < 21) {
//   console.log("good evening");
// } else {
//   console.log("good night");
// }

// for (let i = 0; i < days.length; i++) {
//   if (date === i) {
//     console.log(days[i]);
//   }
// }

// let names = ["gb", "fm", "lc"];

// let person = {
//   name: "gb",
//   age: 75,
//   isMarried: true,
// };

// console.log(names);
// console.log(person);

// var name = prompt("please enter your");

// if (name) {
//   alert(name + " you are welcome");
// } else {
//   while (name === "") {
//     name = prompt("you must enter a name");
//     if (name) {
//       alert(name + " you are welcome");
//     }
//   }
// }

// if (name === "") {
//   name = prompt("you must enter a name");
//   alert(name + " you are welcome");
// } else {
// }

// class work

// const company = [
//   {
//     id: 1,
//     name: "google",
//     staffs: 23,
//     startYear: 1974,
//     isTech: true,
//   },
//   {
//     id: 2,
//     name: "facebook",
//     staffs: 13,
//     startYear: 2004,
//     isTech: true,
//   },
//   {
//     id: 3,
//     name: "gucci",
//     staffs: 37,
//     startYear: 1990,
//     isTech: false,
//   },
//   {
//     id: 4,
//     name: "amazon",
//     staffs: 15,
//     startYear: 1996,
//     isTech: true,
//   },
//   {
//     id: 5,
//     name: "microsoft",
//     staffs: 25,
//     startYear: 1975,
//     isTech: true,
//   },
//   {
//     id: 6,
//     name: "starlink",
//     staffs: 29,
//     startYear: 1999,
//     isTech: true,
//   },
//   {
//     id: 7,
//     name: "Nadia",
//     staffs: 30,
//     startYear: 2005,
//     isTech: false,
//   },
// ];

// console.log(company);

// questions
// 1) return only the tech companies
// 2) claculate the total number of staffs in all the companies
// 3) return companies the starts before 2000
// 4) retrun the sum of staffs in the comapny with the highest number of staffs and the lowest of staffs
// 5) retrun the number of staffs in the oldest and the youngest company
// 7) return the companies with number of staffs greater than 30
