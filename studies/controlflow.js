/**
 *CONTROL FLOW:
 * 0. Control flow is what we use to control the order in which our computers execute our statements in a script
 * 
 * 1. Code is naturally run from top to bottom. However, using conditionals and loops can change the flow in which these codes run.
 * 
 */

 //1. IF
 //If statements are used to execute a specific block of code if the statement itself is deemed to be true.
 //if statements are declared with the keyword 'if' followed by a conditional statement.

 function compareEqual(x, y){
    if (x === y){
    return true;
    } 
  }
  
  console.log(compareEqual(1, 1));// => true (1 is indeed equal to 1 and thus will run the if statements return value of true)

  //If statements can also be used to run a code block if the condition is false
  //This is done by placing a ! before the conditional like so:

  function compareNotEqual(x, y){
      if (!(x === y)){
          return true;
      }
  }

  console.log(compareNotEqual(1,2));//=> true (1 is indeed not equal to 2 and thus will run the statements return value of true)

  //else if
  //if the first If statement returns false, and we wish to execute our code block based on other conditions, we can use an else if statement
  //the syntax for else if is the same as an if statement

  function compare(x , y){
      if (x === y){
          return true;
      } else if (x !== y){
          return false;
      }
  }

  console.log(compare(1, 1));//=> true (1 is equal to 1 therefore executes the if statement codeblock to return true)
  console.log(compare(1, 2));//=> false (1 is not equal to 2 so the if statement is skipped. 1 is not equal to 2 and therefore executes the else if statement to return false)

  //else
  //if we do not wish to write an else if statement for every possible outcome, we can use an else statement to initiate a codeblock for any other condition.
  //the syntax for else does not have a conditional statement, therefore it only encapsulates the code block in curly braces {}.

  function positiveOrNegative(num){
      if (num < 0){
          return "negative";
      } else if (num > 0){
          return "positive";
      } else {
          return "number is zero";
      }
  }

  console.log(positiveOrNegative(3)); //=> "positive" (the if statement is false. the next else if statement is true, and therefore returns "positive")
  console.log(positiveOrNegative(-4));//=> "negative" (the first if statement is true and therefore returns "negative")
  console.log(positiveOrNegative(0));//=> "number is zero" (all if and else if statements are false and therefore runs the else code block to return "number is zero")

  //switch
  //switch statements can be seen somewhat similar to if/else if/else statements in its functionality
  //However, instead of using if/else if/else, switch statements use cases to determine what code block to run.

  var weather = "sunny";

  //switch statements are declared with the keyword switch followed by an expression to compare

  switch (weather){
  //the value of the expression is compared to each value of the below cases.
      case "cloudy":
          console.log("bring an umbrella just in case");
  //break is an optional keyword used to *break* out of the switch block and stop the execution of more case testing
          break;
      case "sunny":
  //once a match is found, the code block below will execute
          console.log("Its a beautiful day outside"); //=> "Its a beautiful day outside"
          break;
      case "icy":
          console.log("drive carefully today");
          break;  
  }

//Without breaks, the code will search for all cases that match the expression to execute
var soda = "Vanilla";

switch(soda){
    case "Vanilla":
        console.log("Coke"); //=> "Coke" (the case matches the expression, and therefore executes the codeblock)
    case "Vanilla":
        console.log("Pepsi");// => "Pepsi"  (the case also matches the expression, and therefore executes the codeblock)
        break;
    case "Vanilla":
        console.log("Dr.Pepper");//=> (the case matches the expression but because of the previous break, it will not execute the codeblock)
}


//default
// in switch statements, default can be used to execute a codeblock if none of the case values match the expression, similarly to an else statement

var day = 1;

switch (day){
    case 6:
        console.log("Yay, it's Saturday");
    case 7:
        console.log("Hooray, it's Sunday");
    default:
        console.log("I can't wait for the weekend") //=> "I can't wait for the weekend" (since no cases match the value of 4, the default case runs)
}