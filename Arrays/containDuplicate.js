// Just look at the array . The array is sorted by using Sort() , if the next element is same as first it will return true.
// Time complexity: O(nlogn)
// Space complexity: O(1)
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};

//Using Set Method
// Time complexity: O(n)
// Space complexity: O(n)
var contDuplicate = function(nums) {
    const s = new Set(nums);
    return s.size !== nums.length
  };

//   console.log(contDuplicate([1,2,3,4,5,6])) O(n)