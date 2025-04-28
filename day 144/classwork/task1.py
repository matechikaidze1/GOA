def find_difference(a, b):
    x = 1
    y = 1
    for i in a:
        x*=i
    for i in b:
        y*=i
    return abs(x-y)