// Write a function called longest that returns the longest of two input strings or arrays.


function longer(a, b) {
  if (a.length === b.length) {
    return "they are the same length";
  } else if (a.length > b.length) {
    return a;
  } else if (b.length > a.length) {
    return b;
  }
}

console.log(longer("string", "abcdefghijklmnop"));
