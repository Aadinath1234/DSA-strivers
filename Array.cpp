//find the largest element in an array : 
//brute force approach 
// #include<bits/stdc++.h>
// using namespace std;

// int sortArr(vector<int> &arr){
//       sort(arr.begin(), arr.end());
//       return arr[arr.size()-1];
// }

// int main(){
//       vector<int> arr1 =  {2,5,1,3,0};
//       vector<int> arr2 = {8, 10, 5,7,9};

//       cout << "the largest element in the array is : "<< sortArr(arr1)<<endl;
//       cout << "The largest element in the array is : "<< sortArr(arr2);

//       return 0; 
// }









// recursive approach : 
// #include<bits/stdc++.h>
// using namespace std;

// int findLargestElement(int arr[], int n){
//      int max = arr[0];
//      for(int i =0; i<n; i++){
//            if(max < arr[i]){
//                max = arr[i];
//            }
//      }
//      return max; 
// }

// int main(){
//       int arr1[] = {2, 5, 1, 3, 0};
//       int n= 5;
//       int max = findLargestElement(arr1, n);
//       cout << "The largest element in the array is: " << max  << endl;


//       int arr2[] = {8, 10, 5, 7,9};
//       n = 5;
//       max = findLargestElement(arr2, n);
//       cout << "The largest element in the array is : " << max << endl;
//       return 0; 
// }

















// #2: find second smallest and second largest element in an array : 
// #include<bits/stdc++.h>
// using namespace std;

// void getElements(int arr[], int n)
// {
//    if(n == 0 || n == 1)
//      cout << - 1 << " " << -1 << endl;
//     sort(arr, arr + n);
//     int small = arr[1];
//     int large = arr[n - 2];
//     cout << "second smallest is " << small << endl;
//     cout << "second largest is " << large << endl;

// }

// int main(){
//       int arr[] = {1, 2, 4, 6, 7, 5};
//       int n = sizeof(arr) / sizeof(arr[0]);
//       getElements(arr, n);
//       return 0;
// }

// better approach :
// #include<bits/stdc++.h>
// using namespace std;

// void getElements(int arr[], int n){
//      if(n==0 || n==1)
//        cout << -1 << " "<< -1 <<endl;
//        int small = INT_MAX, second_small=INT_MAX;
//        int large = INT_MIN, second_large=INT_MIN;
//        int i ;
//        for(i=0;i<n; i++){
//           small = min(small, arr[i]);
//           large=max(large, arr[i]);
//        }
//        for(i=0;i<n; i++){
//           if(arr[i] < second_small && arr[i]!= small)
//              second_small = arr[i];
//           if(arr[i] > second_large && arr[i]!= large)
//             second_large=arr[i];  
//        }

//        cout << "second smallest is " << second_small<<endl;
//        cout << "second largest is "<< second_large << endl;
// }

// int main(){
//       int arr[] = {1, 2, 4, 6, 7, 5};
//       int n = sizeof(arr)/ sizeof(arr[0]);
//       getElements(arr, n);
//       return 0;
// }



// Best solution: 
#include<bits/stdc++.h>
using namespace std;


int secondSmallest(int arr[], int n){
      if(n<2)
        return -1;
      int small = INT_MAX;
      int second_small = INT_MAX;
      int i;
      for(i=0; i<n; i++) {
          if(arr[i] < small)
          {
              second_small = small;
              small = arr[i];
          }
           else if(arr[i] < second_small && arr[i] != small)
           {
              second_small = arr[i];
           }
      } 
      return second_small;
}

int secondLargest(int arr[], int n){
     if(n<2)
     return -1;
       int large = INT_MIN, second_large=INT_MIN;
       int i;
       for(i=0; i<n;i++){
            if(arr[i] > large)
            {
                  second_large = large;
                  large = arr[i];
            }
             else if(arr[i] > second_large && arr[i] != large){
                  second_large = arr[i];
             }
       }
       return second_large;
}

int main(){
     int arr[] = {1, 2, 4, 7,7, 5};
     int n = sizeof(arr)/sizeof(arr[0]);
       int sS = secondSmallest(arr,n);
       int sL = secondLargest(arr,n);
     cout << "Second smallest is " << sS << endl;
     cout << "second Largest is " << sL << endl;
     return 0;  
}