// exercise 2

// Write a function called yell that logs out an uppercase version of a string.
// Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

function yell(x) {
  var upperString = x.toUpperCase();
  return upperString;
}

console.log(yell("tori"));


function yell10(z) {
  for (var i = 0; i < 10; i++) {
    console.log(yell(z));
  }
}

yell10("the iron yard");
