def odd_index_sum(numbers):
    return sum(value for index, value in enumerate(numbers) if index % 2 != 0)

print(odd_index_sum([1, 2, 3, 4, 5]))
print(odd_index_sum([10, 20, 30, 40]))
print(odd_index_sum([]))
print(odd_index_sum([1, 1, 1, 1, 1, 1]))
print(odd_index_sum([5, 10, 15, 20, 25])) 
print(odd_index_sum([1, 2, 3, 4, 5, 6, 7, 8])) 
print(odd_index_sum([99])) 
print(odd_index_sum([1, 2]))
print(odd_index_sum([-1, -2, -3, -4, -5]))
