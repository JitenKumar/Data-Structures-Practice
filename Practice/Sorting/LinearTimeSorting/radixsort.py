def countsort(arr,place):
    n= len(arr)
    count=[0]*10 # as only 0->9 elements counts is needed to to taken care of
    for i in range(n):
        index = arr[i]//place
        count[index%10]+=1
    for i in range(1,10):
        count[i]+=count[i-1]
    for i in range(n-1,-1,-1):
        index = arr[i]//place
        result[count[index%10]-1]=arr[i]
        count[index%10]-=1
    for i in range(n):
        arr[i]=result[i]
def radixsort(arr):
    place=1
    max_elm = max(arr)
    while max_elm // place >0:
        countsort(arr,place)
        place*=10
arr = [329,457,657,839,436,720,355]
radixsort(arr)
print(arr)  #[329, 355, 436, 457, 657, 720, 839]