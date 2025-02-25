def remove_smallest(numbers):
    if len(numbers) <= 1:
        return []
    result = []
    min_index = numbers.index(min(numbers))
    for number in enumerate(numbers):
        if number[0] != min_index:
            result.append(number[1])
    return result