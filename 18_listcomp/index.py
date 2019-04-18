def pyTriples (n):
    return [(a,b,c) for a in range(1,n) for b in range(1,n) for c in range(1,n) if a*a + b*b == c*c]
print(pyTriples(5))
print(pyTriples(10))
print(pyTriples(20))

def quickSort (list):
    if (len(list) <= 1):
        return list
    pivot = list[-1]
    small = [list[i] for i in range(len(list) - 1) if list[i] < pivot]
    big = [list[i] for i in range(len(list) - 1) if list[i] >= pivot]
    return quickSort(small) + [pivot] + quickSort(big)
print(quickSort([12,9,5,7,13,47,56,78,2,8]))
print(quickSort([5,8,5,7,13,9,7,1,3]))
