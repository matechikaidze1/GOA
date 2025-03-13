def elimination(arr):
    for x in arr:
        if arr.count(x) == 2:
            return x
        