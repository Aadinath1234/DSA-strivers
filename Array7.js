//longest array with given sum k (positives )
// given an array and a sum k , we need to print the length of the longest subarray that sums to k.: Brute force approach: 
// function getLongestSubarray(a, k) {
//     let n = a.length; 
//     let len = 0;
//     for(let i = 0; i<n; i++){
//         for(let j = i; j < n; j++){
//             let s = 0; 
//             for(let K = i; K <= j; K++){
//                 s += a[K];
//             }
//             if(s === k)
//                 len = Math.max(len, j - i +  1);
//         }
//     }   
// return len;
// }

// let a = [2,3,5,1,9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is : ", len);

 

// optimizing the naive approach(using two loops): 
// function getLongestSubarray(a,k){
//     let n = a.length; 
//     let len  = 0; 
//     for(let i = 0; i < n; i++){
//          let s =0;
//           for(let j = i; j<n; j++){
//             s+=a[j];
//               if(s === k)
//                   len = Math.max(len, j-i+1);
//           }
//     }
//     return len; 
// }
// let a = [2,3,5,1,9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is : ", len); 



// better approach (using hashing ): 
// function getLongestSubarray(a, k){
//     let n = a.length; 
//     let preSumMap = new Map();
//     let sum = 0; 
//     let maxLen = 0; 
//     for(let i = 0; i < n; i++){
//         sum += a[i];

//         if(sum === k){
//              maxLen = Math.max(maxLen, i+1);
//         }

//         let rem = sum - k ;
//         if(preSumMap.has(rem)){
//             let len = i - preSumMap.get(rem);
//              maxLen = Math.max(maxLen, len);
//         }

//         if(!preSumMap.has(sum)){
//             preSumMap.set(sum,i);
//         }
//     }
//     return maxLen; 
// }

// let a = [2,3,5,1,9];
// let k = 10; 
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is :", len);


// optimal approach: 
function getLongestSubarray(a, k){
    let n = a.length;
    let left = 0, right = 0;
    let sum = a[0];
    let maxLen = 0;
    while(right < n){
        while(left <= right && sum > k){
            sum -= a[left];
            left++; 
        }

        if(sum === k){
            maxLen = Math.max(maxLen, right - left + 1);

        }
        right++;
        if(right <n) sum +=  a[right];
    }
    return maxLen;
}

let a = [2,3,5,1,9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is : ", len);