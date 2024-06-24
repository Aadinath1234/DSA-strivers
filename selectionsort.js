// given an array of N integers, wap to implement  the selection sorting algorithm : 


function selectionSort(arr){
  let n = arr.length;

  for(let i = 0; i< n - 1; i++){
      let minIndex = i;
      for(let j = i + 1; j < n; j++){
           if(arr[j] < arr[minIndex]){
              minIndex = j;
           }
      }

      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp; 

  }

  console.log("After selection sort: ");
  console.log(arr.join(" "));

}


let arr = [13, 46, 24, 52, 20, 9];
console.log("Before selection sort: ");
console.log(arr.join(" "));
selectionSort(arr);
