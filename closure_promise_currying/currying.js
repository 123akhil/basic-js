//Currying in JS
//Example f(a, b) into f(a)(b)

function f(a, b) {
  console.log(a, b);
}

//insted og writing the above we can write

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}
// f(1)(2);

//Ques 1: sum(2)(6)(1)

// function sum(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// Currying in Javascript
/* Question 2 -
evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("divide")(4)(2) => 2
evaluate("substract")(4)(2) => 2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}
//this is one of the use case we can create areusable function
const mul = evaluate("multiply");
const substract = evaluate("substract");
const divide = evaluate("divide");
const sum = evaluate("sum");

// console.log(sum(4)(2));
// console.log(mul(4)(2));
// console.log(divide(4)(2))
// console.log(substract(4)(2))

//Infinite Currying --> sum(1)(2)(3)......(n)
//flexible irrespective od n

function add(a){
    return function (b){
        if(b) return add(a + b);
        return a;
    }
}


// console.log(add(5)(2)(4)(5)());

// Currying in Javascript
// Question 5 - Manipulating DOM
// function updateElementText(id) {
//   return function (content) {
//   document.querySelector("#" + id).textContent = content;
//   };
//   }
//   const updateHeader = updateElementText("heading");
//   updateHeader("Subscribe to RoadsideCoder"); 

//Curry Pollyfill
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    }
    return (...nextArgs) =>
      curried.call(this, ...args,...nextArgs);
  };
}





