// Instructions

// Input: [0, 1, 0, 3, 12]

// Initial array:
// [0, 1, 0, 3, 12]
//  p1
//  i

// After swapping 0 at i with 1 at p1:
// [1, 0, 0, 3, 12]
//  p1
//     i

// No swap as the element at i is 0:
// [1, 0, 0, 3, 12]
//     p1
//        i

// No swap as the element at i is 0:
// [1, 0, 0, 3, 12]
//     p1
//           i

// After swapping 0 at i with 3 at p1:
// [1, 3, 0, 0, 12]
//        p1
//              i

// No swap as the element at i is non-zero:
// [1, 3, 0, 0, 12]
//        p1
//                 i

// No swap as the element at i is non-zero:
// [1, 3, 0, 0, 12]
//        p1
//                 i

// After swapping 0 at i with 12 at p1:
// [1, 3, 12, 0, 0]
//           p1
//                 i

// Final array after moving all 0's to the end:
// [1, 3, 12, 0, 0]



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // [0,1,0,3,12]
    // 
    // [1, 0, 0, 3, 12]
    //   



    let p1 = 0;


    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
        // Swap non-zero element with the element at p1
        let temp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp;
        p1++; // Move p1 forward
        }
    }

};


// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
    
//     let index = 0;
//     for(let i = 0; i < nums.length; i++) {
        
//         if(nums[i] !== 0) {
//             let temp = nums[index]
            
//             nums[index] += nums[i]
//             nums[i] = temp
//             index++
//         }
//     }
    
// };