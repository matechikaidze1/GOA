def calculator(x,y,op):
    if type(x) is type(y) is int:
        match op:
            case '+': return x+y
            case '-': return x-y
            case '*': return x*y
            case '/': return x/y
    return 'unknown value'