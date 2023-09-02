const age = 20;

//  if else
if (age > 18) {
  console.log("You are not allow to drive a car");
} else {
  console.log("You can drive a car");
}

// tunary operator
age > 18
  ? console.log("You are not allow to drive a car")
  : console.log("You can drive a car");

//  switch case
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("This is apple");
    break;
  case "mango":
    console.log("this is mango");
    break;
  default:
    console.log("This is not furit");
}
