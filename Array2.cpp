//#3 check if an array is sorted : 
// given an array of size n, write a program to check if the given array is sorted in (ascending / increasing / non-decreasing ) order or not . if the array is sorted then return true else return false. 
// Brute force approach : 


// #include <bits/stdc++.h>
// using namespace std;

// bool isSorted(int arr[], int n){
//         for(int i = 0; i < n; i++){
//               for(int j = i+ 1; j < n; j++){
//                     if(arr[j] < arr[i])
//                     return false;
//               }
//         }
//         return true;
// }

// int main(){
//      int arr[] = {1, 2,3,4,5}, n = 5;
//      bool ans = isSorted(arr, n);
//      if(ans) cout << "True " << endl;
//      else cout << "False" << endl;
//      return 0;
// }






// optimal approach : 
//  #include<bits/stdc++.h>
//  using namespace std;

//  bool isSorted(int arr[], int n){
//        for(int i = 1; i<n; i++){
//             if(arr[i] < arr[i - 1])
//               return false;
//        }
//        return true; 
//  }


//  int main(){
//       int arr[] = {1, 2, 3, 4, 5}, n = 5;
//       printf("%s", isSorted(arr, n) ? "true": "false");
//  }















// #4 Remove Duplicates in-place from  sorted array : 
//brute force approach: 
// #include<bits/stdc++.h>
// using namespace std;

// int removeDuplicates(int arr[], int n){
//       set < int > set;
//       for(int i = 0; i < n; i++){
//           set.insert(arr[i]);
//       }
//       int k = set.size();
//       int j = 0;
//       for(int x : set){
//            arr[j++] = x;
//       }
//       return k;
// }

// int main(){
//    int arr[] = {1,1,2,2,2,3,3};
//    int n= sizeof(arr) / sizeof(arr[0]);
//    int k = removeDuplicates(arr, n);
//    cout << "the array after removing duplicate elements: " << endl;
//    for(int i = 0; i < k; i++){
//        cout << arr[i] << " "; 
//    }

// }


// optimal approach : 
#include<bits/stdc++.h>
using namespace std;

int removeDuplicates(int arr[], int n){
      int i = 0;
      for(int j = 1; j < n; j++){
          if(arr[i] != arr[j]){
              i++;
              arr[i] = arr[j];
          }
      }
      return i + 1;
}
int main(){
      int arr[] ={1,1,2,2,2,3,3};
      int n= sizeof(arr)/ sizeof(arr[0]);
      int k = removeDuplicates(arr,n);
      cout << "the array after removing duplicate elements is " << endl;
      for(int i = 0; i< k; i++){
         cout << arr[i] << " "; 
      }
}