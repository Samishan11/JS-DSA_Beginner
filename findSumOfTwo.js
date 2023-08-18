//  google simple interview question
const arr = [1, 2, 3, 4, 9];
const output = 16;
let match = false;
//  first loop throught an array and then again loop and increment the ind
for (let i = 0; i < arr.length; i++) {
  // again we are looping and incremnt the index of i to find the next index
  for (let j = i + 1; j < arr.length; j++) {
    //  here we are checking the arr index i wiht arr index j i.e the index of i + 1
    if (arr[i] + arr[j] === output) {
      match = true;
      console.log(`The sum of ${arr[i]} + ${arr[j]}:`, output);
      //  here if the condiiton match we don't move forward to check next index
      break;
    }
  }
  //    if condition match we break the loop here
  if (match) break;
}
if (!match) {
  console.log("Sorry out not match");
}
