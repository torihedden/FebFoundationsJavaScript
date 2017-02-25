// control flow in JavaScript

var age = 100;

if (age < 12) {
   console.log("You're a child.");
} else if (age === 12) {
  console.log("You're exactly " + age + " years old!");
} else if (age < 20) {
   console.log("You're a teenager.");
} else if (age === 20) {
  console.log("You're exactly " + age + " years old!");
} else if (age <= 100) {
   console.log("You're probably an adult, or exactly 100.");
} else {
  console.log("You're really old! Or you didn't give me a number...");
}
