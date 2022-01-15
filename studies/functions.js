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

//to call this anonymous function, we use the name of the variable followed by any arguments we wish to pass in
temperature(90); //=> console logs "It is 90 degrees outside today"

//The usage of arguments are how we specify what inputs we want to pass through our function.
//And to decide what our function outputs, we use the keyword 'return'.

var weather = function(sky){
    if (sky === "cloudy"){
        return "Bring an umbrella"
    } else {
        return "It's a beautiful day outside"
    }
}

//SCOPES
//scopes set the limitations on what variables our data can reach.

//There are two types of scope: Global scope and Local Scope

//Global scope is accessible from anywhere in your code.

var x = 1 // The variable 'x' is declared and given the value of 1 in the global scope

function addition(){
    var y = 9
    return x + y; //Here we are accessing x in the global scope and using it within our function's local scope.
}

addition(); //=> 10 (This function successfully takes a variable from the global scope to use in its execution)

//Although, local scopes can use variables from the global scope, the inverse is not true.
var z = x + y // y is not defined

//the variable 'z' is able to read the x value of 1 because it is in the global scope. however, because y was declared within a functions scope, var z can not reach it.

//CLOSURES

//Functions can contain inner functions within itself. These inner functions will have access to the outermost function's scope but not vice versa.
//When these functions are created, so are closures. 
var count = (function(){ //the variable count is assigned to return value of a self-invoking function
    var counter = 0; 
//the function sets the counter to 0 and then returns an inner function expression, making count into a function that can still access the counter variable, thus making it a closure
    return function(){
        counter +=1;
        console.log(counter);
    }
})();

count(); //the first result of running the count function will return 1.
count(); // the second result will return 2.