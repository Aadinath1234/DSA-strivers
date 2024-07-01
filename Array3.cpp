//Given an array of N integers left rotate the array by one place : brute force approach : 
// #include<bits/stdc++.h>
// using namespace std;

// void solve(int arr[], int n){
//       int temp[n];
//       for(int i = 1; i < n; i++){
//           temp[ i - 1] = arr[i];
//       }
//       temp[n - 1] = arr[0];
//       for(int i = 0; i < n; i++){
//           cout << temp[i] << " "; 
//       }
//       cout << endl; 
// }
// int main(){
//       int n = 5;
//       int arr[] = {1, 2, 3, 4, 5};
//       solve(arr, n);
// }



// optimal approach: 
// #include<bits/stdc++.h>
// using namespace std;

// void solve(int arr[], int n){
//        int temp = arr[0];
//        for(int i = 0; i < n - 1; i++){
//           arr[i] = arr[i + 1];
//        }
//        arr[n -1 ] = temp;
//        for(int i = 0; i< n; i++){
//          cout << arr[i] << " ";
//        }
// }

// int main(){
//       int n = 5;
//       int arr[]  = {1, 2, 3, 4,5};
//       solve(arr, n);
// }






//Rotate array by K elements: 
// given an array of integers rotating array of elements by k elements either left or right : 
// #include <bits/stdc++.h>
// using namespace std;

// void Rotatetoright(int arr[], int n , int k ){
//    if(n == 0)
//      return; 
//      k = k % n;
//      if(k > n)
//        return;

//        int temp[k];
//        for(int i = n - k; i<n; i++){
//           temp[i - n + k] = arr[i];
//        }
//        for(int i = n - k - 1; i >=0; i--){
//           arr[i + k] = arr[i];
//        }
//        for(int i = 0; i<k; i++){
//          arr[i] = temp[i];
//        }
// }

// int main(){
//      int n = 7;
//      int arr[] = {1, 2, 3, 4, 5, 6, 7};
//      int k = 2;
//      Rotatetoright(arr, n, k);
//      cout << "After rotating the elements to right " << endl;
//      for(int i = 0; i<n; i++){
//          cout << arr[i] << " ";
//      }
//      return 0;
// }



//for rotating the elements to left: 
// #include<bits/stdc++.h>
// using namespace std;

// void Rotatetoleft(int arr[], int n, int k ){
//  if(n==0)
//    return;
//  k = k % n;
//  if(k > n)
//    return;
//    int temp[k];
//    for(int i = 0; i< k; i++){
//     temp[i] = arr[i];
//    }
//    for(int i = 0; i<n - k; i++){
//      arr[i] = arr[i + k];
//    }
//    for(int i = n - k; i<n; i++){
//       arr[i] = temp[i -n +k];
//    }
// }

// int main(){
//      int n = 7;
//      int arr[] = {1,2,3,4,5,6,7};
//      int k= 2;
//      Rotatetoleft(arr,n,k);
//      cout << "After rotating the elements to left " << endl;
//      for(int i = 0; i< n; i++){
//          cout << arr[i] << " ";
//      }
//      return 0;
// }



// reverse the elements to  right: 
// #include<bits/stdc++.h>
// using namespace std;

// void Reverse(int arr[], int start, int end){
//      while(start <= end){
//           int temp = arr[start];
//           arr[start] = arr[end];
//           arr[end] = temp;
//           start++;
//           end--;
//      }
// }

// void Rotateeletoright(int arr[], int n, int k){
     
//      Reverse(arr, 0, n-k-1);
//      Reverse(arr, n-k, n-1);
//      Reverse(arr, 0, n-1);
// }

// int main(){
//  int arr[] = {1, 2, 3,4,5,6,7};
//  int n = 7;
//  int k = 2;
//  Rotateeletoright(arr, n, k);
//  cout << "After Rotating the k elements to right";
//  for(int i = 0; i<n; i++)
//    cout << arr[i] << " ";
//    cout << endl;
//    return 0;
// }





// rotating elements to left: 
#include<bits/stdc++.h>
using namespace std;

void Reverse(int arr[], int start, int end){
     while(start <= end){
         int temp = arr[start];
         arr[start] = arr[end];
         arr[end] = temp;
         start++;
         end--;
     }
}

void Rotateeletoleft(int arr[], int n, int k){
    Reverse(arr, 0, k - 1);
    Reverse(arr, k , n - 1);
    Reverse(arr, 0, n - 1);
}

int main(){
   int arr[] = {1, 2, 3, 4,5, 6,7};
   int n = 7;
   int k = 2;
   Rotateeletoleft(arr, n, k);
   cout << "After rotating the k elements to left ";
   for(int i = 0; i< n; i++)
     cout << arr[i] << " ";
     cout << endl;
    return 0;

}