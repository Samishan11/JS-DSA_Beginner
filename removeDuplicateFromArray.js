const arrObj = [
  { name: "samishan" },
  { name: "samishan" },
  { name: "joker" },
  { name: "shanta" },
  { name: "joker" },
];

//  remove duplicate array of object
// function removeDuplicateObjects(arr) {
//   const uniqueObjects = new Set(arr.map(JSON.stringify));
//   return Array.from(uniqueObjects).map(JSON.parse);
// }
// console.log(removeDuplicateObjects(arrObj));

//  using for of
// function removeDuplicate(arr) {
//   const uniqueObjects = {};
//   let duplicate = [];
//   for (let obj of arr) {
//     const objStr = JSON.stringify(obj);
//     if (!uniqueObjects[objStr]) {
//       uniqueObjects[objStr] = true;
//       duplicate.push(obj);
//     }
//   }
//   return duplicate;
// }
// console.log(removeDuplicate(arrObj));

// function removeDuplicateFilter(arr) {
//   return arr.filter((val, ind, self) => {
//     return self.findIndex((el) => JSON.stringify(el) === JSON.stringify(val)) === ind;
//   });
// }

// console.log(removeDuplicateFilter(arrObj));
// // remove duplicate from arr
// function duplicateRemove(arr) {
//   // return [...new Set(arr)]
//   return arr.filter((val, ind) => {
//     return arr.indexOf(val) === ind;
//   });
// }
// console.log(duplicateRemove([1, 2, 2, 2, 3, 4, 4, 5]));

// function removeDuplicate(arr) {
//   return arr.filter((val, ind, self) => {
//     return (
//       self.findIndex((el) => JSON.stringify(el) === JSON.stringify(val)) === ind
//     );
//   });
// }

// console.log(removeDuplicate(arrObj));

function removeDuplicate(arr) {
  return arr.filter((val, ind, self) => {
    return self.indexOf(val) === ind;
  });
}

console.log(removeDuplicate([1,2,2,2,3,4,5,6,7,7,7,8]));

