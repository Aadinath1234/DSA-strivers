// //#1: 
// #include<bits/stdc++.h>
// using namespace std;

// void bubble_sort(int arr[], int n){
//     if(n==1) return ;

//     for(int j = 0; j<=n -2; j++){
//           if(arr[j] > arr[j + 1]){
//               int temp = arr[j+1];
//               arr[j+1] = arr[j];
//               arr[j] = temp; 
//           }
//     }
//     bubble_sort(arr, n-1);
// }

// int main(){
//   int arr[] = {13, 46, 24, 52, 20, 9};
//   int n = sizeof(arr) / sizeof(arr[0]);

//   cout << "Before using bubble sort " << endl;
//   for(int i = 0; i< n; i++){
//       cout << arr[i] << " ";
//   }
//   cout << endl; 

//   bubble_sort(arr,n);
//   cout << "After using bubble sort: " <<"\n";
//   for(int i = 0; i<n; i++){
//       cout << arr[i] <<" ";
//   }

//   cout << "\n";
//   return 0;




// }


//for best cases : 

#include<bits/stdc++.h>
using namespace std;

void bubble_sort(int arr[], int n){
    if(n == 1) return;

    int didSwap = 0;
    for(int j = 0; j<=n-2; j++){
        if(arr[j] > arr[j+1]){
              int temp = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = temp; 
              didSwap =1;
        }


    }

    // if no swapping happens: 
    if(didSwap == 0) return;

    //range reduced after recursion: 
    bubble_sort(arr, n - 1);
}

int main(){
   int arr[] = {13, 46, 24, 52, 20, 9};
   int n= sizeof(arr) / sizeof(arr[0]);
   cout << "Before using bubble sort : " << endl;
   for(int i = 0; i< n; i++){
       cout << arr[i] << " ";
   }
   cout << endl;


  bubble_sort(arr, n);
  cout << "After using bubble sort " << "\n";
  for(int i = 0; i< n;i++){
      cout << arr[i] << " ";
  }
  cout << "\n";
  return 0;






}