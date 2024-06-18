recursion 1

let  cnt = 0;

function print(){
    if(cnt === 3) return;
    console.log(cnt);
    cnt++;
    print();


} 

print();






recursion 2 : 
print the name  n times using recursion :
function printName(i, n){
      if(i > n) return;
      console.log("raj");
      printName(i + 1, n);
}

let n = parseInt(prompt("enter the number here "));
printName(1,n); 




print from 1 to N using recursion : 

function printName(i,n){
    
      if(i>n) return;
      console.log(i);
      printName(i+1, n);
}

function wow(){
      var n = 4;
      printName(1, n);
}

wow();




print 1 to n using backtacking : 
function func( i , n){
      if(i<1) return;
       func(i-1, n);
       console.log(i);
}

function wow(){
      var n = 4;
      func(n,n);
      return 0;
}

wow();



print N to 1 using recursion: 
function func(i, n){
        if(i<1 ) return;
        console.log(i);
        func(i-1,n);
}

function wow(){
       var n =4;
       func(n,n);
       return 0;
}

wow();




print 1 to N using backtracking method: 
function func( i ,  n){
        if(i >n) return;
        func(i+1, n);
        console.log(i);
}

function wow(){
        var n = 4;
        func(1, n);
        return 0;

}

wow();



sum of first N natural numbers:
function solve(n){
   let sum =  0;
   for(i = 1; i<=n;i++){
        sum+=i;
   }
   console.log(sum);


}

solve(5);
solve(6);








sum of first N natural numbers: using formula N(N+2)/2 : 

function func( n){
        let sum = n*(n+1)/2;
        console.log(sum);
}

func(5);
func(6);




parameterized way: sum of n natural numbers: 
function func(i ,sum){
        if(i<1){
             console.log(sum);
             return;
        }
        func(i-1, sum+i);
}
function wow(){
        let n = 3;
        func(n,0);
        return 0
}

wow();

or 
function func(i ,sum){
        if(i<1){
             console.log(sum);
             return;
        }
        func(i-1, sum+i);
}
let n2 = 3;
func(n2, 0);








functional way : sum of n natural numbers: 
function func(n){
        if(n == 0){
             return 0;
        }
        return n + func(n-1);
}
let n2 = 3;
console.log(func(n2));

or 
function func(n){
      if(n == 0){
           return 0;
      }
      return n + func(n-1);
}
function wow(){
        let n = 3;
       console.log( func(n));
        return 0
}

wow();




Factorial of a number : Iterative and recursive : 

function func(x){
      let ans = 1;
      for(i = 1; i <=x; i++){
         ans = ans * i;
      }
      return ans;
}

let w = 5;
console.log(func(w));








recursive way of calculating the factorial of first N numbers (functional way ):

function func(n){
     if(n == 0){ 
        return 1;
     }
     return n * func(n -1);
}
let v = 5;
console.log(func(v));













Reverse a given array : 

function printArray(arr){
      console.log("Reversed array is : ");
      console.log(arr.join(' '));
}



function reverseArray( arr){
    let n =  arr.length;
    let reversedArr = new Array(n);
    for(let i = n - 1; i >= 0; i--){
         reversedArr[n-i-1] = arr[i];
    }
      printArray(reversedArr);
}


function main(){
 let arr = [5,4,3,2,1];
 reverseArray(arr);


}

main();










space-optimized iterative method : 
function printArray(arr){
    console.log("the reversed array is: ");
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i] + " ");
    }
}

function reverseArray(arr){
    let p1 = 0;
    let p2 = arr.length - 1;
    while(p1 < p2){
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp; 
         
        p1++;
        p2--;

    }
   printArray(arr);
}

const arr = [5, 4, 3,2,1];
reverseArray(arr);







recursive method: 
function printArray(arr){
       console.log("reverse the array ");
       for(i = 0; i<arr.length; i++){
             console.log(arr[i]);
       }
}


function reverseArray(arr, start, end){
    if(start < end){
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
        

       reverseArray(arr, start+1, end - 1);
    }

}


const arr = [5, 4, 3, 2, 1];
reverseArray(arr, 0, arr.length - 1);
printArray(arr);















reverse array using inbuilt function: 
function printArray(arr){
   console.log("the reversed array is : ");
    for(let i =0; i< arr.length; i++){
       process.stdout.write(arr[i] + " ");
    }
    console.log();
}


function reverseArray(arr){
       arr.reverse();
}

const arr = [5, 4, 3, 2,1];
reverseArray(arr);
printArray(arr);





















check if the given string is Palindrome or not : 
function isPalindrome(s){
    let left = 0;
    let right = s.length - 1;

    while(left < right){
          if(!isAlnum(s[left])){
             left++;
          }
          else if(!isAlnum(s[right])){
              right--;
          }
          else if(s[left].toLowerCase() !== s[right].toLowerCase()){
                 return false;
          } else{
            left++;
            right--;
          }
    }
    return true;
}


function isAlnum(char){
    return char.match(/^[a-z0-9]+$/i) !== null;
}


const str = "ABCDCBA";
const ans = isPalindrome(str);

if(ans){
      console.log("palindrome");
} else{
       console.log("Not Palindrome");
}










check palindrome using recursive method: 
function palindrome(i, str){
       if(i >= str.length/2) return true;

       if(str[i]!=str[str.length-i-1]) return false;

       return palindrome(i+1, str);

}

let str = "mada";
console.log(palindrome(0,str));










//print fibonacci series up to nth term : 

function fibonacci(n){
    if(n === 0){
        console.log(0);
    } else if (n === 1){
          console.log(0, 1);
    } else{
         let fib = new Array(n + 1);
         fib[0] = 0;
         fib[1] = 1;
         for(let i = 2; i<= n; i++){
               fib[i] = fib[i - 1] + fib[i -2];
         }
         console.log(fib.join(' ')); 
    }
}

let N = 5;
fibonacci(N);












fibonacci series : space optimized:
JavaScript program to print Fibonacci series up to n-th term

function printFibonacci(n) {
       if (n == 0) {
           console.log(`The Fibonacci series up to ${n}th term`);
           console.log(0);
       } else {
           let secondLast = 0;
           let last = 1;
   
           console.log(`Fibonacci series up to ${n}th term:`);
           process.stdout.write(secondLast + " " + last + " ");
           let cur;
           for (let i = 2; i <= n; i++) {
               cur = last + secondLast;
               secondLast = last;
               last = cur;
               process.stdout.write(cur + " ");
           }
           console.log(); // To add a new line at the end
       }
   }
   
   const n = 5;
   printFibonacci(n);
   











print the nth term of the fibonacci series : 
function fibonacci(n){
  if(n <= 1)
       {
              return n;
       }

   let last = fibonacci(n - 1);
   let slast = fibonacci(n - 2);
   return last + slast;    

}

let n = 4;
console.log(fibonacci(n));