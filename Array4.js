// move all zeros to the end of the array : 
// brute force approach : 
// function moveZeros(n, a){
//      let temp = [];

//      for(let i = 0; i<n; i++){
//          if(a[i] !== 0){
//               temp.push(a[i]);
//          }
//      }

//      let nz = temp.length;
//      for(let i = 0; i < nz; i++){
//          a[i] = temp[i];
//      }

//      for(let i = nz; i <n; i++){
//          a[i] =0;
//      }

//      return a;
// }
// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans.join(' ')); 








// optimal approach: (using 2 pointers): 
// function moveZeros(n, a){
//      let j = -1;

//      for(let i = 0; i<n; i++){
//           if(a[i] === 0){
//               j = i;
//               break;
//           }
//      }

//      if(j === -1) return a;


//      for(let i = j + 1;i < n; i++){
//            if(a[i] !== 0){
//                [a[i], a[j]] = [a[j], a[i]];
//                j++;
//            }
//      }

//      return a;
// }

// let arr = [1, 0, 2,3,2,0,0,4,5,1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans.join(' '));









// given an array and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
// function search(arr, num){
//     for(let i = 0; i< arr.length; i++){
//          if(arr[i] === num){
//               return i;
//          }
//     }
//     return -1;
// }

// const arr = [1,2,3,4,5];
// const num = 4;
// const val = search(arr, num);
// console.log(val);










// // union of the two sorted arrays : 
// function findUnion(arr1, arr2){
//     let freq = new Map();
//     let union = [];

//     for(let num of arr1){
//          freq.set(num, (freq.get(num) || 0) + 1);
//     }


//     for(let num of arr2){
//          freq.set(num, (freq.get(num) || 0) + 1);
//     }

//     for(let [num, count] of freq){
//         union.push(num);
//     }
//     return union;
// }

// let arr1 = [1, 2, 3, 4, 5,6,7,8,9,10];
// let arr2 = [2, 3, 4, 4, 5,11, 12];

// let union = findUnion(arr1, arr2);
// console.log("Union of arr1 and arr2 is: ");
// console.log(union.join(" "));


// using set: 
// function findUnion(arr1, arr2){
//      const set = new Set();
//      const union = [];

//      for(let num of arr1){
//          set.add(num);
//      }

//      for(let num of arr2 ){
//          set.add(num);
//      }

//      for(let num of set){
//           union.push(num);
//      }
//      return union; 
// }

// const arr1 = [ 1,2 , 3, 4,5,6,7, 8,9,10];
// const arr2 = [2,3, 4, 4,5 ,11,12];

// const union = findUnion(arr1, arr2);
// console.log("Union of arr1 and arr2 is : ");
// console.log(...union);



//using two pointers: 
function findUnion(arr1, arr2){
  let i =0, j=0;
  let union = [];

  while(i < arr1.length && j < arr2.length){
      if(arr1[i] <= arr2[j]){
           if(union.length === 0 || union[union.length - 1] !== arr1[i])
              union.push(arr1[i]);
            i++;
      } else{
           if(union.length === 0 || union[union.length - 1] !== arr2[j])
              union.push(arr2[j]);
            j++;
      }
  }


  while(i < arr1.length){
      if(union[union.length - 1] !== arr1[i])
         union.push(arr1[i]);
        i++;
  }

  while(j < arr2.length){
      if(union[union.length - 1] !== arr2[j])
         union.push(arr2[j]);
        j++;
  }

  return union;


}

const arr1 = [1,2, 3, 4,5,6,7,8,9,10];
const arr2 = [2,3, 4,4,5,11,12];

const union = findUnion(arr1, arr2);
console.log("union of arr1 and arr2 is: ");
console.log(union.join(" "));