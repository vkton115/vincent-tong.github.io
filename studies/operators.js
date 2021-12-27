/**
 * OPERATORS
 * 
 * 0. Operands are any individual value that is involved in an operation.
 * 
 * 1. Operators are special symbols we use to perform operations. operators can be as simple as a "+" symbol used in an addition operation. However, there are some more unique
 * operators that we can use to compare and change various data types.
 * 
 * 2. There are a number of different types of operators: Arithmetic, Assignment, Comparison, Logical, Unary, & Ternary
 */

//1. ARITHMETIC OPERATORS//

//These operators can typically be used in straightforward mathematical operations. However, this does not mean that they're simple. In fact, some of them have unique features.

//1a. Addition:
//description: uses the plus(+) symbol to find the sum of the values on both sides of the operator
var x = 7 + 14;
console.log(x); // => 21

//Special note: The additional operator can also be used to concatenate (or combine) string values:
var string1 = " is the ";
var string2 = "legal age to drink."
console.log(string1 + string2); //=> " is the legal age to drink"

//you can also add numbers to string values but the result would still be a string
console.log(x + string1 + string2); // => "21 is the legal age to drink"

//1b. Subtraction:
// description: uses the minus(-) symbol to deduct the value on the right of the symbol from the left value
var x = 21 - 8;
console.log(x); //=> 13

//unlike addition, subtraction can not be used with strings, as it only takes in number values.
var x = 21;
var string = "Eight";
console.log(x - string); //=> NaN (not a number)

//1c. Multiplication:
//description: uses the asterisk(*) symbol to multiply both values on each side of the operator
var x = 10;
var y = 5;
console.log(x * y); //=> 50;

//1d. Division:
//description: uses the backslash(/) symbol to divide the value on the left side of the operator by the value of the number on the right side.
var x = 100;
var y = 25;
console.log (x / y); //=> 4

//1e. Remainder:
//description: uses the percentage(%) symbol. Similar to division, however, if the number cannot be divided into a whole number, it will return the remainder after division
var x = 10;
var y = 3;
console.log(x % y); //=> 1 (10 can only be divided by 3 three times. afterwards, the remainder is 1)

//1f. Increment:
//description: uses two plus (++) symbols. The symbol can appear on either side of the variable/number and will increase it by 1.
var x = 4;
x++;
console.log(x); // => 5
++x;
console.log(x); // => 6

//1g. Decrement:
//description: uses two minus (--) symbols. Similar to the increment with the exception of it decreasing the value by 1.
var x = 11;
--x;
console.log(x); //=> 10
x--;
console.log(x); // => 9

//1h. Exponentiation
//description: uses two asterisk (**) symbols. Will take a value on its left side and raise it to the power of the value on its right side
var x = 10;
var y = 3;

console.log(10 ** 3); // 1000 (reads as 10 * 10 * 10)

//2. ASSIGNMENT OPERATORS//
// The assignment operator uses the equal (=) symbol to assign values to variables
var a = 5;
console.log(a); //=> 5

//2a. Addition assignment:
a += 2;
console.log(a); //=> 7 (a = 5 + 2)

//2b. Subtraction assignment:
a -= 3;
console.log(a); // => 4 (a = 7 - 3)

//2c. Multiplication assignment:
a *= 5;
console.log(a); // => 20 (a = 4 * 5)

//2d. Division assignment:
a /= 2;
console.log(a); // => 10 (a = 20 / 2)

//2e. Remainder assignment:
a %= 4;
console.log(a); // =>2 (a = 10 % 4)

//2f. Exponentiation assignment:
a **= 3;
console.log(a); // => 8 (a = 2 * 2 * 2)

//3. COMPARISON OPERATORS//
//Comparison operators take two values to compare and return a boolean value: true or false.

//3a. Equal To
//Description: the Equal To operator uses a double equal (==) to compare if two values are of equal value
var x = 5;
var y = 5;
var z = 7;

console.log(x == y); // => true
console.log(x == z); // => false

// equal 2 will see numbers written as strings equal to their number dataype counterpart.
var x = 5;
var y = "5";

console.log(x == y); // true

//3b. Not Equal To
//Description: uses an exlaimation mark followed by an equal sign (!=) and returns true if the two values being compared are not equal. false if they are.
var x = 5;
var y = 5;
var z = 7;

console.log(x != y); //=> false
console.log(x != z); //=> true

//3c. Strictly Equal To
//Description: uses a triple equal (===) symbol to see if two values are both equal and of the same data type
var x = 5;
var y = 5;
var z = "5";

console.log(x === y); //=> true
console.log(x === z); //=> false

//3d. Strictly Not Equal To
//Description: uses an exclaimation mark followed by double equal signs (!==) to test if two values are not equal or of the same datatype
var x = 5;
var y = 5;
var z = 10;

console.log(x !== y); //=> false
console.log(x !== z); // => true

//3e. Greater Than
//Description: uses the > symbol to test if a value is greater than another value
var a = 5;
var b = 5;
var c = 10;
var d = 2;

console.log(a > b); //=> false (5 is not greater than 5)
console.log(a > c); //=> false (5 is not greater than 10)
console.log(a > d); //=> true (5 is greater than 2)

//3f. Greater Than or Equal To
//Description: uses the greater than symbol followed by an equal sign (>=) to test if a value is greater than OR equal to another value
var a = 5;
var b = 5;
var c = 10;
var d = 2;

console.log(a >= b); //=> true (5 is equal to 5)
console.log(a >= c); //=> false (5 is not greater than 10)
console.log(a >= d); //=> true (5 is greater than 2)

//3g. Less Than
//Description: uses the < symbol to test if a value is less than another value
var a = 3;
var b = 2;
var c = 4;

console.log(a < b);// => false (3 is not less than 2)
console.log(a < c);//=> true (3 is less than 4)

//3h. Less Than or Equal To
//Description: uses the less than symbol followed by an equal sign (<=) to test if a value is less than OR equal to another value
var a = 3;
var b = 3;
var c = 2;
var d = 4;

console.log(a <= b);// => true (3 is equal to 3)
console.log(a <= c);//=> false (3 is not less than 2)
console.log(a <= d);// => true (3 is less than 4)

//4. LOGICAL OPERATORS//
//Logical operators are used to perform logical operations and return a boolean value: true or false

//4a. Logical AND
//Description: uses a double ampersand (&&) and returns true if ALL operands connected with && are true. else returns false 
var a = 0;
var b = 5;
var c = 10;

console.log(b > a && b < c); // => true (5 is greater than 0 AND 5 is less than 10)

//4b. Logical OR
//Description: uses || and returns true if either operand returns true. if all operands return false, returns false
var a = 0;
var b = 5;
var c = 10;

console.log(b < a || b < c); //=> true (5 is not less than 0 BUT it is less than 10)

//4c. Logical NOT
//Description: uses an exclaimation mark to return true if an operand is false, and vice versa.
var a = 1;
var b = 3;
console.log(a < b); // => true (1 is less than 3)
console.log(!(a < b)); // => false (1 being less than 3 is True, therefor return false)

//UNARY OPERATORS//
//Unary Operators are operations that have only one operand on either side of the operator.
// We have already seen some examples above such as: plus (+), minus/negation (-), increment (++), decrement (--), logical NOT (!)
//some other types of unary operators include:

//typeOf
//Description: returns a string that indicates the datatype of the operand
var a = "Hello";
var b = 42;
var c = true;

console.log(typeof a);// => 'string'
console.log(typeof b);// => 'number'
console.log(typeof c);// => 'boolean'

//TERNARY OPERATORS//