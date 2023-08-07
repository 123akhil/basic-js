//To find the maximum differnce of two values in the array such as j>i 

//Brute Force O(n^2);
var maximumDifference = function(nums) {
    let diff = -1;
    for (let i=0; i<nums.length; i++){
        for (let j=i+1;  j<nums.length; i++){
            if(nums[j] > nums[i]){
                diff = max(nums[j] - nums[i], diff);
            }
        }
    }
    return diff;
};

//Dp(O(n));

var maximumDifference = function(nums) {
    let min = Infinity;
    let diff =-1 ;
    for(let i= 0; i<nums.length; i++){
        min = Math.min(min, nums[i]);
        diff = Math.max(diff, nums[i] - min);
    }
    return diff==0 ? -1 : diff;
};