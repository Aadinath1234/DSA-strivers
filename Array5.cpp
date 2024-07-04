// find the missing number in an array : brute force approach 

// #include<bits/stdc++.h>
// using namespace std;

// int missingNumber(vector<int>&a, int N){
      
//       for(int i =  1; i <= N; i++){
//           int flag = 0;
//           for(int j =0; j < N - 1; j++){
//               if(a[j] == i){
//                   flag = 1;
//                   break;

//               }
//           }
//           if(flag == 0) return i;

//       }
//       return -1;
// }

// int main(){
//       int N = 5;
//       vector<int> a = {1, 2, 4, 5};
//       int ans = missingNumber(a, N);
//       cout << "The missing number is: "<< ans << endl;
//       return 0;
// }




// better approach: using hashing: 
// #include<bits/stdc++.h>
// using namespace std;

// int missingNumber(vector<int>&a, int N){
//       int hash[N+1] = {0}; 
//       for(int i = 0; i < N - 1; i++)
//         hash[a[i]]++;

//         for(int i = 1;i <= N; i++){
//              if(hash[i] == 0){
//                  return i;
//              }
//         }
//         return -1; 
// }


// int main(){
//        int N = 5;
//        vector<int> a = {1, 2, 4, 5};
//        int ans = missingNumber(a, N);
//        cout << "The missing number is : " << ans << endl;
//        return 0;
// }



// optimal approach: Summation approach: 
// #include<bits/stdc++.h>
// using namespace std;

// int missingNumber(vector<int>&a, int N){
//       int sum = (N * (N + 1))/2;
//       int s2 = 0;
//       for(int i = 0; i < N - 1; i++){
//         s2 += a[i];
//       }

//       int missingNum = sum - s2;
//       return missingNum; 
// }

// int main(){
//   int N = 5;
//   vector<int> a = {1,2,4,5};
//   int ans = missingNumber(a, N);
//   cout << "The missing number is: " << ans << endl; 
//   return 0;
// }



// optimal approach :xor approach: 
// #include<bits/stdc++.h>
// using namespace std;

// int missingNumber(vector<int>&a, int N){
//       int xor1 = 0, xor2 = 0;
//       for(int i = 0; i< N-1; i++){
//          xor2 = xor2 ^ a[i];
//          xor1 = xor1 ^ (i + 1);

//       }
//       xor1 = xor1 ^ N;
//       return (xor1 ^ xor2);
// }

// int main(){
//   int N = 5;
//   vector<int> a = {1, 2,4,5};
//   int ans = missingNumber(a,N);
//   cout << "The missing number is: " << ans << endl;
//   return 0;

// }






//count maximum consecutive one's in the array : 
#include<bits/stdc++.h>
using namespace std;

class Solution{
     public: 
     int findMaxConsecutiveOnes(vector<int> & nums){
          int cnt = 0;
          int maxi = 0;
          for(int i = 0; i<nums.size(); i++){
            if(nums[i] == 1){
                 cnt++;
            }else{
                 cnt = 0;
            }
            maxi = max(maxi, cnt);
          }
          return maxi;
     }
};

int main(){
  vector<int> nums = {1, 1, 0, 1,1,1};
  Solution obj;
  int ans = obj.findMaxConsecutiveOnes(nums);
  cout << "the maximum consecutive 1's are " << ans;
  return 0; 


}