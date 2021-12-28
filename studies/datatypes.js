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

//In order to access specific elements within the array, you would use bracket notation with an index value. Special note: arrays have a zero index, meaning the 1st item of the list starts at the 0 index
console.log(array[0]);//=> "strings"
console.log(array[1]);//=> 42
console.log(array[2]);//=> true

//There are a multitude of methods that can be used with arrays. The .length method can be used to determine how many items are in the array
console.log(array.length);// => 6 (because there are currently 6 items in our array)

//The .length method can also be used to see the last element of the array
console.log(array[array.length-1]); //=> NaN (we use -1 because arrays start at the 0 index)

//indexes can also be used to change the values of the element
array[1] = 50;
console.log(array); //=>["strings", 50, true, undefined, null, NaN]

//more methods can be used with arrays include: .shift, .unshift, .pop, .push, .toString, .join, .concat, delete, .splice, .slice

//.shift
//This method removes the first item of an array
var array = ["A", "B", "C"];
array.shift();
console.log(array); //=> ["B", "C"]

//.unshift
//This method adds an item to the front of an array
array.unshift("A");
console.log(array); //=> ["A", "B", "C"]

//.pop
//This method removes and item at the end of an array
array.pop();
console.log(array); //=> ["A", "B"]

//.push
//This method adds an item to the end of an array
array.push("C");
console.log(array);// => ["A", "B", "C"]

//.toString
//This method converts an array into a string separated by a comma
var array = ["A", "B", "C"];
console.log(array.toString()); //=> "A,B,C"

//.join
//Similar to .toString but it can specify what each element will be separated by
console.log(array.join("*")); //=> "A*B*C"

//.concat
//This method is used to combined two existing arrays into a new array
var array1 = ["A", "B", "C"];
var array2 = ["D", "E", "F"];

var newArray = array1.concat(array2);

console.log(newArray); //=> [ 'A', 'B', 'C', 'D', 'E', 'F' ]

//delete
//This method can be used to delete a specific element from an array
delete newArray[2];
console.log(newArray); //=>[ 'A', 'B', <1 empty item>, 'D', 'E', 'F' ]

//.splice
//This method is used to add new items to an array
//The syntax for this method is .splice(parameter1, parameter2, parameterN)
//parameter1 defines the index at which the new elements should be added
//parameter2 defines how many elements should be removed
//parameterN defines the value(s) of the new elements to be added

var array = ["A", "B", "F"];
array.splice(2, 1, "C", "D", "E"); //at the 2 index, removed 1 element ("F"), add new elements "C", "D", and "E"
console.log(array);// =>[ 'A', 'B', 'C', 'D', 'E' ]

//This method can also be used to remove elements by omitting parameterN
array.splice(2, 2);//at the 2 index, removed 2 elements ("C" and "D")
console.log(array);//=>[ 'A', 'B', 'E' ]

//.slice
//This method cuts a piece of an array into a new array

var newArray = array.slice(1); //starting at index 1 
console.log(newArray);//=> [ 'B', 'E' ]

//2b. Objects
//While arrays are more like lists and can contain a multitude of at time, seemingly random values, objects have properties that can be seen as characteristics of itself.

//objects are declared by using curly braces {}
var carObject = {
//within the braces, they have keys that are followed by their respective values. These are key-value pairs, or properties of the object.
    name: "Mazda3",
    color: "Silver",
    year: 2014
}

//There are two ways to access the properties of objects: dot notation & bracket notation

//dot notation
console.log(carObject.name);//=> "Mazda3"

//bracket notation
console.log(carObject["year"]);//=> 2014 (the key should be in quotes to denote it as a string)