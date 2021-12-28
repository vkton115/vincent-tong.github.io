/**
 * DATATYPES:
 * 0. There are numerous types of data in javascript, each used to represent a certain classification of data.
 * 
 * 1. Understanding how they are written and how they react with your program is fundamental in understanding the limits of your code.
 * 
 * 2. The main datatypes can be classified as simple (or primitive) and complex.
 */

//1.SIMPLE DATA TYPES

//1a. Numbers

//numbers in javascript can be simply written as is to represent their respective value
var x = 42 //=> 42

//simple numbers can also be written as strings and still represent their respective value
var x = 30;
var y = "20";

console.log(x - y);//=> 10 (read as 30 - 20)

//However in the example above, using addition has an interesting affect on numbers written as strings
console.log(x + y);//=> "3020" (the addition is read as concatenating the two values into a new string)

//Numbers can also be written in decimals or even exponential notation
var x = 42.07 //=> 42.07
var y = 123e5 //=> 1230000.00123

//when used in conjunction with arithmetic operators, they can work in a similar fashion to a calculator:
var x = 72 / 9; //=> 8

//when using numbers with arithmetic operators, the order of operations follow the standard rule of PEMDAS
// Parenthesis > Exponents > Multiplication > Division > Addition > Subtraction
var x = (5 + 5)**2 * 4 + 4 / 4 - 2;
(10)**2 * 4 + 4 / 4 - 2;
100 * 4 + 4 / 4 - 2;
400 + 4 / 4 - 2;
400 + 1 - 2;
401 - 2;
399;
console.log(x); //=> 399

//When used in conjunction with comparitive operators, they will return a boolean value of true or false
var x = 1 < 3;
console.log(x); //=> true

var y = 1 > 3;
console.log(y); //=> false

//As mentioned previously, string versions of simple numbers can be read as equal to their number counterparts
var x = (1 == "1");
console.log(x);//=> true

//However, when using the strictly operator, the result differs
var y = (1 === "1");
console.log(y);//=> false

//1b. Strings
//Strings are a sequence of characters that exist as an object in java
//They are created by inserting characters between two quotes (either double or single quotes is fine but best practice is to remain consistent in your coding)
var stringOne = "string";
var stringTwo = 'string';
var stringThree = 'String';
console.log(stringOne === stringTwo); //=> true. double or single quotes do not effect the value of two strings with the same sequence of characters

console.log(stringOne === stringThree);//=> false. However, capitalization does affect the value of a string

//1c. Booleans
//Booleans are typically associated with conditional statements and are used to general control the flow of our program.
//They achieve this by resulting in two possibilities: true or false

function test(num1, num2){
    if (num1 < num2){
        return num1 + num2;
    } else if (num1 > num2){
        return num1 - num2;
    }
}

test(3, 2); //=> 1. (in the above function, it first tests if 3 is less than 2, which is false. therefore it moves to the next conditional to test if 3 is greater than 2, which is true)

//2. COMPLEX DATA TYPES
//2a. Arrays
// Arrays are used to list data types. They are declared by using brackets like so:
var array = [];

//They can hold a variety of different data types:
var array = ["strings", 42, true, undefined, null, NaN];

//In order to access specific elements within the array, you would use an index. Special note: arrays have a zero index, meaning the 1st item of the list starts at the 0 index
console.log(array[0])//=> "strings"
console.log(array[1])//=> 42
console.log(array[2])//=> true