// check if an array is sorted : 
// given an array of size n, write a program to check if the given array is sorted in (ascending / increasing / non-decreasing ) order or not . if the array is sorted then return true else return false. 
// Brute force approach : 


// function isSorted(arr){
//      for(let i = 0; i< arr.length; i++){
//           for(let j = i +1; j < arr.length; j++){
//               if(arr[j] < arr[i])
//                  return false;
//           }
//      }
//      return true;
// }

// const arr = [1, 2,3,4,5];
// const ans = isSorted(arr);
// if(ans)  console.log("True");
// else console.log("False");




// optimal approach : 
// function isSorted(arr){
//       for(let i = 1; i<arr.length ; i++){
//            if(arr[i] < arr[i - 1])
//               return false;
//       }
//       return true; 
// }

// const arr = [1,2,3,4,5];
// console.log(isSorted(arr) ? "True " : "False");

















// #4 Remove Duplicates in-place from  sorted array : 
//brute force approach: 
// function removeDuplicates(arr){
//       let set = new Set(arr);
//       let uniqueArr = Array.from(set);
//       for(let i = 0; i < uniqueArr.length; i++){
//           arr[i] = uniqueArr[i];
//       }
//       return uniqueArr.length;
// }

// const arr = [1,1,2,2,2,3,3,];
// const k = removeDuplicates(arr);


// console.log("The array after removing duplicates elements is : ");
// for(let i = 0; i<k; i++){
//       console.log(arr[i]);
// }


// optimal approach : 
function removeDuplicates(arr){
   let i = 0;
   for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
             i++;
             arr[i] = arr[j];
        }
   }
   return i + 1;
}

const arr = [1,1,2,2,2,3,3];
const k  = removeDuplicates(arr);

console.log("The array after removing duplicate elements is : ");
for(let i = 0; i<k; i++){
      console.log(arr[i]);
}