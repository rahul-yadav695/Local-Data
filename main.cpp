#include <iostream>
using namespace std ; 
int main (){
    int arr[] = {15,65,98,78,24,12,2};
    int max = arr[0];
    int size = sizeof(arr) / sizeof(arr[0]);
    for(int i=1; i<size; i++){
      if(arr[i]>max){
        max = arr[i];
      }
      cout<<max;

      return 0 ;
    }
}