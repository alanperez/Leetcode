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

    // pointer to keep track of our progress through string s
    let j = 0;

    // iterate through every character in string t
    for(let i = 0; i < t.length; i++) {

        // check if current char in string t matches char in string s, move pointer
        if(s[j] == t[i]) {
            j++
      
        }
        // if j is equal to string s length then that means we found every match 
        if(j === s.length) return true
    }

    return false;
};