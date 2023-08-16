//Two pointer approach to shift all zeroes to the last while not disturbing the order of other elments in the array

var moveZeroes = function(nums) {
    let low = 0;
    let high = low + 1;
    while(high <= nums.length - 1){
        if(nums[low] !== 0){
            low++;
            high++;
        } else {
            if (nums[high] !== 0){
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low++;
            }
            high++;
        }
    }
    return nums;
}; 

console.log(moveZeroes([0,1,2,3,0,4,9,3,0,0,0])); 