// count frequency of each element in the array : using two loops . 
// problem statement: given an array we have found the number of occurences of each element in the array : 
// #include<bits/stdc++.h>
// using namespace std;

// void countFreq(int arr[], int n){
//    vector<bool> visited(n, false);

//    for(int i = 0 ; i< n; i++){
//       if(visited[i] == true)
//           continue;

//        int count = 1;
//        for(int j = i + 1; j<n; j++){
//           if(arr[i] == arr[j]){
//               visited[j] = true;
//               count++;
//           }
//        }   
//        cout << arr[i] << " " << count << endl;
//    }
// }

// int main(){
//     int arr[] = {10, 5, 10, 15, 10, 5};
//     int n = sizeof(arr) / sizeof(arr[0]);
//     countFreq(arr, n);
//     return 0;
// }




// using map : 
// #include<bits/stdc++.h>
// using namespace std;

// void Frequency(int arr[], int n){
//   unordered_map<int,int> map;

//   for(int i = 0; i < n; i++)
//        map[arr[i]]++;

//    for(auto x : map)
//       cout << x.first << " " << x.second << endl;    
// }

// int main(){
//    int arr[] = {10,5,10, 15, 10, 5};
//    int n = sizeof(arr) /sizeof(arr[0]);
//    Frequency(arr, n);
//    return 0;



// }










// given an array of size N. find the highest and lowest frequency element. 
// #include<bits/stdc++.h>
// using namespace std;

// void countFreq(int arr[], int n){
//    vector<bool> visited(n, false);
//    int maxFreq = 0, minFreq = n;
//    int maxEle = 0, minEle =0;

//    for(int i =0; i< n; i++){
//        if(visited[i] == true)
//        continue;


//        int count = 1;
//        for(int j = i + 1; j< n; j++){
//           if(arr[i] == arr[j]){
//                visited[j] = true;
//                count++;
//           }
//        }
//        if(count > maxFreq){
//         maxEle = arr[i];
//         maxFreq = count;
//        }
//        if(count < minFreq){
//         minEle = arr[i];

//         minFreq = count;
//        }
//    }
//    cout << "the highest frequency element is : "<< maxEle;
//    cout << "The lowest frequency element is : " << minEle;
// }

// int main(){
//   int arr[] = {10, 5, 10, 15, 10, 5};
//   int n = sizeof(arr) / sizeof(arr[0]);
//   countFreq(arr, n);
//   return 0; 
// }







// using map function : finding highest and lowest frequency .
#include<bits/stdc++.h>
using namespace std;

void Frequency(int arr[], int n){
  unordered_map<int,int> map;
  for(int i = 0; i<n; i++)
     map[arr[i]]++;

    int maxFreq = 0, minFreq =n;
    int maxEle =0, minEle = 0;

    for(auto it :map){
        int count = it.second;
        int element = it.first;

        if(count > maxFreq){
           maxEle = element;
           maxFreq =count;
        }
        if(count < minFreq){
           minEle = element;
           minFreq = count;
        }
    } 
     cout << "highest frequency element is : "<< maxEle;
     cout << "lowest frequency element is: "<< minEle;

}


int main(){
  int arr[] = {10, 5, 10, 15, 10, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  Frequency(arr, n);
  return 0;
}
