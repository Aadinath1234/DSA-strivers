// sort an array of 0s , 1s  and 2s.
// given an array consisting of only 0s, 1s and 2s write a program to in-place sort the array without using inbuilt sort functions.(expected single pass - O(N) and constant space ); better approach: 

// function sortArray(arr, n){
//       let cnt0 = 0, cnt1 = 0, cnt2 = 0;

//       for(let i =0; i< n; i++){
//           if(arr[i] === 0) cnt0++;
//           else if(arr[i] === 1) cnt1++;
//           else cnt2++;
//       }

//       for(let i = 0; i< cnt0; i++) arr[i] = 0;
//       for(let i = cnt0; i< cnt0 + cnt1; i++) arr[i] = 1;
//       for(let i = cnt0 + cnt1; i<n; i++) arr[i]=2;
// }

// const n = 6;
// const arr = [0, 2, 1,2,0,1];
// sortArray(arr, n);
// console.log("After sorting ");
// console.log(arr.join(" "));



// optimal approach: 
function sortArray(arr, n){
  let low = 0, mid=0, high=n-1;

  while(mid <= high){
       if(arr[mid] === 0){
           [arr[low], arr[mid]] = [arr[mid], arr[low]];
           low++;
           mid++;
       } else if(arr[mid] === 1){
         mid++;
       } else{
          [arr[mid], arr[high]] = [arr[high], arr[mid]];
          high--;
       }
  }
}

const n = 6;
const arr = [0, 2, 1, 2, 0,1];
sortArray(arr, n);
console.log("After sorting:");
console.log(arr.join(" "));