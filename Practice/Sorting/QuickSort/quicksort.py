# Intution Behind the Quick Sort
'''
Quick sort is also a type of the divide and conquer algo.
How it works.
1. Choose a pivot element-> idea here is to make the array that all elements to the left of the
    array are smaller than the pivot element and all the elements to the right are greater than the pivot element.
2. Recursively solve this problem to sort the given array
Pseudo Code
QUICKSORT(A,p,r)
    if p<r
        q=PARTITION(A,p,r)---> partition the array around the pivot element  x<= pivot >= y in the array
        #recursively solve for the left elements of subarray
        QUICKSORT(A,p,q-1)
        QUICKSORT(A,q+1,r)

PARTITION(A,p,r)
    pivot->A[p]
    i=p
    LOOP j --> p+1 to r
        do if A[j]<pivot
            i+=1
            swap(A[j],A[i])
    swap(A[i],A[p])
    return i # return the final pivot element index 


# what is the logic of the recursive approach
1. Once we partition the array around the pivot element than the elements to the left of the pivot are not in the sorted order
    we will recursively solve those array 
2. Once this is done than we will recursively solve the right array elements which are greater than the pivot element
'''

# Time complexity Analysis

'''
Best Case Time complexity -> O(nlogn)
Worst Case -> When Array is already sorted -< O(n^2)

'''
def partition(arr,p,r):
    pivot = arr[p]
    i=p
    for j in range(p+1,r+1):
        if arr[j]<=pivot:
            i+=1
            arr[i],arr[j]=arr[j],arr[i]
    arr[i],arr[p]=pivot,arr[i]
    return i


def quicksort(arr,p,r):
    if p<r:
        q=partition(arr,p,r)
        quicksort(arr,p,q-1)
        quicksort(arr,q+1,r)
        
arr = [54,26,93,17,77,31,41,55]
r= len(arr)
quicksort(arr,0,r-1)
print(arr)