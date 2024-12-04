# almgorithms are fun, so i did it with both js and python

def manual_sort(lst):
    sorted_list = lst[:]
    
    n = len(sorted_list)
    for i in range(n):
        for j in range(0, n - i - 1):
            if sorted_list[j] > sorted_list[j + 1]:
                sorted_list[j], sorted_list[j + 1] = sorted_list[j + 1], sorted_list[j]
    
    return sorted_list

unsorted_list = [3, 2, 9, 4, 5, 1, 6, 8, 7]
sorted_list = manual_sort(unsorted_list)
print("Unsorted List:", unsorted_list)
print("Sorted List:", sorted_list)
