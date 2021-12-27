/**
 * OPERATORS
 * 
 * 0. Operators are special symbols we use to perform operations. operators can be as simple as a "+" symbol used in an addition operation. However, there are some more unique
 * operators that we can use to compare and change various data types.
 * 
 * 1. There are a number of different types of operators: Arithmetic, Assignment, Comparison, Logical, Unary, & Ternary
 */

//ARITHMETIC OPERATORS//

//These operators can typically be used in straightforward mathematical operations. However, this does not mean that they're simple. In fact, some of them have unique features.

//Addition:
//description: uses the plus(+) symbol to find the sum of the values on both sides of the operator
var x = 7 + 14;
console.log(x); // => 21

//Special note: The additional operator can also be used to concatenate (or combine) string values:
var string1 = " is the ";
var string2 = "legal age to drink."
console.log(string1 + string2); //=> " is the legal age to drink"

//you can also add numbers to string values but the result would still be a string
console.log(x + string1 + string2); // => "21 is the legal age to drink"

//Subtraction:
// description: uses the minus(-) symbol to deduct the value on the right of the symbol from the left value
var x = 21 - 8;
console.log(x); //=> 13

//unlike addition, subtraction can not be used with strings, as it only takes in number values.
var x = 21;
var string = "Eight";
console.log(x - string); //=> NaN (not a number)

//Multiplication:
//description: uses the asterisk(*) symbol to multiply both values on each side of the operator
var x = 10;
var y = 5;
console.log(x * y); //=> 50;

//Division:
//description: uses the backslash(/) symbol to divide the value on the left side of the operator by the value of the number on the right side.
var x = 100;
var y = 25;
console.log (x / y); //=> 4

//Remainder:
//description: uses the percentage(%) symbol. Similar to division, however, if the number cannot be divided into a whole number, it will return the remainder after division
var x = 10;
var y = 3;
console.log(x % y); //=> 1 (10 can only be divided by 3 three times. afterwards, the remainder is 1)

//Increment:
//description: uses two plus (++) symbols. The symbol can appear on either side of the variable/number and will increase it by 1.
var x = 4;
x++;
console.log(x); // => 5
++x;
console.log(x); // => 6

//Decrement:
//description: uses two minus (--) symbols. Similar to the increment with the exception of it decreasing the value by 1.
var x = 11;
--x;
console.log(x); //=> 10
x--;
console.log(x); // => 9

//Exponentiation
//description: uses two asterisk (**) symbols. Will take a value on its left side and raise it to the power of the value on its right side
var x = 10;
var y = 3;

console.log(10 ** 3); // 1000 (reads as 10 * 10 * 10)

//ASSIGNMENT OPERATORS//

//COMPARISON OPERATORS//

//LOGICAL OPERATORS//

//UNARY OPERATORS//

//TERNARY OPERATORS//