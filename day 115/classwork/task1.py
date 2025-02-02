def sum_array(arr):
    if not arr or len(arr) < 3:
        return 0
    
    return sum(arr) - max(arr) - min(arr)

print(sum_array([6, 2, 1, 8, 10]))
print(sum_array([1, 1, 11, 2, 3]))
print(sum_array([1, 2]))
print(sum_array([]))
