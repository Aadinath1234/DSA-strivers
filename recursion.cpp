recursion 1: 

#include<bits/stdc++.h>
using namespace std;

int cnt = 0;
void print(){
      if(cnt == 3) return;
      cout << cnt << endl;
      cnt++;
      print();
}

int main(){
   print();
   return 0;
}




recursion 2: 
 print the name  n times using recursion :  
 #include <bits/stdc++.h>
using namespace std;

void f(int i, int n) {
    if (i > n) return;
    cout << "raj" << endl;
    f(i + 1, n); // Removed the unnecessary int casting
}

int main() {
    int n;
    cin >> n;
    f(1, n);
    return 0; // Added return statement
}








print from 1 to N using Recursion : 

#include<bits/stdc++.h>
using namespace std;

void func(int i , int n){
     if(i>n) return ;
     cout << i << endl;
     func(i+1, n);
}

int main(){
      int n = 4;
      func(1, n);
      return 0; 
}



another way to print from 1 to N using backtracking method: 
#include <bits/stdc++.h>
using namespace std;

void func(int i, int n){
     if(i < 1) return ;

     func(i-1, n);
     cout << i << endl;
}

int main(){
   int n = 4;
   func(n, n);
   return 0;
}







print from N to 1 using recursion : 
#include<bits/stdc++.h>
using namespace std;

void func(int i , int n){
     if(i < 1) return;
     cout << i << endl; 

     func(i-1, n);


}

int main(){
     int n= 4;
     func(n,n);
     return 0;
}




print N to 1 using backtracking : 
#include<bits/stdc++.h>
using namespace std;


void func(int i, int n){
     if(i>n) return;
      func(i + 1,n);
      cout << i << endl;
}

int main(){
     int n = 4;
     func(1, n);
     return 0;
}





sum of first N  Natural Numbers : 
#include<bits/stdc++.h>
using namespace std;

void sum(int n){
          int sum = 0;
     for(int i = 1; i<=n; i++ ){
          sum = i+sum;
     }
     cout<< sum <<endl;
   
}
int main(){
      sum(5);
      return 0;
}



sum of n natural numbers: using formula N(N+1)/2;
 #include<bits/stdc++.h>
using namespace std;

void summ(int n){
   int sum = n * (n+1)/2;
   cout << sum <<endl;
}

int main(){
     summ(5);
     return 1;
}




recursive way of calculating the sum of first N natural numbers: 
parameterized way: 

#include<bits/stdc++.h>
using namespace std;

void func(int i ,int sum){
     if( i < 1)
     {
        cout<< sum <<endl;
        return ;
     }
     func(i-1,sum+i);
}

int main(){
     int n = 3;
     func(n , 0);
     return 0; 
}




functional way: 

#include<bits/stdc++.h>
using namespace std;

int  func(int n) {
    if(n == 0){
       return 0;
    }
    return n + func(n-1);
}

int main(){
   int n = 3;
   cout << func(n) <<endl;
   return 0;

}














Factorial of a number : Iterative and Recursive : 
#include<bits/stdc++.h>
using namespace std;

int factorial(int x){
     int ans = 1;
     for(int i = 1; i <= x;i++){
       ans = ans * i;
     }
     return ans;
}

int main(){
   int x = 5;
   int result = factorial(x);
   cout << result <<endl;
}









recursive way of calculating the factorial of first N numbers (functional way ):
#include<bits/stdc++.h>
using namespace std;

int Factorial(int n){
    if(n == 0){
       return 1;
    }
    return n * Factorial(n -1);
}
 
 int main(){
    int n = 5;
    cout << Factorial(n) << endl;
    
 }











Reverse a given array : 

#include<bits/stdc++.h>
using namespace std;

void printArray(int ans[], int n){
     cout << "reversed array is : " << endl;
        for(int i = 0; i < n; i++){
              cout << ans[i] << " ";
        }
}

void reverseArray(int arr[], int n){
     int ans[n];
     for(int i = n - 1; i >= 0; i--){
        ans[n - i - 1] = arr[i];
     }

     printArray(ans, n);
}

int main(){
     int n = 5;
     int arr[] = {5,4,3,2,1};
     reverseArray(arr, n);
     return 0; 
}












space-optimized iterative method : 
#include<bits/stdc++.h>
using namespace std;

