// Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.


function isVowel (character){
  var vowel = ["A", "E", "I", "O", "U"];
  if (vowel.indexOf(character.toUpperCase()) > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("A"));
