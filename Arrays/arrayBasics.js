// Arrays Declaration
//array can store any type
let person = {
    name: "akhil",
    age: "25"
}
let arr = ["apple", "banana", person, "cheery"];
// console.log(arr[2].name);
// console.log(arr.length);  you can check length of array with this

//Push- Add to end of the Array
arr.push("orange");

//Pop- Remove from the End of the Array
// arr.pop();
// arr.pop();

// Add to the top of the Array
arr.unshift("orange");

//Remove from top similar to pop
arr.shift()
// console.log(arr);

// Looping an Array
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++;
}

// Inbuilt Loop Method
const numbers = [1,2,3,4,5];

//Map
numbers.map((item, index, array) =>{
//    console.log(item, index, array);
})

const newNums = numbers.map((item, index, array) =>{
    return item + 5;
})
// console.log(newNums);

//Filter
const even = numbers.filter((item, index, array) =>{
    return item%2 === 0;
})

//Reduce very-imp takes an araay and reduce it down to one value
// prevValue is first index value if we will not intiate the first value But in this case we will initiate it to 0 by default.
const newArray = numbers.reduce((prevValue, item, index, array) =>{
    return prevValue + item;
}, 0);

//Some --- it is quite similar to filter it also check conditions but in filter we apply condition on every element and return the elemens that satisfies the condition but in this case we check the condition and return either true or false according to condition.
numbers.some((item, index, array) =>{
    return item > 3;
})

//Every --- check for every single element in the array weather that condition get satisfied and return either true or false.
numbers.every((item, index, array) =>{
    return item > 3;
})

//Find --  return the first element where the condition get satisfied else return undefined.
const greater = numbers.find((item, index, array) =>{
    return item > 3;
})
// console.log(greater);
//findIndex
const index = numbers.findIndex((item, index, araay) => item === 2)
// console.log(index);

// Spread and Rest operator
const nums = [1, 2, 3];
const nums1 = [4, 5, 6, 7];

//How can we combine these two array
// const finalNums = [nums, nums1]; //wrong way

//we are gonna use spread operator now
const finalNums = [...nums, ...nums1];

//now rest operator we use it in functio to pass multiple araguments
function sum(...numbers) {
    return numbers
}
// console.log(sum(nums, nums1, 5 , "hello"));

//More Error Methods

//Concat--It combines two or more arrays. reeturn a new array without modyfying the existing array
nums.concat(nums1, arr);

//SLice-- to acces certain part of array
// negative number is indexing from end of array if it is -1 than the last element
// console.log(arr);
arr.slice(0,2);
// console.log(newArr);
arr.slice(-1);
// console.log(newArr1);

// Splice-- Remove elemts from an array & can insert too if neccesary at their place and return removed arrays.

//not innetiating to an array so it will make changes to the same array and return the array by removing 2 elements from starting from index 1 and adding papaya to it.
let prr = ["apple", "banana", "mango","spinach", "cheery"];
console.log(prr.splice(1,2, "papaya"));
console.log(prr);
//Fill- fill every elemnt od the array with a given value
const dummy=[1,2,3,4,5]
dummy.fill(0);

//Flat -- by default it will do depth 1 by default so you should provide depth accordingly.
const flatX = [1, [2, 3], [[4, 5], 6]] // => [1,2,3,4,5,6]

const flatArray = flatX.flat(2);
// console.log(flatArray);

// reverse
nums.reverse();
// console.log(nums); 

//Sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => a-b); // ascending order
unsorted.sort((a, b) => b-a); // descending order


