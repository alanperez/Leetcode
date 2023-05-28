// 217. Contains Duplicate

// Instructions



// sol 1 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //     HASHMAP to keep track
        let hashmap = {};
        
        // iterate through the nums
        for(let i = 0; i < nums.length; i++) {
            
            // if it exists, return true
            if(hashmap[nums[i]] ) {
                return true
            }
            // otherwise set it to 1
            hashmap[nums[i]] = 1
        }
        return false;
        
        
        
        
    };
