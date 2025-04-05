def even_numbers(arr,n):
    result = []
    while n > 0:
        if arr[-1]%2 == 0:
            result.append(arr[-1])
            n -= 1
        arr.pop()
    return result[::-1]
