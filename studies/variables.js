/**
 * VARIABLES
 * 
 * 0. Variables are things we create in a program in order to identify and point to a variety of data types such as: Strings, Numbers, Booleans,
 * Arrays, Objects, Functions, etc. Variables can be constantly updated and their value changed, hence the name.
 * 
 * 1. Creating a variable first starts by using the keyword "var". This is followed by a name or id. This name can typically be anything,
 * but best practice is to make sure it is something related to the purpose of the variable.
 * 
 * 2. Creating a variable consists of 2 steps: Declaration and Initialization(also known as Assignment).
 * 
 */

//1. DECLARATION//
// As explained in the intro, we can create a variable using the keyword "var" followed by an identifying name for the variable such as:
var exampleVariable;
//However, because we have not initialized, or assigned, this variable a value, it is currently considered 'undefined'.
console.log(exampleVariable) // prints => 'undefined'

//2. INITIALIZING OR ASSIGNMENT//
// Using an "=" sign following are variable declaration, we can assign our example variable a value such as:
exampleVariable = "test";
console.log(exampleVariable) // prints => 'test'

//3. REASSIGNMENT //
// Variables can constantly be updated by assigning them a new value. Previously our example variable was assigned to a value of "test".
//But what if we assign it a different value of the number 42.
exampleVariable = 42;
console.log(exampleVariable) // prints => 42

//4. LET//
// using "var" is a great way to understand the concept of using variables. However, there are other variable keywords that you'll want to know.
//using the keyword "let" differs from "var" in its scope. while "var" is scoped to the immediate function body, "let" is contained within a block scope, or {} of a function.
//'let' is almost always preferred over using 'var' since the value of 'var' can constantly be changed outside of a block scope, this may cause bugs with other parts of your
//program that uses the same variable.
//The below example will show you how 'let' is block scoped.

function test() {
    var a = "A";
    let b = "B";
    console.log(a, b); // A B
    {
      var c = "C"
      let d = "D";
      console.log(c, d); // C D
    }
    console.log(c); // C
    console.log(d); // ReferenceError: d is not defined
  }
  test();

//let can be updated
let weather = "cloudy";
console.log(weather); // => prints "cloudy"
weather = "sunny";
console.log(weather); // => prints "sunny"

//let can not be redeclared

let weather = "cloudy";
console.log(weather); // => prints "cloudy"
let weather = "sunny";
console.log(weather); // => Error: "weather" has already been declared


//5. CONST//
// using const is similar to 'let' in that it is block scoped
// 'const' can not be declared NOR can it be updated

const weather = "cloudy";
console.log(weather); // => prints "cloudy"
weather = "sunny";
console.log(weather); // => TypeError: Assignment to constant variable
const weather = "windy";
console.log(weather); // => SyntaxError: Identifier 'weather' has already been declared

//6. HOISTING//
//Hoisting is the process by which variable and function declarations are moved (or hoisted) to the top of their respective scopes before a code is executed
//Hoisting of 'var' will move the var keyword and identifying name to the top and initialize the variable as 'undefined'

console.log(pet); // => prints undefined
var pet = "dog";

// you can visualize it like this:
var pet;
console.log(pet); // => prints undefined
pet = "dog";
console.log(pet); // => prints "dog"

//Hoisting with let & const
//unlike var, which is initialized as 'undefined', the let/const keyword is not initialized, giving you a reference error if you try to use it before it is assigned.

console.log(favoriteSport); // => Reference Error
let favoriteSport = "Tennis";

console.log(hobbies); // Reference Error
const hobbies = "Art";