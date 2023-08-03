// function isPrime(num) {
//   if (num <= 1) return true;
//   if (num === 2) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(12));

function isprime(num) {
  console.log(Math.sqrt(num));
  if (num <= 1) return "prime";
  if (num === 2) return "not prime";
  let arr = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return arr.push ;
  }
  return "is prime";
}
console.log(isprime(37));