void printArray(int arr[], int n){
       cout << "the reversed array is: "<< endl;
         for(int i = 0; i <n; i++){
              cout << arr[i] << " "; 
         }
}

void reverseArray(int arr[], int n){
       int p1 = 0, p2 = n - 1;
       while(p1 < p2 ){
           swap(arr[p1], arr[p2]);
           p1++; p2--;
       }
       printArray(arr, n);
}


int main(){
   int n = 5;
   int arr[] = {5, 4, 3,2 ,1};
   reverseArray(arr, n);
   return 0; 


} 









recursive method: 
#include<bits/stdc++.h>
using namespace std;

void printArray(int arr[], int n){
  cout << "the reversed array  is : " << endl;
   for(int i = 0; i < n; i++){
      cout << arr[i] << " "; 
   }
}

void reverseArray(int arr[], int start, int end){
      if(start < end){
            swap(arr[start], arr[end]);
            reverseArray(arr, start+1, end - 1);

      }
}

int main(){
   int n= 5;
   int arr[] = {5, 4,  3, 2, 1};
   reverseArray(arr, 0, n - 1);
   printArray(arr,  n);
   return 0;


}









 reverse array using library function (new approach )

#include<bits/stdc++.h>
using namespace std;

void printArray(int arr[], int n){
     cout << "the reversed array is: "<< endl;
     for(int i = 0; i< n; i++){
           cout << arr[i] << ' ';
     }
}


void reverseArray(int arr[], int n){
     reverse(arr, arr + n);
}

int main(){
  int n = 5;
  int arr[] = {5, 4, 3, 2, 1};
  reverseArray(arr, n);
  printArray(arr, n);
  return 0;


}










check if the given string is Palindrome or not : 
#include<bits/stdc++.h>
using namespace std;

bool isPalindrome(string s ){
      
       int left = 0, right = s.length() - 1;
       while(left < right){
           if(!isalnum(s[left]))
               left++;
           else if(!isalnum(s[right]))
               right--;
           else if(tolower(s[left]) != tolower(s[right]))
               return false;
           else{
                left++;
                right--;
           }            
       }
       return true;
}

int main(){
  string str = "ABCDCB";
  bool ans = isPalindrome(str);

  if(ans == true){
      cout << "Palindrome";
  } else{
       cout << "Not Palindrome";
  }
  return 0;
}  










check palindrome using recursive approach : 
#include<bits/stdc++.h>
using namespace std;

bool palindrome(int i , string& s){

     if(i>=s.length()/2) return true;

     if(s[i]!=s[s.length()-i-1]) return false;

     return palindrome(i+1, s);
}

int main(){
   string s = "mada";
   cout << palindrome(0, s);
   cout << endl;
   return 0;
}











print fibonacci series up to nth term : 
#include<bits/stdc++.h>
using namespace std;

int main(){
   int n = 5;
   if(n == 0){
      cout << 0;
   } else if(n == 1){
     cout << 0 << " " << 1 << "\n";
   } else{
        int fib[n + 1];
        fib[0] = 0;
        fib[1] = 1;
        for(int i = 2; i <= n; i++){
             fib[i] = fib[i - 1] + fib[i - 2];
        }

        cout << " The Fibonacci Series up to " << n << "th term: " << endl;
        for(int i = 0; i<=n; i++){
            cout << fib[i] << " ";
        }
   }
}














fibonacci series : space optimized: 
#include<bits/stdc++.h>
using namespace std;


int main(){
    int n = 5;
    if(n == 0){
         cout << "the fibonacci series upto " << n << "th term"<<  endl;
         cout << 0;
    }

else {
   int secondLast = 0;
   int last = 1;

   cout << "fibonacci series upto " << n << "th term " << endl; 
   cout << secondLast << " " << last << " ";
   int cur;
   for(int i = 2; i<=n; i++){
      cur = last + secondLast;
      secondLast = last;
      last = cur;
      cout << cur << endl;
   }
}    
}











// print n the number of fibonacci series: 
#include <bits/stdc++.h>
using namespace std;

int fibonacci(int N){
    if (N <= 1 ){
          return N;
    }

     int last = fibonacci(N - 1);
    int slast = fibonacci(N - 2);

    return last + slast;
}

int main(){
    int N = 4;
    cout << fibonacci(N) << endl;
    return 0;
}