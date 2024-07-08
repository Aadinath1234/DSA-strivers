// longest subarray with sum k (positives and negatives):
// given an array and a sum k , we need to print the length of the longest subarray that sums to k. : Brute force approach :native approach.
// #include<bits/stdc++.h>
// using namespace std;

// int getLongestSubarray(vector<int>& a, int k){
//     int n = a.size();

//     int len = 0; 
//     for(int i = 0; i< n; i++){
//          for(int j=i; j < n; j++){
//             int s = 0;
//             for(int K = i; K <= j; K++){
//                 s += a[K];
//             }
//             if(s == k)
//               len = max(len, j-i +1);
//          }
//     }
//     return len; 
// }

// int main(){
//     vector<int> a = {-1, 1, 1};
//     int k = 1;
//     int len = getLongestSubarray(a, k);
//     cout << "the length of the longest subarray is: " << len << "\n";
//     return 0;
// }



// better approach : 
// #include<bits/stdc++.h>
// using namespace std;

// int getLongestSubarray(vector<int>& a, int k ){
//     int n = a.size();
//     int len = 0;
//     for(int i = 0; i < n; i++){
//          int s = 0; 
//          for(int j = i; j < n; j++){
//             s += a[j];

//             if(s == k)
//               len = max(len, j - i + 1);
//          }
//     }
//     return len; 
// }

// int main(){
//      vector<int> a = {-1, 1, 1};
//      int k = 1;
//      int len = getLongestSubarray(a, k);
//      cout << "the length of the longest subarray is: " <<len << "\n";
//      return 0;
// }





//optimal approach: (using hashing): 
 #include<bits/stdc++.h>
 using namespace std;

 int getLongestSubarray(vector<int>& a, int k ){
    int n = a.size();
    map<int, int> preSumMap;
    int sum = 0;
    int maxLen = 0;
    for(int i = 0; i < n; i++){
         sum += a[i];

         if(sum == k){
             maxLen = max(maxLen, i + 1);
         }

         int rem = sum - k; 

         if(preSumMap.find(rem) != preSumMap.end()){
             int len = i - preSumMap[rem];
             maxLen = max(maxLen, len);
         }

         if(preSumMap.find(sum) == preSumMap.end()){
            preSumMap[sum] = i; 
         }
    }
    return maxLen; 
 }

 int main(){
   vector<int> a = {-1 , 1, 1};
   int k = 1;
   int len = getLongestSubarray(a, k);
   cout << "The length of the longest subarray is : " << len << "\n";
   return 0; 
 }