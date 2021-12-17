
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(value) {
  var triangle = "#";
  for (var i = 0; i < value; i++){
    console.log(triangle);
    triangle = triangle += "#";

  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++){
    if (i % 15 === 0){
      console.log("fizzbuzz");
    } else if (i % 3 === 0){
      console.log("Fizz");
    } else if (i % 5 === 0){
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a number representing how many columns and rows.
//O: a string of alternating spaces and hashes depending on their placement on board
//C: output string must have linebreaks
//E: N/A
function drawChessboard(x) {
  var chessBoard = [];
  for (let i = 0; i < x; i++){
    let row;
    if (i % 2 === 0){
      row = " ";
      //create looping sequence to continue adding characters
      for (let i = 1; i < x; i++){
        if (i % 2 === 0){
          row += " ";
        } else{
          row += "#";
        }
      }
    } else {
      row = "#";
      for (let i = 1; i < x; i++){
        if (i % 2 === 0){
          row += "#";
        } else {
          row += " ";
        }
      }
    }
    chessBoard.push(row);
  }
  return chessBoard.join("\n") + "\n";
}
console.log(drawChessboard(8));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
