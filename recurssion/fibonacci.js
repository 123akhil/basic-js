// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

//Using for loop

function fib(num) {
    const arr = [0, 1];

    for(let i=2; i<=num; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[num];
}

// console.log(fib(4));

//Fib reccursion

function fibRecursion(n) {
    if (n <= 1) return n;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
  }

  // console.log(fibRecursion(15));