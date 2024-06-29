//find the largest element in an array :
//brute force approch :  
// function sortArr(arr){
//       arr.sort((a, b) => a -b);
//       return arr[arr.length - 1];
// }

// const arr1 = [2, 5, 1, 3, 0];
// const arr2 = [8, 10, 5, 7, 9];

// console.log("The largest  element in the array is : " + sortArr(arr1));
// console.log("the largest element in the array is : "+ sortArr(arr2));




// recursive approach : 
// function findLargestElement(arr){
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(max < arr[i]){
//              max = arr[i];
//         }
//     }
//     return max;

// }


// const arr1 = [2, 5, 1, 3, 0];
// let max = findLargestElement(arr1);
// console.log("The largest element in the array is : "+ max);

// const arr2 = [8, 10, 5, 7, 9];
// max = findLargestElement(arr2);
// console.log("the largest element in the array is : " + max);













// #2: find second smallest and second largest element in an array : 
// function getElements(arr){
//      if(arr.length === 0 || arr.length === 1){
//          console.log(-1 + " " + -1);
//          return ;
//      }

//      arr.sort((a, b) => a - b);
//      let small = arr[1];
//      let large = arr[arr.length - 2];
//      console.log("second smallest is : " + small);
//      console.log("second largest is : " + large);
    
// }

// const arr = [1, 2, 4, 6, 7, 5];
// getElements(arr);


// Better approach: 
// function getElements(arr){
//       if(arr.length === 0 || arr.length === 1){
//           console.log(-1 + " " + -1);
//           return;
//       }

//       let small = Infinity;
//       let second_small = Infinity;
//       let large = -Infinity;
//       let second_large = -Infinity;

//       for(let i = 0; i < arr.length; i++){
//            small = Math.min(small, arr[i]);
//            large = Math.max(large, arr[i]);

//       }

//       for(let i = 0; i<arr.length; i++){
//           if(arr[i] < second_small && arr[i] !== small)
//               second_small = arr[i];
//           if(arr[i] > second_large && arr[i] !== large)
//               second_large = arr[i];  
//       }

//       console.log("second smallest is " + second_small);
//       console.log("second large is " + second_large);

// }

// const arr = [1,2,4,6,7,5];
// getElements(arr);





// best solution: 
function secondSmallest(arr){
      if(arr.length < 2)
        return -1;

      let small = Infinity;
      let second_small = Infinity;

      for(let i = 0; i < arr.length ; i++){
           if(arr[i] < small){
               second_small = small;
               small = arr[i];
           } else if(arr[i] < second_small && arr[i] !== small){
             second_small = arr[i];
           }
      }
      return second_small;
}

function secondLargest(arr){
   if(arr.length < 2)
      return -1;

   let large = -Infinity;
   let second_large = -Infinity;

   for(let i = 0; i< arr.length ; i++){
      if(arr[i] >large){
         second_large = large;
         large = arr[i];

      } else if(arr[i] > second_large && arr[i] !== large){
         second_large = arr[i];
      }
   }
return second_large;

}


const arr = [1, 2, 4, 7,7,5];
const sS = secondSmallest(arr);
const sL = secondLargest(arr);

console.log("second smallest is : " + sS);
console.log("second largest" + sL);