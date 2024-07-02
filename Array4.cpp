// move all zeros to the end of the array : 
// brute force approach : 
// #include<bits/stdc++.h>
// using namespace std;

// vector<int> moveZeros(int n, vector<int> a){
//       vector<int> temp;
//       for(int i = 0; i < n; i++){
//          if(a[i] != 0)
//            temp.push_back(a[i]);
//       }

//       int nz = temp.size();

//       for(int i = 0; i < nz; i++){
//          a[i] = temp[i];
//       }

//       for(int i = nz; i < n; i++){
//           a[i] = 0;
//       }
//       return a;
// }

// int main(){
//      vector<int>arr = {1, 0, 2,3,2,0,0,4,5,1};
//      int n = 10;
//      vector<int> ans = moveZeros(n, arr);
//      for(auto &it: ans){
//           cout << it << " ";
//      }
//      cout << '\n';
//      return 0; 
// }








// optimal approach: (using 2 pointers): 
// #include<bits/stdc++.h>
// using namespace std;

// vector<int> moveZeros(int n, vector<int>a){
//      int j  = -1;
//      for(int i = 0; i < n; i++){
//          if(a[i] == 0){
//               j = i;
//               break;
//          }
//      }

//      if(j == -1) return a;

//      for(int i = j + 1;i < n; i++){
//           if(a[i] != 0){
//                swap(a[i], a[j]);
//                j++;
//           }
//      }
//      return a;
// }


// int main(){
//  vector<int> arr = {1, 0, 2, 3,2,0,0,4,5,1};
//   int n = 10;
//   vector<int> ans = moveZeros(n, arr);
//   for(auto &it : ans){
//     cout << it << " ";
//   }
//   cout << '\n';
//   return 0;





// }



















// Linear search in c : 
// given an array and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
// #include<bits/stdc++.h>
// using namespace std;

// int search(int arr[], int n, int num){
//     int i;
//     for(i = 0; i<n; i++){
//           if(arr[i]== num)
//             return i;
//     }
//     return -1;


// }

// int main(){
//      int arr[] = {1, 2,3,4,5};
//      int num = 4;
//      int n = sizeof(arr)/sizeof(arr[0]);
//      int val = search(arr,n, num);
//      printf("%d", val);
// }













// union of the two sorted arrays : 
// using map: 
// #include<bits/stdc++.h>
// using namespace std;

// vector<int> FindUnion(int arr1[], int arr2[], int n, int m){
//      map<int,int> freq;
//      vector<int> Union;
//      for(int i = 0; i <n; i++)
//        freq[arr1[i]]++;
//        for(int i = 0; i< m; i++)
//          freq[arr2[i]]++;
//            for(auto & it: freq)
//             Union.push_back(it.first);
//           return Union;   
// }

// int main(){
//    int n = 10, m = 7;
//    int arr1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
//    int arr2[] = {2, 3, 4, 4 , 5, 11, 12};
//    vector<int > Union = FindUnion(arr1, arr2, n , m);
//    cout << "Union of arr1 and arr2 is " << endl;
//    for(auto & val: Union)
//      cout << val << " ";
//      return 0; 
// }










// using set: 
// #include<bits/stdc++.h>
// using namespace std;

// vector <int> FindUnion(int arr1[], int arr2[], int n, int m){
//      set<int> s;
//      vector<int> Union;
//      for(int i = 0; i< n; i++)
//         s.insert(arr1[i]);
//      for(int i = 0; i<m; i++)
//          s.insert(arr2[i]);
//      for(auto & it: s)
//      Union.push_back(it);
//      return Union;    
// }

//  int main(){
//     int n = 10, m = 7;
//     int arr1[] = {1, 2, 3, 4, 5, 6, 7,8,9,10};
//     int arr2[] = {2, 3,4, 4, 5,11, 12};
//     vector<int> Union = FindUnion(arr1, arr2, n, m);
//     cout << "Union of arr1 and arr2 is " << endl;
//     for(auto & val: Union)
//       cout << val << " ";
//       return 0;
//  }


     







// using two pointers: 
#include<bits/stdc++.h>
using namespace std;

vector<int> FindUnion(int arr1[], int arr2[], int n, int m){
     int i = 0, j= 0;
     vector <int> Union;
     while(i < n && j < m){
         if(arr1[i] <= arr2[j])
         {
            if(Union.size() == 0 || Union.back() != arr1[i])
               Union.push_back(arr1[i]);
               i++;

         } else{
             if(Union.size() == 0 || Union.back() != arr2[j])
                Union.push_back(arr2[j]);
                j++;
         }
     }
     while(i < n){
       if(Union.back() != arr1[i])
         Union.push_back(arr1[i]);
         i++;
     }
       while(j < m)
       {
          if(Union.back() != arr2[j])
            Union.push_back(arr2[j]);
            j++;
       }
       return Union; 
}

int main(){
    int n= 10, m = 7;
    int arr1[] = {1, 2, 3, 4,5, 6, 7,8,9,10};
    int arr2[] = {2, 3, 4 ,4, 5, 11, 12};
    vector<int> Union = FindUnion(arr1, arr2, n, m);
    cout << "Union of arr1 and arr2 is : " << endl;
    for(auto & val: Union)
      cout << val << " ";
      return 0;
}

