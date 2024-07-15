// two sum : check if a pair with given sum exists in array : 
// given an array of integers arr and an integer target. 
//1st variant: return yes if there exist two numbers such that their sum is equal to the target. otherwise return NO. 
// naive approach(brute force approach): 

// function twoSum(arr, target){
//    let n = arr.length;
//    for(let i =0; i<n; i++){
//       for(let j = i + 1; j < n; j++){
//            if(arr[i] + arr[j] === target) return "YES";
//       }
//    }
//     return "NO";
// }

// const n= 5;
// const arr = [2, 6, 5, 8, 11];
// const target = 14;
// const ans = twoSum(arr, target);
// console.log("This is the answer for variant 1: " +ans);



// 2nd variant: return indices of the two numbers such that their sum is equal to the target. otherwise we will 
// return {-1 , -1 };

// function twoSum(arr, target){
//   let n = arr.length;
//   for(let i=0; i<n; i++){
//       for(let j = i+1; j<n; j++){
//            if(arr[i] + arr[j] === target){
//                return [i, j];
//            }
//       }
//   }
//   return [-1, -1];
// }

// const n= 5;
// const arr = [2, 6, 5, 8, 11];
// const target = 14;
// const ans = twoSum(arr, target);
// console.log("this is the answer for variant 2: [" + ans[0] + "," + ans[1] + "]");






// better approach(using hashing ): 
// code for variant 1:
// function twoSum(arr, target){
//   const mpp = {};
//   for(let i = 0; i< arr.length; i++){
//       const num = arr[i];
//       const moreNeeded = target - num; 
//       if(mpp.hasOwnProperty(moreNeeded)){
//           return "YES";
//       }
//       mpp[num] = i;
//   }
//     return "NO";
// }

// const n = 5;
// const arr =[2, 6, 5, 8, 11];
// const target = 14;
// const ans = twoSum(arr, target);
// console.log("This is the answer for variant 1: " + ans);



// code for variant2:
// function twoSum(arr, target){
//   const mpp = {};
//   for(let i = 0; i < arr.length; i++){
//      const num = arr[i];
//      const moreNeeded = target - num; 
//      if(mpp.hasOwnProperty(moreNeeded)){
//           return [mpp[moreNeeded], i];
//      }
//      mpp[num] = i;
//   }
//   return [-1, -1];
// }

// const n = 5;
// const arr = [2, 6, 5, 8,11];
// const target =14;
// const ans = twoSum(arr, target);
// console.log("this is the answer for variant 2: [" + ans[0] + "," + ans[1] + "]");



// optimal approach: 
function twoSum(arr, target){
  arr.sort((a,b) => a - b);
  let left = 0, right = arr.length - 1;
  while(left < right){
      const sum = arr[left] + arr[right];
      if(sum === target){
         return "YES";
      } else if(sum < target){
           left++;
      } else{
         right--;
      }
  }
  return "NO";
}

const n = 5;
const arr = [2, 6,5,8,11];
const target = 14;
const ans = twoSum(arr, target);
console.log("this is the answer for variant1: " +ans);