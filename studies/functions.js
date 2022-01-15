/**
 *FUNCTIONS
 * 0. functions are the building blocks of our code, literally. 
 * 
 * 1. They are essentially a set of instructions that, given an input, will perform a task -returning an output based on the input given.
 * 
 */

 //Declaration

 //The first step to utilizing functions is to declare one. 
 //This is done with the function keyword followed by: the name of the function, its parameters (enclosed in parenthesis),
 //and the code block - statements that define the function enclosed in curly braces {}.

 function add (num1, num2){ // the function named 'add' takes in two parameters, num1 & num2.
     console.log(num1 + num2); //The function adds num1 and num2 and logs it to the console
 }

 //To execute a function, we must initiate a function CALL
 //This is done by using the name of the function, followed by inputting data for any parameters it may have

 add(1, 7); //=> 8 (this function takes the first parameter, 1, and the second parameter, 7, and adds them together and then logs the value to the console)

 //PARAMETERS VS ARGUMENTS

 //Parameters are essentially place holders in our function declaration to represent the values, or arguments we will later pass as inputs instead.

 function welcome(greeting, name){ //This function has two parameters, a greeting and a name.
    console.log(greeting + " " + name + "!");
 }

 welcome("Hello", "Alex"); //=> "Hello Alex!"
// here we are passing in argument inputs to take the place of our parameters. "Hello" represents the greeting parameter, while "Alex" represents the name.

//The examples above demonstrate the Syntax for a NAMED function.
//We can also assign function values to a declared variable in the same way and without a name.
//This is called an ANONYMOUS function

var temperature = function(degrees){ //here we declared a new variable, temperature, and assigned it to a function without a name
    console.log(`It is ${degrees} degrees outside today`);
}
