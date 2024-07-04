// find the missing number in an array : brute force approach 
// function missingNumber(a, N){
//   for(let i = 1; i <= N; i++){
//       let flag = 0;

//       for(let j = 0; j < N-1; j++){
//         if(a[j] === i){
//             flag = 1;
//             break;

//         }
//       }

//       if(flag === 0){
//          return i;
//       }
//   }
//       return -1;
//   }

//   function main(){
//       const N = 5;
//       const a = [1,2,4,5];
//       const ans = missingNumber(a,N);
//       console.log("The missing number is: ", ans);
//   }

//   main();



// better approach(using hashing): 
// function missingNumber(a, N){
//       const hash = new Array(N + 1).fill(0);
//       for(let i = 0; i<N-1; i++){
//          hash[a[i]]++;
//       }


//       for(let i = 1; i <= N; i++){
//            if(hash[i] === 0){
//              return i;
//            }
//       }
//       return -1;
// }

// function main(){
//       const N = 5;
//       const a = [1,2,4,5];
//       const ans = missingNumber(a, N);
//       console.log("The missing number is : ", ans);
// }

// main();




// optimal approach : summation approach: 
// function missingNumber(a, N){
//    const summation = (N * (N + 1))/2;
//    let s2 = 0;
//    for(let i = 0; i < N - 1; i++){
//     s2 += a[i];
//    }

//    const missingNum = summation - s2;
//    return missingNum;

// }

// function main(){
//       const N = 5;
//       const a = [1,2,4,5];
//       const ans = missingNumber(a, N);
//       console.log("The missing number is: ", ans);
// }

// main();



//optimal approach: xor approach: 
// function missingNumber(a, N){
//     let xor1 = 0;
//     let xor2 = 0;

//     for(let i = 0; i < N - 1; i++){
//          xor2 = xor2 ^ a[i];
//          xor1 = xor1 ^ (i + 1);
//     }
//     xor1 = xor1 ^ N;
//     return xor1 ^ xor2;
// }

// function main(){
//      const N = 5;
//      const a = [1,2,4,5];
//      const ans = missingNumber(a, N);
//      console.log("the missing number is : ", ans);
// }

// main();



//count maximum consecutive one's in the array :
class Solution{
   findMaxConsecutiveOnes(nums){
     let cnt = 0;
     let maxi = 0;
     for(let i =0; i< nums.length; i++){
          if(nums[i] === 1){
             cnt++;
          } else{
              cnt = 0;
          }
          maxi = Math.max(maxi, cnt);
             }
             return maxi; 
   }
}

const nums = [1, 1,0,1,1,1];
const obj = new Solution();
const ans = obj.findMaxConsecutiveOnes(nums);
console.log("the maximum consecutive 1's are " + ans);
