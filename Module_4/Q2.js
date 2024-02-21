function test(callback) {
  return callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

// (test(callbackFunc)); //Calling callback function

// (test(callbackFunc()));    //error callback is not a function

// test(() => callbackFunc());  //calling callback function

let a=(test(callbackFunc));
// let b=a();
console.log(a);
// console.log(b);

//When callback is returned it will return the function.

// when callback() is returned it will execute the callback function and the value returnd form the callback function