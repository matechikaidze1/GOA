def two_sum(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None

print(two_sum([1, 2, 3], 4))  # (0, 2) ან (2, 0)
print(two_sum([3, 2, 4], 6))  # (1, 2) ან (2, 1)
