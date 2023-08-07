// Ques1 - second Largest Number
// Given an array Arr of size N, Print second largest
// distinct element from an array

//Input: [12, 35, 1, 10, 34, 1] ---->>>>> Output: 34
//Input: [10, 5, 10] ----->>>>> Output: 5

//brute force time compleaxity is o(nlogn) as to amke a new set it take o(n) and to sort an array it take o(nlogn) so the bigger complexity is the complexity of the solution
const secondLargest = (arr) =>{
    let set =  new Set(arr.sort((a, b) => b - a));
    let newArr = [...set];   // you can also use Array.from() to convert iterable objects in to array
    if( newArr.length >= 2) {
        return newArr[1];
    } else {
        return -1;
    }
    
}
// console.log(secondLargest([10, 5, 10]));

//Optimised approach to find the Second Largest Number
//time complexity = O(n)
//Space complexity because it return only one value= O(1)
function secondLargestOptimised(arr) {
     let largest = Number.NEGATIVE_INFINITY;
     let secondLargest = Number.NEGATIVE_INFINITY;
     
     for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
     }
     return secondLargest;
}
// console.log(secondLargestOptimised([10,5,6,4,9, 4, 10]))