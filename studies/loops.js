/**
 *LOOPS
 * 0. Loops are a convenient way for us to iterate through our data to execute tasks repeatively as opposed to rewriting the same code lines.
 * 
 * 1. There are 3 main types of loops: For Loops, For-in Loops, & While Loops
 * 
 */

 //1. FOR LOOPS

 //For loops will execute a code repeatedly until a specific stopping condition is met.
 //a for loop is declared with the 'for' keyword followed by 3 arguments: a starting expression, a stop conditional expression, and an increment expression.
 //The syntax for a For Loop is like so:

//for (starting index; stoppping condition; update){ <codeblock> }

 //a For Loop defines a Starting Index to represent where in your datatype the first iteration will run.
 //The Stopping Condition is a statement that will allow the for loop to run as long as it remains true. When it is false, the loop will end.
 //The Update argument is the change in the value of the Starting Index after each time the loop runs.

for (count = 0; count <= 10; count++){ //here, the starting index is 0. Since 0, is less than or equal to 10, 
    //the codeblock will run once and then increment the starting index by +1 and will continue running until the count is no longer less than or equal to 10.
    console.log(count); // => 0 1 2 3 4 5 6 7 8 9 10
}

//you can also use for loops to iterate backwards like so:

for (count = 10; count >= 0; count--){
    console.log(count); //=> 10 9 8 7 6 5 4 3 2 1 0
}

//for loops are particularly useful for iterating through arrays since they have index values.
var alphabet = ["A", "B", "C"];
var newAlphabet = [];
for (let index = 0; index < alphabet.length; index++){
    newAlphabet.push(alphabet[index].toLowerCase());
}
//the above loop iterates through each index of the array, starting with "A" and pushes that same value changed to its LowerCase counterpart into a new array.

console.log(newAlphabet); // => ['a', 'b', 'c']

//as mentioned previously, this type of loop can also iterate backwards
var backwardsArr = [];
for (let index = newAlphabet.length - 1; index >= 0; index--){
    backwardsArr.push(newAlphabet[index]);
}

console.log(backwardsArr); // => ['c', 'b', 'a']


//2. DO... WHILE

//the do...while loop is declared with the 'do' key word followed by a statement & then the keyword 'while' followed by a condition
//this type of loop will execute the statement BEFORE checking if the 'while' condition is met.

var count = 0;
do {
    count += 1;
    console.log(count); // => 1 2 3 4 5 6 7 8 9 10 11
}
while (count <= 10);
//This loop functions similarly to the for loop example above.
//However, because it executes the statement before checking the condition, this loop will increment count once more an console log 11 as well.

//3. WHILE
//a while loop operates similarly to a do...while loop, with the exception being that it checks the condition BEFORE executing the statement.
//This loop is first declared with the 'while' keyword followed by the condition and will execute the below statement repeatedly until the condition is deemed false.

while (count > 0){
    count -= 1;
    console.log(count); // => 10 9 8 7 6 5 4 3 2 1 0
}

//4. FOR-IN 
// a for-in loop loops iterates a specific variable over each property of an object
// this type of loop is built for iterating object properties, and is typically not recommended to be used to iterate through arrays.

//for-in loops are declared with the key word 'for' followed by an expression used to represent the properties of the object, followed by a keyword 'in', and lastly followed by the name of the object
var petObj = {
    species: "Dog",
    age: 12,
    name: "Max",
}

for (petDetails in petObj){
    console.log(petDetails); //=> prints each key of the object petObj (species age name)
}
