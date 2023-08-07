//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    let s = new Set(nums1);
    let res = new Set();
    for(let i = 0; i<nums2.length ; i++){
        if(s.has(nums2[i])){
            res.add(nums2[i]);
        }
    }
    return Array.from(res);
};