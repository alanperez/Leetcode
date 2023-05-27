
// Instructions

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    let hashmap = {}
    
    for(let i = 0; i<nums.length; i++) {
        let currentValue = nums[i]
        
        let difference = target - currentValue
        
        if(hashmap[difference] != null) {
            return [hashmap[difference], i]
        }
        
       hashmap[currentValue] = i
    }
    
}


console.log(twoSum([2,7,11,15],9))