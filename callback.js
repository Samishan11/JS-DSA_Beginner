//  here we directly call the fuction timeout
function callbackFunction() {
  return console.log("Hello");
  timeOut();
}

function timeOut() {
  setTimeout(() => console.log("2000"), 2000);
}

callbackFunction();

//  here is the prefect example of callback function
//  here we pass the timeOut function as a call back and call the function
function callbackFunction(callback) {
  return console.log("Hello");
  callback();
}

function timeOut() {
  setTimeout(() => console.log("2000"), 2000);
}

callbackFunction(timeOut());
