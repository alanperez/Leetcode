// Instruction

// Given an integer array nums, find the
// subarray
// with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

 

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104

 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Init with the first element of the array
    let maxSubArray = nums[0];

    let currentSum = 0;

    // Loop through each element in nums.
    for (const num of nums) {
        // If current sum becomes negative, reset it to 0.
        if (currentSum < 0) {
            currentSum = 0;
        }
        // Add the current element to currentSum.
        currentSum += num;
        // find the maximum val between maxsubarr and current sum then place it in maxSubbArray var
        maxSubArray = Math.max(maxSubArray, currentSum);
    }

    // Return the maximum subarray sum.
    return maxSubArray;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))