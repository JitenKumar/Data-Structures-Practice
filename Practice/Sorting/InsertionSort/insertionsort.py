#Intution Behing the Isertion Sort
'''
As the name suggest in insertion sort we are trying to insert the element at its correct position
It's same like card sorting where we having a pack of card and we pick each card to place it to its correct position

Algo Steps
Given an array of length n
1.For j=1 to n
    key = arr[j]
    i=j-1
    #if this key is less than its previous sub array then insert it into it correct position
    while i>0 and arr[i]>key
        # swap the elemet with the key and place key to its correct position in the subarray
        arr[i+1],arr[i]=arr[i],key
        i-=1
'''
#Time complexity Analysis of insertion sort
'''
1. If we take the comparison done in the insertion sort in each iteration
    we have to compare the current element with it n-1 elements max times 
    and minimum no of comparision we have to make is only 1 
2.so minimu comparison are n-1 and max comparisons are n(n-1)/2

3.So best case complexity is an+b ---> O(n)
    Worst case complexity is an^2 + b^n + c +1 ---> O(n^2)
    
'''

def insertionsort(n,arr):
    for j in range(1,n):
        key=arr[j]
        i=j-1
        while i>=0 and arr[i]>key:
            arr[i+1],arr[i]=arr[i],key
            i-=1

arr = [6,5,3,2,1,8,7,2,4]
n=len(arr)
insertionsort(n, arr)
print(arr)
