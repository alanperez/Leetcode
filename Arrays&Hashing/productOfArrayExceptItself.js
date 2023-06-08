// 238. Product of Array Except Self


// instructions:
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Time O(n), Space O(n)

var productExceptSelf = function(nums) {
    // Initialize a new array of the same length as nums.
    let results = new Array(nums.length);

    // The first element of the results array is set to 1 because there are no elements to the left of the first element in the input array.
    results[0] = 1;

    // Calculate the product of all numbers to the left of each number.
    // Each element in results is the product of all elements to its left in the input array.
    for(let i = 1; i < nums.length; i++) {
        results[i] = nums[i-1] * results[i-1];
    }

    // right is a variable which contains the product of all elements to the right of the current element in the array.
    let right = 1;

    // Iterate the array from right to left, and on each step, update the current element in results by multiplying it with the product of all elements to its right.
    // Also update the right variable to include the current element from the input array.
    for(let i = nums.length-1; i>=0; i--) {
        results[i] = results[i] * right;
        right = right * nums[i];
    }

    // Return the final results array.
    return results;
};