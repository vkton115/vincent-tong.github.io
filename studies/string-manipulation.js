/**
 * STRING MANIPULATION
 * 0. strings are a collection of characters wrapped in quotes.
 * 
 * 1. these strings can be altered, or manipulated in two ways: using string methods & using operators
 * 
 * 
 */

// 1 METHODS

//.length
//the .length method counts the amount of characters in a string, including spaces.

var str = "Hi there";

console.log(str.length); //=> 8

//.concat
//the .concat method combines two strings into one, which resolves into a new string value. This method is similar to using the plus operator, which we will talk about later

var str1 = "Hi, my name is";
var str2 = "John"

str1.concat(str2); //"Hi my name isJohn"

//if you wish to add a space or any other character in between the two strings, you can add it as the first parameter of .concat

str1.concat(" ", str2); //"Hi my name is John"

//.split
//the .split method will resolve to an array that contains the character(s) that come before and after where the given parameter appears in the original string.

var stringy = "Hello World";
console.log(stringy.split("")); // =>['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(stringy.split("o")); // => [ 'Hell', ' W', 'rld' ]

//.slice & .substring
//these methods uses a starting and stopping index to cut out a part of a string. It then returns a new string with. 

console.log(stringy.slice(1, 8)); //=> "ello Wo". the new string returns everything from the 1 index to before the 8th index

console.log(stringy.substring(1, 4));//=> "ell"


//.indexOf & .search
//both the .indexOf and the .search() perform a similar function. they take in a character parameter and will return the index in which the character appears in the string.

console.log(stringy.indexOf("l"));// => 2 (the first occurence of the character 'l' appears at the 2 index)

//if the character does not exist in the string, it will instead return a -1

console.log(stringy.search("7"));// => -1 (7 does not appear in the 'stringy' string.)

//by default the .indexOf returns only the first occurance. however you can include a second paramater that indicates after what index the function should begin looking.
//This second parameter only applies to the .indexOf method and not the .search method

console.log(stringy.indexOf("l", 4));// => 9 (after the 4th index of stringy, the first occurance of the letter 'l' is at the 9th index)


//lastIndexOf
//the .lastIndexOf returns last occurence of a character

console.log(stringy.lastIndexOf("l")); //=> 9 (the last appearance of 'l' in stringy is at the 9th index) 

//charAt
//Alternatively, if we wish to find what character is at a specific index, we can use .charAt

console.log(stringy.charAt(4));//=> o (at the 4th index, is the letter o)

//.startsWith
// This method will return a boolean value if the 0 index of a string matches the parameter of the function

console.log(stringy.startsWith("H"));//=> true (The first character of "Hello World" is "H")

//It is important to note that this method is case sensitive

console.log(stringy.startsWith("h")); //=> false ("H" is not equal to "h")

//.endsWith
//similarly to .startsWith, this method will compare the last index of a string with a parameter

console.log(stringy.endsWith("x")); //=> false ("Hello World" does not end with an "x")

//.replace
//This method will take the first occurance of a character parameter and replace it with the second parameter and return the value as a new string

console.log(stringy.replace("l", "x"));//=> "Hexlo World"

//.toLowerCase
//This method will change every character in a string to its lowercase counterpart

console.log(stringy.toLowerCase());//=> "hello world"

//.toUpperCase
//This method will change every character in a string to its uppercase counterpart

console.log(stringy.toUpperCase());//=> "HELLO WORLD"

//2 OPERATORS

//Addition
//The '+' operator can be used to achieve similar results to the aforementioned .concat method

var str1 = "Hi"
var str2 = "there"

console.log(str1 + " " + str2);//=> "Hi there"

//when using this operator with other data types, it will automatically convert the result into a string

var numString = "20";
var num = 21;

console.log(numString + num); //=> "2021"