


// 121. Best Time to Buy and Sell Stock


// Instructions

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.




// First solution 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // must buy before you sell
    // iter through the 

//  [7,1,5,3,6,4]
//   i j

    // let sum = 0;

// O(n^2) 
    // for(let i  = 0; i < prices.length; i++) {

    //     for(let j = i+1; j < prices.length; j++) {


    //         //  [7,1,5,3,6,4]
    //         //   i j
            
    //         // current = -1
    //         let currentSum = prices[j] - prices[i]

    //         if(currentSum > sum) {
    //             sum = currentSum;
    //         }
    //     }
    // }
    // return sum;


//  2nd approach
//  [7,   1,5,3,6,4]
//maxprof i

// can you use min built in method to find the min of these two values, then using the max method to find which day would gives us the most profit on that day
    // let count = 0;
    // let maxProfit =  prices[0]

    // for(let i = 1; i < prices.length; i++) {
    //     maxProfit = Math.min(maxProfit, prices[i-1])
    //     count = Math.max(prices[i]-maxProfit, count)
    // }

    // return count



// 3rd approach using two pointers, REVIEW REVIEW REVIEW


// let p1 = 0
//     let p2 = 1
//     let count = 0
    
//     for(let i = 0; i < prices.length; i++) {
        
//         if(prices[p1] < prices[ p2] ) {
//             let temp = 0
//             temp = prices[p2] - prices[p1]
//             count = Math.max(count, temp)

//         } else {
//             p1 = p2
            
//         }
//         p2+=1
        
//     }
//     return count
    
};