let value = 24,
  minRange = 0,
  maxRange = 24;

if (value >= minRange && value <= maxRange) {
  console.log("The value: " + value + " is in range.");
} else {
  console.log("The value: " + value + " is not in range.");
}

//Other Way
value >= minRange && value <= maxRange
  ? console.log("The value: " + value + " is in range.")
  : console.log("The value: " + value + " is not in range.");
