let month = 13;
let season;
if (month > 0 && month <= 12) {
  if (month >= 1 && month <= 3) {
    console.log("It's Summer");
  } else {
    if (month > 3 && month <= 6) {
      console.log("It's Fall");
    } else {
      if (month > 6 && month <= 9) {
        console.log("It's Winter");
      } else {
        console.log("It's Spring");
      }
    }
  }
} else {
  console.log("Incorrect month");
}

if (month >= 1 && month <= 3) {
  console.log("It's Summer");
} else if (month > 3 && month <= 6) {
  console.log("It's Fall");
} else if (month > 6 && month <= 9) {
  console.log("It's Winter");
} else if (month > 9 && month <= 12) {
  console.log("It's Spring");
} else {
  console.log("Incorrect month");
}
