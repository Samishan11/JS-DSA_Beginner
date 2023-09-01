const array = [
  { name: "Harry" },
  { name: "Boss" },
  { name: "Mike" },
  { name: "Lorry" },
];

// for loop
for (let a = 0; a <= array.length; a++) {
  console.log(array[a]);
}

//  for each
array.forEach((item) => {
  console.log(item);
});

// //  for of loop
for (const item of array) {
  console.log(item);
}

// //  for in loop
for (const item in array) {
  console.log(array[item]);
}
