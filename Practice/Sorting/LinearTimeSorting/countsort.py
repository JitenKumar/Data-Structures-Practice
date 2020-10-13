# Intution behind the Counting sort given certain conditions
'''
Given an array having numbers and some no are repeated .
If array contain some k distinct no with some frequencies than we can keep the count of the each no and sort the array using the
Counting Sort algorithms.
Idea behind the algorithm
->Create an array that will keep the count of the each element frequencies
->Change the frquencies with the cumulative some of the frequenices of these arrays it will tell us that there are some
    no of the elements that greater than the current index of the count array in the original array
->Fill the output array with the cumulative sum of the count array and sort the given array

PSEUDO CODE
COUNTING_SORT(A,B,K)
    C=>[O]*(MAX_ELEMENT(A))
    B=>[O]*(LEN(A))
    LOOP i-> 0 to Len(A)
        C[A[i]]+=1
    LOOP i=>1 to K
        C[i]+=C[i-1]
    
    LOOP BACKWARD FROM(LEN(A),0)
        B[C[A[J]]]=A[J]
        C[A[J]]-=1
    
'''
#Time complexity analysis
'''
Time complexity-> O(n+k)
Space complexity -> O(n)
'''

def countsort(arr):
    n= len(arr)
    max_elm = max(arr)
    count=[0]*(max_elm+1)
    result = [0]*(n)
    for i in range(n):
        count[arr[i]]+=1
    for i in range(1,max_elm+1):
        count[i]+=count[i-1]
    for j in range(n-1,-1,-1):
        result[count[arr[j]]-1]=arr[j]
        count[arr[j]]-=1
    return result

arr = [2,5,3,0,2,3,0,35,4,5]
result = countsort(arr)
print(result)