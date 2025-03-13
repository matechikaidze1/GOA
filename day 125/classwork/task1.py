def similarity(a, b):
    X, Y = list(a), list(b)
    intersection = [x for x in X if x in Y and X.count(x) == Y.count(x)]
    union = X + [y for y in Y if y not in X]
    return len(intersection) / len(union)

a = "hello"
b = "world"
print(similarity(a, b))
