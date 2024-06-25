function merge(arr, low, mid, high){
      let temp = [];
      let left = low;
      let right = mid+1;

     while(left <= mid && right <= high){
          if(arr[left] <= arr[right]){
               temp.push(arr[left]);
               left++
          } else{
               temp.push(arr[right]);
               right++;
          }
     }


     while(left <= mid){
         temp.push(arr[left]);
         left++;
     }

     while(right <= high){
          temp.push(arr[right]);
          right++;
     }

     for(let i = low; i<= high; i++){
         arr[i] = temp[i - low];
     }


}

function mergeSort(arr, low, high){
      if(low >= high) return;
      const mid = Math.floor((low+high) /2);
      mergeSort(arr, low, mid);
      mergeSort(arr, mid+1, high);
      merge(arr, low, mid, high);
}


let arr = [9, 4, 7, 6 , 3, 1, 5];
console.log("Before sorting array ");
console.log(arr);


mergeSort(arr, 0, arr.length - 1);

console.log("After sorting array :");
console.log(arr);