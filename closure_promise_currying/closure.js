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

// console.time("6");
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
    let privateVar = 'I am private';
  
    function privateFunction() {
      console.log(privateVar);
    }
  
    // Public interface (exposed to the outside)
    return {
      publicVar: 'I am public',
      publicFunction: function () {
        console.log('This is a public function');
        privateFunction(); // You can call private functions from public functions
      },
    };
  })();
  
  // Using the module
//   console.log(MyModule.publicVar); // Accessing public variable
//   MyModule.publicFunction(); // Calling public function
  // You can't directly access privateVar or privateFunction from outside the module
  
