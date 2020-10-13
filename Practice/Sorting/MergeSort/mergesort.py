#Intution Behind the Merge Sort
'''
Merge sort is a divide and conquer appproach sorting technique
1. We try to divide the given array till only one element left by taking them into left and right
    array. Then we sort them by merging recursively till a final sorted array is received.

Pseudo Algo of Merge Sort
Given an array : A
MERGE_SORT(A,p,r)
    if p<r
        q=floor((p+r/2)
        MERGE_SORT(A,p,q)
        MERGE_sROT(A,q+1,r)
        MERGE(A,p,q,r)



MERGE(A,p,q,r)
    leftArray->A[p:q]
    rightArray->A[q:r]
    i,j,k=0
    LOOP K-> p to r
        if leftArray[i]<=rightArray[j]
            A[k]->leftArray[i]
            i+=1
        else
            A[k]->rightArray[j]
            j+=1
'''
# Time complexity analysis of Merge Sort

'''
If we look at the recurrence tree of the Merge sort 

                       n
              n/2                  n/2
        n/4           n/4     n/4         n/4
n/8         n/8  n/8     n/8 n/8  n/8 n/8     n/8

T(n) = T(n/2) + T(n/2) + O(n)

at every level time taken to merge --> O(n)
for n=8 depth of tree = 3
T(n) = 3.c.n --> c.n . lg2(n) -> c.n.lg2(2^3) - > 3.c.n

T(n)= O(nlogn)
space complexity -> O(n) because we are making array of size n as left and right array
'''

def mergesort(arr):
    n= len(arr)
    if n>1:
        mid=n//2
        left = arr[:mid]
        right=arr[mid:]
        mergesort(left)
        mergesort(right)
        merge(arr,left,right)

def merge(arr,left,right):
    i,j,k=0,0,0
    while i<len(left) and j<len(right):
        if left[i]<=right[j]:
            arr[k]=left[i]
            i+=1
        else:
            arr[k]=right[j]
            j+=1
        k+=1
    while i<len(left):
        arr[k]=left[i]
        i+=1
        k+=1
    while j<len(right):
        arr[k]=right[j]
        j+=1
        k+=1
        
arr=[54,26,73,17,77,31,44,55]
mergesort(arr)
print(arr)