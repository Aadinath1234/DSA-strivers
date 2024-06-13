// count digits 

#include<bits/stdc++.h>
using namespace std;

int count(int n ){
      int cnt = 0;
      while(n > 0){
         int lastDigit = n % 10;
         cnt = cnt + 1;
         n = n / 10;

      }
      return cnt;
}




// #include<bits/stdc++.h>
// using namespace std;


// int count(int n){
//    int cnt = 0;
//    while(n > 0){
//         cnt = cnt + 1;
//         n = n/10;
//    }
//    return cnt; 
// }







// #include<bits/stdc++.h>
// int count (int n){
//        int cnt = (int )(log10(n) + 1);
//        return cnt; 
// }






// Reverse a number : 

// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//         int n;
//         cin >> n;
//         int revNum = 0;
//         while(n > 0){
//              int id = n%10;
//              revNum = (revNum * 10) + id;
//              n= n/10;
//         }
//         cout << revNum; 
// }






// check palindrome
// #include<bits/stdc++.h>
// using namespace std;


// int main(){
//    int n; 
//    cin >> n;
//    int revNum = 0;
//    int dup = n;
//    while(n>0){
//         int id= n%10;
//         revNum = (revNum * 10) + id;
//         n = n/10;
//    }
//    if(dup == revNum) cout << "true";
//    else cout << "false"; 



// }







// divisor problem 
// #include<bits/stdc++.h>
// using namespace std;

// void printDivisors(int n){
//          for(int i = 1; i <=n ; i++){
//               if(n%i == 0){
//                    cout << i << " ";
//               }
//          }
// }

// int main(){
//    int n;
//    cin >> n;
//    printDivisors(n);
//    return 0;

// }








// divisor problem in other manner : 
// #include <bits/stdc++.h>
// using namespace std;

// void printDivisors(int n) {
//      vector<int> ls;
//      for(int i = 1; i<=sqrt(n); i++){
//        if(n%i == 0){
//               ls.push_back(i);
//               if((n/i) != i){
//                    ls.push_back(n/i);
//               }
//        }
//      }

//      sort(ls.begin(), ls.end());
//      for(auto it : ls) cout << it << " ";
// }

// int main(){
//     int n;
//     cin>> n;
//     printDivisors(n);
//     return 0; 
// }








//prime number problem: 
// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//     int n;
//     cin >> n;
//     int cnt = 0;
//     for(int i = 1; i*i<=n; i++){
//         if(n%i == 0){
//              cnt++;
//              if((n/i) != i) cnt ++;
//         }
//     }
//     if(cnt == 2) cout << "true ";
//     else cout << "false";

// }








// gcd problem : 
int gcd(int a, int b){
   while(a > 0 && b > 0){
       if(a >b) a = a%b;
       else b =b % a;
   }
   if(a==0) return b;
   return a;
}
