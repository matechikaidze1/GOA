def filter(numberArr):
    filtered_list = [num for num in numberArr if num % 2 == 0]
    return filtered_list

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = filter(numbers)
print(result)
