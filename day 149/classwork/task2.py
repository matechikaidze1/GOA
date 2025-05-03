def arr_check(arr):
    for x in arr:
        if isinstance(x, list):
            continue
        else:
            return False
    return True