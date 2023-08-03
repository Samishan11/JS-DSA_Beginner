function timeOut(callback) {
  return setTimeout(() => console.log("1000"), 1000);
  callback();
}

timeOut(setTimeout(() => console.log("2000"), 2000));
