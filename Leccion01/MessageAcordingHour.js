/*
6 - 12 - Good Morning
12 - 18 - Good Afternoon
18 - 24 - Good Evening
0 - 6 - Sleeping
*/

let hour = 16;

if (hour >= 0 && hour < 6) {
  console.log("Sleeping");
} else if (hour >= 6 && hour <= 12) {
  console.log("Good Morning");
} else if (hour > 12 && hour <= 18) {
  console.log("Good Afternoon");
} else if (hour > 18 && hour <= 24) {
  console.log("Good Evening");
} else {
  console.log("Incorrect hour");
}
