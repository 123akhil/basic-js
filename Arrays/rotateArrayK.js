// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
//Complexity --- O(n)
function rotateArray(nums, k) {
 let size = nums.length;

 if ( k > size){
    k = k % size;  //10 % 8 = 2  we are doing theis if k is greater than size
 }
 const rotated = nums.splice(size-k, k); // [5,6,7] splice complexity is O(n) as it is loop
 nums.unshift(...rotated);//Spreading the array make it the part of the array   complexity- O(n)
 return nums;
}


//Rotate Array optimised
//[1,2,3,4,5,6,7] => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1,] => [5,6,7,1,2,3,4] //reverse it 3 times one time complete array than first half till K than from k to end of the array.
//time complexity O(n)
//space complexity O(1)

function rotateArrayOptimise(nums, k) {
    let size = nums.length;
   
    if ( k > size){
       k = k % size;  //10 % 8 = 2  we are doing theis if k is greater than size
    }

    reverse(nums, 0, nums.length - 1); //O(n)
    reverse(nums, 0, k - 1);//O(k)
    reverse(nums, k, nums.length - 1); //O(n-k)

    return nums;
   }

function reverse(nums, left, right){
    while (left < right){
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArrayOptimise([1,2,3,4,5,6,7], 2));