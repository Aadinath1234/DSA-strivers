// given an array of N integers, wap to implement insertion sorting algorithm: 

function insertionSort(arr){
    let n = arr.length;

    for(let i = 1; i<=n-1; i++){
          let j = i;
          while(j > 0 && arr[j - 1] > arr[j]){
             let temp = arr[j-1];
             arr[j-1] = arr[j];
             arr[j] = temp;
             j--;
          }


    }
     console.log("After using insertion sort: ");
     console.log(arr.join(" "));

}

let arr = [13, 46, 24, 52, 20, 9];
console.log("Before using insertion sort: ");
console.log(arr.join(" "));
insertionSort(arr);


