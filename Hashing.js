// #1 :
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let n, arr = [], q, queries = [], hash = new Array(13).fill(0);
// let inputCount = 0;

// const processInput = (input) => {
//     if (inputCount === 0) {
//         n = parseInt(input);
//         inputCount++;
//     } else if (inputCount <= n) {
//         arr.push(parseInt(input));
//         inputCount++;
//         if (inputCount === n + 1) {
//             arr.forEach(num => {
//                 hash[num]++;
//             });
//         }
//     } else if (inputCount === n + 1) {
//         q = parseInt(input);
//         inputCount++;
//     } else if (inputCount <= n + 1 + q) {
//         queries.push(parseInt(input));
//         inputCount++;
//         if (inputCount === n + 2 + q) {
//             queries.forEach(query => {
//                 console.log(hash[query]);
//             });
//             rl.close();
//         }
//     }
// };

// rl.on('line', processInput);







// 2: 
// const readline = require('readline');

// const r1 = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout 


// });

// let inputLines = [];
// let inputIndex = 0;

// const processInput = (input) =>{
//      inputLines.push(input);
// };

// r1.on('line', processInput);

// r1.on('close', () => {
//       let s = inputLines[inputIndex++];

//       let hash = new Array(26).fill(0);
//       for(let i =0;i<s.length; i++){
//          hash[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//       }
//       let q = parseInt(inputLines[inputIndex++]);
//       let results = [];

//       while(q--){
//         let c = inputLines[inputIndex++].charAt(0);
//         results.push(hash[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
//       }
//       results.forEach(result => console.log(result));
// })






//3:
// const readline = require('readline');

// const r1 = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout 
// });

// let input = [];
// r1.on('line', (line) => {
//     input.push(line);
// });

// r1.on('close', () => {
//      let n  = parseInt(input[0]);
//      let arr = input[1].split(' ').map(Number);

//      //pre-compute : 
//      let npp = new Map();
//      for(let i = 0; i<n;i++){
//      npp.set(arr[i], (npp.get(arr[i]) || 0 ) + 1);
//      }

// //Iterate in the map 
// for(let [key, value ] of npp){
//     console.log(`${key}->${value}`);
// }

// let q = parseInt(input[2]);
// let queries = input.slice(3, 3+q).map(Number);

// for(let number of queries){
//       console.log(npp.get(number) || 0);
// }
// });






//unordered map : 
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let input = [];
r1.on('line', (line) => {
     input.push(line);
});
r1.on('close', () => {
     let n = parseInt(input[0]);
     let arr = input.slice(1, n + 1).map(Number);
     let npp = new Map();

     //pre compute 
     for(let i = 0;i<n; i++){
        npp.set(arr[i], (npp.get(arr[i]) || 0) + 1);
     }

     //iterate in the map 
     for(let [key, value] of npp){
        console.log(`${key}->${value}`);
     }

     let q = parseInt(input[n + 1]);
     let queries = input.slice(n+2, n+2+q).map(Number);


     while(q--){
        let number = queries[queries.length - q - 1];
        console.log(npp.get(number ) || 0);
     }
})


