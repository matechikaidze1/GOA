def digit_degree(n):
    r = 0
    while n > 9:
        n = sum(int(x) for x in str(n))
        r += 1
    return r