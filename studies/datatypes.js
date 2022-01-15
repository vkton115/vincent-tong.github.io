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
var obj = {};
//within the braces, they have keys that are followed by their respective values. These are key-value pairs, or properties of the object.
var carObject = {
    name: "Mazda3",
    color: "Silver",
    year: 2014
}

//There are two ways to access the properties of objects: dot notation & bracket notation

//dot notation
console.log(carObject.name);//=> "Mazda3"

//bracket notation
console.log(carObject["year"]);//=> 2014 (the key should be in quotes to denote it as a string)

//properties of an object can be deleted in a similar sense akin to arrays
delete carObject.name;
console.log(carObject);//=>{ color: 'Silver', year: 2014 }

//3 FUNCTIONS
//functions are a set of statements used to perform certain tasks in our code

//functions are declared by using the function keyword followed by: the name of the function, its parameters (enclosed in parenthesis), and the statements
// that define the function enclosed in curly braces.

function add(num1, num2){
    return num1 + num2;
}

//the above function is declared with the name 'add'. it takes in two parameters: num1 and num2 and returns the sum of the two numbers.
//next, to use this function we have to initiate a function call by using the function name and adding in our own parameters.

console.log(add(1, 5)); //=> 6

//you can also set default parameters for the instances in which you call the function without having all the parameters filled

function subtract(num1, num2 = 2){
    return num1 - num2;
}

console.log(subtract(5));//=> 3 (returns 5 - 2 since the second number parameter was not provided)

