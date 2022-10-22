#include<stdio.h>
int rem;
int euclid(int n,int m){
    while(n != 0){
    printf("%d, %d\n", m, n);
    rem = m % n;
    m = n;
    n = rem;
}
}
int main(){
    euclid(31415, 14142);
}