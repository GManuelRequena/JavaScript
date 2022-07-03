let number = 0;
let even = number % 2;
if (even === 0) {
  console.log("The number: " + number + " is even.");
} else {
  console.log("The number: " + number + " is not even.");
}

//Other way to do it
even === 0
  ? console.log("The number: " + number + " is even.")
  : console.log("The number: " + number + " is not even.");
