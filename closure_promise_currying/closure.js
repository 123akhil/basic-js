//closures in js
//Questions
function createBase(x) {
  return function add(y) {
    console.log(x + y);
  };
}
//1 impliment a function to answer the below values
var addSix = createBase(6);
// addSix(10);
// addSix(21);

// Closures in Javascript
// Ques 2: Time Optimization
function findSlow(i) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[i]);
}

// console.time("6"); it was use to major time
// findSlow(6);
// console.timeEnd("6");
// console.time("12");
// findSlow(12);
// console.timeEnd("12");

//now the oprimised version
// The key difference is that in this version, there is no naming conflict between the loop index variable and the parameter because they are in separate functions. So, accessing a is faster and clearer.
// So, the second version is faster because it avoids the naming conflict and directly accesses the a array using a closure. This makes the code more efficient and easier to understand.

function findFast() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

//   const closure = findFast()
//   console.time("6");
//   closure(6);
//   console.timeEnd("6");
//   console.time("12");
//   closure(12);
//   console.timeEnd("12");

// Ques 3: Block scope and setTimeout
function a1() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
}

// a1();
//this prints
//3
//3
//3
//the solution is you can use let
// but follow up question is solve this without using let
//we can use closure

//  for (var i = 0; i < 3; i++) {
//         function closure(i){
//             setTimeout(function log() {
//             console.log(i); // What is logged?
//             }, 1000);
//         }
//        closure(i);
// }

//Ques: How would you use a closure to create a private counter

function counter() {
  var _counter = 0;
  function add(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + +_counter;
  }
  return {
    add,
    retrive,
  };
}
//we are using two differnet function to manipulate the private variable counter
let c = counter();
// c.add(5);
// c.add(10);
// console.log(c.retrive());

//MODULE FUNCTION
// Define a module using an IIFE (Immediately Invoked Function Expression)
const MyModule = (function () {
  // Private variables and functions
  let privateVar = "I am private";

  function privateFunction() {
    console.log(privateVar);
  }

  // Public interface (exposed to the outside)
  return {
    publicVar: "I am public",
    publicFunction: function () {
      console.log("This is a public function");
      privateFunction(); // You can call private functions from public functions
    },
  };
})();

// Using the module
//   console.log(MyModule.publicVar); // Accessing public variable
//   MyModule.publicFunction(); // Calling public function
// You can't directly access privateVar or privateFunction from outside the module

// Closures in Javascript
// Ques 7: Make this run only once
//this Implementation is just for thr start you and if the interviewer ask than there is one pollyfill for once in LODASH
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already Subcribed to Roadside Coder");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to", view);
      called++;
    }
  };
}
let isSubscribed = likeTheVideo();

// isSubscribed();
// isSubscribed();
// isSubscribed();

//Once pollyfill
//to ensure that the provided function (func) is executed only once, caching the result if necessary and preventing further executions.
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

function once(func, context) {
  //included an optional context parameter that allows you to explicitly set the this value for the func function when it's executed.
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once((a, b) => console.log("hello", a, b));
// hello(1, 2);
// hello(1, 2);
// hello(1, 2);

const sayHello = once(person.greet, person);

// sayHello();
// sayHello();
// sayHello();



// Question 3: Implement Caching/Memoize Function
//this is very time taking now use memoize Function
function myMemoize(fn, context){
    const ref = {};
    return function(...args){
        let argsCache = JSON.stringify(args);
        if(!ref[argsCache]){
            ref[argsCache] = fn.call(context || this, ...args)
        }
        return ref[argsCache];
    }
}


const clumsysquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};
console.time("First slow call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First slow call");

console.time("Second slow call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("Second slow call");

const memoizeClumsyProduct = myMemoize(clumsysquare);

console.time("First call");
console.log(memoizeClumsyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizeClumsyProduct(9467, 7649));
console.timeEnd("Second call");
