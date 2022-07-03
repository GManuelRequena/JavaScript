let month = 10;
let season;

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

if (month >= 1 && month <= 3) {
  console.log("It's Summer");
} else if (month > 3 && month <= 6) {
  console.log("It's Fall");
} else if (month > 6 && month <= 9) {
  console.log("It's Winter");
} else {
  console.log("It's Spring");
}
