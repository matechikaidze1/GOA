def kata_13_december(lst):
    result = []
    for i in range(0, len(lst)): 
        if lst[i] % 2: 
            result.append(lst[i])
    return result