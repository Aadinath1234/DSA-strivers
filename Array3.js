//Given an array of N integers left rotate the array by one place : brute force approach :

// function solve(arr, n){
//       let temp = new Array(n);
//       for(let i = 1; i < n; i++){
//           temp[i - 1] = arr[i];
//       }
//       temp[n - 1] = arr[0];
//       for(let i = 0; i < n; i++){
//           console.log(temp[i] + " ");
//       }
//       console.log();
// }

// let n = 5;
// let arr = [1,2,3,4,5];
// solve(arr, n);



//optimal approach : 
 
//   function solve(arr, n){
//    let temp = arr[0];
     
//    for(let i = 0; i < n-1; i++){
//       arr[i] = arr[i+1];
//    }
//    arr[n - 1] = temp;
//    for(let i = 0; i < n; i++){
//        console.log(arr[i] + " "); 
//    }
//   }

//   let n = 5;
//   let arr = [1, 2, 3, 4, 5];
//   solve(arr, n);









// 
//Rotate array by K elements: 
// given an array of integers rotating array of elements by k elements either left or right : 
// function rotateToRight(arr, k){
//   const n =arr.length;
//   if(n===0) return;

//   k = k % n;
//   if(k > n) return;

//   const temp = arr.slice(n - k, n);

//   for(let i = n-k-1; i>=0; i--){
//      arr[i + k] =arr[i];
//   }

//   for(let i =0; i< k; i++){
//      arr[i] = temp[i];
//   }
// }

// const arr = [1,2,3,4,5,6,7];
// const k = 2;
// rotateToRight(arr, k);
// console.log("After rotating the elements to right");
// console.log(arr);






//rotating elements to left : 
// function rotateToLeft(arr, k){
//       const n = arr.length;
//       if(n === 0)return;

//       k = k % n;
//       if(k > n) return;

//       const temp = arr.slice(0, k);

//       for(let i = 0; i< n - k; i++){
//           arr[i] = arr[i + k];
//       }
//       for(let i = 0; i<k; i++){
//           arr[n - k + i] = temp[i];
//       }
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let k1 = 2;
// rotateToLeft(arr1, k1);
// console.log("After rotating the elements to the left");
// console.log(arr1);




// Rotating elements to the right using reverse method: 
// function reverse(arr, start , end){
//       while(start < end){
//           let temp = arr[start];
//           arr[start] = arr[end];
//           arr[end] = temp;
//           start++;
//           end--;
//       }
// }

// function rotateToRight(arr, k){
//       const n = arr.length;
//       k = k % n;
//       if(n=== 0 || k === 0) return;
//       reverse(arr, 0, n-k-1);
//       reverse(arr, n - k, n-1);
//       reverse(arr, 0, n - 1);
// }

// let arr2 = [1, 2, 3,4,5,6,7];
// let k2 = 2;
// rotateToRight(arr2, k2);
// console.log("After rotating the elements to the right ");
// console.log(arr2);









// rotating elements to the left using reverse method: 
function reverse(arr, start, end){
      while(start < end){
          let temp = arr[start];
          arr[start] =arr[end];
          arr[end] = temp;

          start++;
          end--;
      }
}

function rotateToLeft(arr, k){
      const n = arr.length;
      k =k % n;
      if(n === 0 || k === 0) return;

      reverse(arr,0, k - 1);
      reverse(arr, k , n - 1);
      reverse(arr, 0, n - 1);
}

let arr3 = [1, 2, 3, 4, 5, 6, 7];
let k3 = 2;
rotateToLeft(arr3, k3);
console.log("After rotating the elements to the left");
console.log(arr3);
