// Exercises from last night
//
// The below function does not work. The variable twoPlusTwo gets set to undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  var result = numberA + numberB;
  return result;
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo); // 4 is the expected output from this function with these given inputs
