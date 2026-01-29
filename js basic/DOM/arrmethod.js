// 1. for...in → ONLY for objects (gives you the KEYS/property names)
const person = { name: "Ali", age: 28, city: "Karachi" };

for (let key in person) {
  console.log(key, "→", person[key]);     // ← key is the property name
}
// Correct output:
// name → Ali
// age → 28
// city → Karachi


// 2. for...of → ONLY for iterables (arrays, strings, etc.) → gives you VALUES directly
const fruits = ["mango", "banana", "apple"];

for (let fruit of fruits) {
  console.log(fruit);          // ← directly the value
}
// Output:
// mango
// banana
// apple

// Array.isArray()


// forEach is used on:
//does not return
// Yes (can be used directly):
// Arrays
// Maps
// Sets
// NodeList (from querySelectorAll)
// HTMLCollection (sometimes, but better convert to array first)

// No (cannot be used directly):
// Plain objects {}
// Strings
// Numbers
// null / undefined
// Regular objects that are not iterable in this way



// Method,What it returns,Returns as,"Example output for {name: ""Ali"", age: 25}"
// Object.keys(obj),Only keys/property names,Array of strings,"[""name"", ""age""]"
// Object.values(obj),Only values,Array of values,"[""Ali"", 25]"
// Object.entries(obj),"Array of [key, value] pairs",Array of arrays,"[ [""name"", ""Ali""], [""age"", 25] ]"

// 1. Arrow function (most common)
// Object.keys(person).forEach(key => console.log(key, person[key]));

// // 2. With destructuring (very clean)
// Object.entries(person).forEach(([key, value]) => console.log(key, value));

// // 3. Old-school function (still works)
// Object.keys(person).forEach(function(key) {
//   console.log(key, person[key]);
// });


// 4. You can use index too (2nd parameter)
// Object.keys(person).forEach((key, index) => {
//   console.log(index, key);
// });


// 3. Only index (rare, but possible)
// fruits.forEach((_, index) => {   // _ means "ignore first parameter"
//   console.log(`Item at position ${index}`);
// });



// Important JS Truth :
// 👉 JavaScript is technically “pass by value” ONLY
// ❗ But:
// For objects/arrays, the value itself is a reference
// So it behaves like pass by reference

//some() :checks whether at least one element in an array satisfies a given condition. It returns true if any element passes the condition; otherwise, it returns false.
//every(): checks whether all elements in an array satisfy a given condition. It returns true only if every element passes the condition; if even one element fails, it returns false.
// 👉 In short:some() = one is enough, every() = all are required.


// Destructuring → takes values out /extract -->object/array
// Spread → spreads values in/put to made a copy of array&obj into another array and object  -->object/array
//skip value with comma
// ✅ Key:
// Spread = on the right side of assignment or when using values
// It expands arrays/objects into individual elements.

// Rest Operator (...)
// Collects multiple values into one variable
// Used when you are receiving values
// Mostly seen in:function /destructuring
// ✅ Key:
// Rest = on the left side of assignment or in function parameters
// It collects values into an array/object
