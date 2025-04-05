def battle(x, y):
    a = 0
    b = 0
    scores = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for i in range (len(x)):
        a += scores.index(x[i]) + 1
    for j in range (len(y)):
        b += scores.index(y[j]) + 1
    if a > b:
        return x
    elif a < b:
        return y
    else:
        return "tie"
        