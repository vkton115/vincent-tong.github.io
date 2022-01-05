/**
 *CONTROL FLOW:
 * 0. Control flow is what we use to control the order in which our computers execute our statements in a script
 * 
 * 1. Code is naturally run from top to bottom. However, using conditionals and loops can change the flow in which these codes run.
 * 
 */

 //1. IF
 //If statements are used to execute a specific block of code if the statement itself is deemed to be true.

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
  //switch statements
