// #1: 
// count frequency of each element in the array : using two loops . 
// problem statement: given an array we have found the number of occurences of each element in the array : 
// function countFreq(arr){
//     let visited = new Array(arr.length).fill(false);

//     for(let i = 0; i< arr.length; i++){
//           if(visited[i]){
//               continue; 
//           }

//           let count = 1;
//           for(let j = i+1; j < arr.length; j++){
//               if(arr[i] === arr[j]){
//                   visited[j] = true;
//                   count++;
//               }
//           }
//           console.log(arr[i] + " " + count);
//     }
// }

// let arr =[10, 5, 10, 15, 10, 5];
// countFreq(arr);



//using map: 
// function frequency(arr){
//   let map = new Map();

//   for(let i = 0; i< arr.length; i++){
//        if(map.has(arr[i])){
//         map.set(arr[i], map.get(arr[i]) + 1);
//        } else{
//           map.set(arr[i], 1);
//        }
//   }

//   for(let [key, value] of map.entries())
//     {
//         console.log(key + " " + value);
//     }
// }

// let arr = [10, 5, 10, 15, 10, 5];
// frequency(arr);














//// given an array of size N. find the highest and lowest frequency element. 

// function countFreq(arr) {
//     let visited = new Array(arr.length).fill(false);
//     let maxFreq = 0, minFreq = arr.length;
//     let maxEle = 0, minEle = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (visited[i]) {
//             continue;
//         }

//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 visited[j] = true;
//                 count++;
//             }
//         }

//         if (count > maxFreq) {
//             maxEle = arr[i];
//             maxFreq = count;
//         }

//         if (count < minFreq) {
//             minEle = arr[i];
//             minFreq = count;
//         }
//     }

//     console.log("The highest frequency element is:", maxEle);
//     console.log("The lowest frequency element is:", minEle);
// }

// // Example usage:
// let arr = [10, 5, 10, 15, 10, 5];
// countFreq(arr);




// find the highest and lowest frequency number using map function: 
function Frequency(arr){
   let map = new Map();

   for(let num of arr){
      if(map.has(num)){
          map.set(num, map.get(num) + 1);

      } else{
          map.set(num, 1);
      }
   }

   let maxFreq = 0, minFreq = arr.length;
   let maxEle = 0, minEle = 0;

   for(let [key, value] of map.entries()){
       if(value > maxFreq){
         maxEle = key;
         maxFreq = value;
       } 
       if(value < minFreq){
         minEle = key;
         minFreq = value;
       }
   
   }

  console.log("the highest frequency element is: ", maxEle);
  console.log("the lowesst frequency element is: ", minEle);







}

let arr = [10, 5, 10, 15, 10, 5];
Frequency(arr);