
// // variable
// a= 10
// b="aqib"
// console.log(a);
// console.log(b);


// // Datatypes
//  ab="aqib"
// console.log(typeof (ab));


// // Numbers

// ac=10;
// e=10.5
// console.log(typeof a);
// console.log(typeof e);


// // Practice Qs
// let age = 23;
// age + 2; // after 2 years
// console.log(a);
// //output:25

// let hindi = 80;
// let eng = 90;
// let math = 100;
// let avg = (hindi + eng + math) / 3;
// console.log(avg);
// //output:90



// // Practics Qs
// let num = 5;
// let newNum = num++;    //newNum=5 ,num6
// newNum = ++num;     //  newNum=7
// console.log(newNum);
// //output:7

// // Practice Qs
// // // a)
// // let 1age = 5;    //identifier rules according does not start with number
// // let 2age = 10;    //identifier rules according does not start with number

// // // b)
// // let marks = 75;        //work
// // let isPass = True;     

// // // c)
// // let isPass = 'true';     //cannot redeclare block scope variable



// // Practice Qs

// // **Qs 1. String Declaration and Properties**
// // * Declare your name as a string and print its length in JS.
//   let name="aqib"
//   console.log(name.length);
// // * Declare your first name as a string and print its first character.
// let names="aqib"
// console.log(names[0]);
// // * Declare your first name as a string and print its last character.
// let namess="aqib"
// console.log(namess[namess.length-1]);

// // * What is the output of the following code:

// console.log("apnacollege" + 123);
// //output:apnacollege123
// // **Qs 3. String Lengths**

// // * What are the lengths of an empty string & a string with a single space?
// //  empty string zero and a string with single space one

// // =========================alert & Prompt

// alert("hello");
// undefined
// prompt("enter number")
// '2'

//=====================================String Methods=========================================
//=====================================trim method============================================
// let msg="aqib   ";

// console.log(msg.trim());
// console.log(msg);
//when we use trim it create a new trim of that string not changed old one
// let msg1="aqib   ".trim();
// console.log(msg1);

//======================================Immutable String======================================
//when we doo something on string it creates a new string but does not change old one

//=============================uppercase&&lowercase===========================================
// let a="aqib";
// let b=a.toUpperCase();
// console.log(b);

// let c="AQIB";
// let d=c.toLowerCase();
// console.log(d);
// let e=d.indexOf("B")
// console.log(e);
// let f=d.indexOf("b")
// console.log(f);



//======================Method Chaining=================
//use dot soo methods are linking one by one
let a="aqib";
let b=a.toUpperCase().trim();
console.log(b);