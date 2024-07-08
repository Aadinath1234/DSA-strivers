// longest subarray with sum k (positives and negatives):
// given an array and a sum k , we need to print the length of the longest subarray that sums to k. : Brute force approach :native approach.

// function getLongestSubarray(a, k){
//     let n = a.length; 
//     let len = 0;

//     for(let i = 0; i < n; i++){
//            for(let j =i; j <n; j++){
//             let s = 0;
//             for(let K = i; K <= j; K++){
//                 s += a[K];
//             }
//             if(s === k)
//                  len = Math.max(len, j - i + 1);
//            }
//     }
//     return len;
// }

// let a = [-1, 1, 1];
// let k = 1;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is: ", len);




// better approach: using two loops: 
// function getLongestSubarray(a, k){
//     let n = a.length; 
//     let len =0;
//     for(let i = 0; i < n; i++){
//         let s = 0;
//          for(let j = i; j < n; j++){
//             s+= a[j];
//             if (s == k)
//                   len = Math.max(len, j - i + 1);
//          }
//     }
//     return len;
// }
// let a = [-1,1,1];
// let k = 1;
// let len = getLongestSubarray(a,k);
// console.log("The length of the longest subarray is : ", len);



// optimal approach: (using hashing ):
function getLongestSubarray(a, k){
    let n = a.length; 
    let preSumMap = new Map();
    let sum =0;
    let maxLen = 0;
    for(let i = 0; i< n; i++){
        sum += a[i];
        if(sum === k){
             maxLen = Math.max(maxLen, i+1);
        }

        let rem = sum - k ;
         
        if(preSumMap.has(rem)){
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }
        if(!preSumMap.has(sum)){
            preSumMap.set(sum, i);
        }
    }
    return maxLen;
}

let a = [-1, 1, 1];
let k = 1;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is: ", len); 