//parameters of a function can be accessed similarly to arrays using bracket notation
function parameterTest(string, num, bool){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

console.log(parameterTest("Hello", 42, true)); //=> "Hello" 42 true

//if you do not know how many parameters your function will take in, you can use a rest parameter
//the syntax for a rest parameter is three dots followed by the name of the parameter
function multiplier(num1, ...nums){

//this essentially creates an array of parameters that you can access with bracket notation throughout your function
    var numsArr = [];
    numsArr.push(num1 * nums[0]);
    numsArr.push(num1 * nums[1]);
    numsArr.push(num1 * nums[2]);
    return numsArr;
  }
  
  console.log(multiplier(5, 2, 1, 3)); //=> [ 10, 5, 15 ]

//function expressions can also be declared anonymously without a name
var square = function(length, width){
    return length * width;
}

//they can also be declared with a name
var cube = function cubic(length, width, height){
    return length * width * height
}

//4 UNDEFINED
// the 'undefined' datatype refers to a variable that has not been given a value.
var x = "7";
var y;

console.log(x); //=> "7"
console.log(y);//=> "undefined"

//you can use typeof to use undefined variables as conditional statements
if (typeof y === "undefined"){
    console.log("y is undefined") //=> "y is undefined"
}

//5 NULL
// the 'null' is similar to undefined in that it is the absense of a given value. The main difference being that we use null to intentionally give no value to an object.

//when comparing null and undefined non-strictly, it will return true
console.log(null == undefined);//=> true

//however, this is not true for a strictly comparison
console.log(null === undefined);//=> false

//the following example shows a situation in which we would want to intentionally have the absense of a value

function area(width, length){
    if (width > 0 && length > 0){
        return width * length;
    } else {
        return null;
    }
}
console.log(area(3, 4)); //=> 12 (both values are above 0 and therefore will calculate the area)
console.log(area(0, 4));//=>null (the width parameter is not greater than 0. Since you cannot calculate area with no width, we return null)
console.log(area(2, 0));//=> null (similar to the above except with the length parameter);


//6 NaN

//NaN, or 'Not-A-Number', is a variable in the global scope. the value of NaN cannot typically be overwritten or reassigned.

//There are five situations in which an operation will return NaN

//6a. Parsing
// parsing can be used to convert a string of a number into an actual number datatype like so:
var num = "10";
console.log(num + 20); //=> "1020" (returns a string of '1020')

console.log(parseInt(num) + 20); // => 30 (turns the string '10' into the actual number 10 and can therefore be added to 20)

//however, if the ParseInt function takes in a parameter that cannot be converted to a number, it will return NaN.
var fakeNum = "ten";
console.log(parseInt(fakeNum)); //=> NaN

//6b. Math operation in which the result is not a real number
console.log(Math.sqrt(-1))//=> NaN (the square root of -1 is, in mathematical terms, an imaginary number)

//6c. If NaN itself is being used in a mathematical operation
console.log(5 + NaN);//=> NaN

//6d. A mathematical operation involing a string, with the exception of the "+" operator
console.log("Hello" + 7);//=> "Hello7"
console.log("Hello" / 7);//=> NaN

//6e. an operation involving two values that result in an indeterminate form
console.log(null + undefined);//=> NaN
console.log("Hello" / undefined);//=> NaN
console.log(Infinity * 0); //=> NaN

//7 INFINITY & -INFINITY
//Infinity, or positive infinity, is a property of the global object with a value greater than any finite number.
console.log(Infinity > 1000000000000); //=> true

//-Infinity, or negative infinity, is similar with the aspect of it being less than any other finite number
console.log(-Infinity < -20000000000); //=> true

//both are categorized as a number type
console.log(typeof Infinity)//=> "number"
console.log(typeof -Infinity)//=> "number"

//Mathematical operations with infinity yield some interesting results

console.log(Infinity + 1); //=> Infinity
console.log(Infinity * Infinity);//=> Infinity
console.log(Infinity / Infinity); //=> NaN
console.log(Infinity % 2); //=> NaN
console.log(42 / Infinity);//=> 0 (a number divided by Infinity results in 0)
console.log(2/0);//=> Infinity (normally a number divided by 0 will result as undefined. In Javascript, it results in Infinity)

//Javascript has a function that can determine if a value is finite
console.log(Number.isFinite(Infinity));//=> false
console.log(Number.isFinite(444*22));//=> true

//Infinity is useful for comparisons of numbers such as finding the minimum value in an array of numbers
function minValue(numArray){
    let min = Infinity;
    for (let num of numArray){
        min = Math.min(min, num);
    }
    return min;
}

minValue([1, 0, -1, 55, 24]); //=> -1

//8 PRIMITIVE VS COMPLEX DATA TYPES
//primitive data types are data that is not an object and have no methods.

//of the data types we've talked about the following are primitive: Strings, Numbers, Booleans, Undefine, & Null.
//complex data types include: arrays, objects, date

//primitive values are immutable, meaning they cannot be changed in the way objects, arrays, and functions can. 

var primData = "string";
console.log(primData); //=> "string"
primData.toLowerCase();
console.log(primData); //=> "string"

//as seen above, the "string" datatype is unchanged by the .toLowerCase method.
var arr = [];
console.log(arr); //=> []
arr.unshift(7);
console.log(arr); //=> [7]
//the above shows how an array, a complex data type, is changed by a method (.unshift) and therefore makes it mutable.

//primitive data types can however be reassigned like so:
var primData = primData.toUpperCase();
console.log(primData);// => "STRING"

//Primitive data types are passed to a function by COPY/VALUE

//this means that javascript copies the value of the variables being passed in as arguments inside of the function like so:
function cubed(num){
    num = num * num * num;
    return num;
}
var x = (5);
var result = cubed(x);
// when x is passed in to the cubed function, it is passed in as a COPY of x.
//the cubed function changes the num variable  and will not change the value of x

console.log(x); // => 5 (the value of x does not change after the cubed function is runs);
console.log(result);// => 125

//Complex data types are passed to a function by REFERENCE

//this means that any changes made to the argument variable inside of the function affects the variable outside of the function.

var obj = {a: 1, b: 2, c: 3};
console.log(obj); //=> {a: 1, b: 2, c: 3}; this is the value before calling the object as an argument in a function

changeObj(obj); //calling the function

function changeObj(obj){
    obj.c = 300;
    console.log(obj);//=>{a: 1, b: 2, c: 300} inside of the function, the 'c' key is changed to 300
}


console.log(obj); //=>{a: 1, b: 2, c: 300} outside of the function, obj is now updated with the 'c' key value equaling 300.

//as we can see, the changes made to the object's properties are still kept outside of the function.