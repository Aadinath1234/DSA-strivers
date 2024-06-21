//#1: 
// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//     int n;
//     cin >> n;
//     int arr[n];
//     for(int i = 0; i< n; i++){
//          cin >> arr[i];
//     }

//     //precompute 
//     int hash[13] = {0};
//     for(int i = 0; i<n; i++){
//           hash[arr[i]] += 1;
//     }

//     int q;
//     cin >> q;
//     while(q--){
//        int number;
//        cin >> number;
//        //fetch 
//        cout << hash[number] << endl;
//     }
//     return 0;

// }





//#2: 
// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//   string s;
//   cin >> s;

//   //pre compute 
//   int hash[26] = {0};
//   for(int i = 0; i<s.size(); i++){
//       hash[s[i] - 'a']++;
//   }
//   int q;
//   cin >> q;
//   while(q--){
//      char c;
//      cin >> c;
//      //fetch 
//      cout << hash[c-'a'] << endl;
//   }
//   return 0;


// }


// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//   string s;
//   cin >> s;

//   //pre compute 
//   int hash[256] = {0};
//   for(int i = 0; i<s.size(); i++){
//       hash[s[i] - 'a']++;
//   }
//   int q;
//   cin >> q;
//   while(q--){
//      char c;
//      cin >> c;
//      //fetch 
//      cout << hash[c-'a'] << endl;
//   }
//   return 0;


// }





//#3: 
// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//   int n;
//   cin >> n;
//   int arr[n];
//   for(int i = 0 ; i<n;i++){
//      cin >> arr[i];
//   }

//   //pre-compute 
//   map<int, int> npp;
//   for(int i = 0; i<n; i++){
//     npp[arr[i]]++;
//   }

//   //iterate in the map 
//   for(auto it : npp){
//      cout << it.first << "->" << it.second << endl; 
//   }


//   int q;
//   cin >> q;
//   while(q--){
//      int number;
//      cin >> number;
//      //fetch 
//      cout << npp[number] << endl;

//   }
//    return 0;
// }

//it is also can be written in this form : 
// #include<bits/stdc++.h>
// using namespace std;

// int main(){
//   int n;
//   cin >> n;
//   int arr[n];
//   map<int, int> npp;
//   for(int i = 0; i<n; i++){
//     cin >> arr[i];
//     npp[arr[i]]++;
//   }

//   //pre-compute 
  

//   //iterate in the map 
//   for(auto it : npp){
//      cout << it.first << "->" << it.second << endl; 
//   }


//   int q;
//   cin >> q;
//   while(q--){
//      int number;
//      cin >> number;
//      //fetch 
//      cout << npp[number] << endl;

//   }
//    return 0;
// }




//unordered map :
#include<bits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;
  int arr[n];
  unordered_map<int, int> npp;
  for(int i = 0; i<n; i++){
    cin >> arr[i];
    npp[arr[i]]++;
  }

  //pre-compute 
  

  //iterate in the map 
  for(auto it : npp){
     cout << it.first << "->" << it.second << endl; 
  }


  int q;
  cin >> q;
  while(q--){
     int number;
     cin >> number;
     //fetch 
     cout << npp[number] << endl;

  }
   return 0;
}