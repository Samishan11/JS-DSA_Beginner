const arr = [1, 1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8, 9, 10];

// function findDuplicate(arr) {
//   const hastable = {};
//   const duplicete = [];

//   for (let num of arr) {
//     if (hastable[num]) {
//       duplicete.push(num);
//     } else {
//       hastable[num] = true;
//     }
//   }
//   return duplicete;
// }

// //  using set method
// function findDuplicates(arr) {
//   const uniqueSet = new Set();
//   const duplicates = new Set();

//   for (let num of arr) {
//     if (uniqueSet.has(num)) {
//       duplicates.add(num);
//     } else {
//       uniqueSet.add(num);
//     }
//   }

//   return Array.from(duplicates);
// }

// function findDuplicate(arr) {
//   const unique = {};
//   const duplicate = [];

//   for (let obj of arr) {
//     if (unique[obj]) {
//       duplicate.push(obj);
//     } else {
//       unique[obj] = true;
//     }
//   }

//   return duplicate;
// }

// console.log(findDuplicate(arr));

function findDuplicate(arr){
  const unique = {}
  const duplicate = []
  
  for(let num of arr){
      if(unique[num]){
          duplicate.push(num)
      }else{
           unique[num] = true
      }
  }
  return duplicate;
}
console.log(findDuplicate([1,1,2,2,2,3,4,5,5,6]))