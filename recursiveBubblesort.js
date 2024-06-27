// // #1: 

// function bubbleSort(arr){
//   function recursiveSort(arr, n){
//       if(n == 1) return; 

//       for(let j = 0; j<=n-2 ; j++){
//            if(arr[j] > arr[j+1]){
//                let temp = arr[j+1];
//                arr[j+1] = arr[j];
//                arr[j] = temp;


//            }
//       }
//       recursiveSort(arr, n -1);
//   }
//   recursiveSort(arr ,arr.length);
// }

// const arr = [13, 46, 24, 52, 20, 9];

// console.log("Before using bubble sort: ");

// console.log(arr.join(" "));

// bubbleSort(arr);

// console.log("After using bubble sort: ");
// console.log(arr.join(" "));



// for best cases: 

function bubbleSort(arr){
  function recursiveSort(arr, n){
     if(n === 1) return;

     let didSwap = false;
     for(let  j = 0; j<= n -2; j++){
         if(arr[j] > arr[j+1]){
             let temp = arr[j+1];
             arr[j+1] = arr[j];
             arr[j] = temp;
             didSwap = true;
         }
     }

     if(!didSwap) return;

     recursiveSort(arr, n-1);
  }
  recursiveSort(arr, arr.length);
}

const arr = [13, 46, 24, 52, 20, 9];
console.log("before using bubble sort: ");
console.log(arr.join(" "));

bubbleSort(arr);

console.log('after using bubble sort ');
console.log(arr.join(" "));