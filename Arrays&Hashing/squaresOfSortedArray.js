// 977. Squares of a Sorted Array

// Instructions

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

 

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums is sorted in non-decreasing order.

 
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    // First approach (Brute force solution), square each element and once squared we can use the built sort method


    // for(let i = 0; i < nums.length;i++) {
    //     nums[i] *= nums[i]
        
    // }

    // nums.sort((a,b) => a-b)
    // return nums;


    // Second approach, 2 pointers
    // size of the results array will be the nums filled with zeroes
    // results array [0, 0, 0, 0, 0, 0]
    let results = new Array(nums.length).fill(0)
    let p1 = 0;
    let p2 = nums.length - 1;
    let pos = p2
// [-7,-3,2,3,11]
// p1          p2
    while(p1 <= p2) {
//  if the squared value of nums[p1] > nums[p2] -> results [0, 0, 0, 0, 0, 49]
        if(nums[p1] ** 2 > nums[p2] ** 2) {
            // place largest squared number at the very end of our results array
            results[pos] = nums[p1++] ** 2
            // move down by 1 in our results array
            pos--
            // results [0, 0, 0, 0,  0,   49]
            //                      pos
        } else {
            results[pos] = nums[p2--] ** 2
            pos--
        }
    }
    return results
};