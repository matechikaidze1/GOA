def descending_order(num):
    nums = list(str(num))
    nums.sort()
    nums = nums[::-1]
    return int("".join(nums))