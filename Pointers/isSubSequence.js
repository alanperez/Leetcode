// 392. Is Subsequence




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if (s.length === 0) {
            return true;
        }

    // pointer
    let j = 0;

    // iterate through the array
    for(let i = 0; i < t.length; i++) {

        // check if it matches, move pointer
        if(s[j] == t[i]) {
            j++
      
        }
        if(j === s.length) return true
    }

    return false;
};