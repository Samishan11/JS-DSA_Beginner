const handlePromise = async (a, b) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("first");
      resolve();
    }, 1000)
  );

  const sum = a + b;
  return sum;
};

async function main() {
  const result = await handlePromise(3, 5);
  console.log(result);
}
s
main();
