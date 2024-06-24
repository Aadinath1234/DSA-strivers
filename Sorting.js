// selection sort: 
// function selectionSort(arr, n){
//   for(let i = 0; i<=n - 2; i++){
//      let mini = i;
//      for(let j = i; j<=n -1 ; j++){
//           if(arr[j] < arr[mini]){
//                mini = j;
//           }
//      }
//      let temp = arr[mini];
//      arr[mini] = arr[i];
//      arr[i] = temp; 
//   }
// }

// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout  
// })

// r1.question("enter the number of elements: ", (n) => {
//       n = parseInt(n);
//       let arr  = [];
//       r1.question('Enter the elements: ', (input) => {
//           arr = input.split(' ').map(Number);
//           selectionSort(arr, n);
//           console.log('Sorted array ', arr.join(' '));
//           r1.close();
//       })
// })




//bubble sort: 
// const readline = require('readline');

// const r1 = readline.createInterface({
//      input: process.stdin, 
//      output: process.stdout 
// })


// function bubbleSort(arr){
//   const n = arr.length;
//   for(let i = n -1 ; i>= 0; i--){
//        let didSwap = false;
//        for(let j=0; j<= i-1; j++){
//            if(arr[j] > arr[j+ 1]){
//               let temp = arr[j];
//               arr[j] = arr[j+1];
//               arr[j+1] = temp;
//               didSwap = true;
//            }
//        }
//        if(!didSwap){
//          break;
//        }

//        console.log("run");
//   }
// }

// r1.question('enter the number of ele', (n) =>{
//       n = parseInt(n);
//       r1.question('enter space-separated ele', (input) => {
//           let arr = input.split('').map(Number);

//           bubbleSort(arr);

//           console.log("sorted array");
//           console.log(arr.join(" "));
//           r1.close();
//         })
// })













// insertion sort:

function insertionSort(arr){
  const n = arr.length;
  for(let i = 1; i<n; i++){
     let j = i;
     while(j > 0 && arr[j-1] >arr[j]){
          [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
          j--;
     }
  }
  return arr;
}

function main(){
  const readline = require('readline');
  const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout 
  });

  r1.question('enter the number of elemnets ', (input) => {
       const inputs = input.trim().split(' ');
       const n = parseInt(inputs[0]);
       const arr = inputs.slice(1, n+1).map(Number);

       const sortedArray = insertionSort(arr);

       console.log("sorted array ", sortedArray.join(' '));
       r1.close();


  })


}

main();