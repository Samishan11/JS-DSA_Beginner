// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 250);
// });

// myFirstPromise.then((successMessage) => {
//   console.log(`Yay! ${successMessage}`);
// });

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        name: "samishan",
      };
      resolve(data);
    }, 2000);
  });
}

function main() {
  console.log("Fetching....");
  promise()
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}

main();
