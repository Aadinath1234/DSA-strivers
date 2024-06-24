// given an array of N integers, wap to implement the bubble sort algorithm:

// function bubbleSort(arr){
//   let n = arr.length;

//   for(let i= n - 1; i>=0; i--){
//       for(let j= 0; j<=i - 1; j++){
//            if(arr[j]> arr[j+ 1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp; 

//            }

//       }
//   }


//   console.log("After using bubble sort");
//   console.log(arr.join(" "));
// }

// let arr = [13, 46, 24, 52, 20, 9];
// console.log("before using bubble sort: ");
// console.log(arr.join(" "));
// bubbleSort(arr);






//optimized method: 
 function bubbleSort(arr){
    let n = arr.length;

    for(let i = n - 1; i>=0; i--){
        let didSwap = false;
        for(let j = 0; j<=i-1; j++){
           if(arr[j] > arr[j+1]){
                 let temp = arr[j+1];
                 arr[j+1] = arr[j];
                 arr[j] = temp; 
                 didSwap = true; 
           }
        }

        if(!didSwap){
            break;
        }
    }

    console.log("After using bubble sort ");
    console.log(arr.join(" "));
 }

 let arr = [13, 46, 24, 52, 20, 9];
 console.log("Before using bubble sort ");
 console.log(arr.join(" "));
 bubbleSort(arr);

 