def multiply(a, b):
    return a * b

print(multiply(3, 5))
print(multiply(-2, 4))
print(multiply(0, 100))
print(multiply(-7, -3))


def string_length(string):
    return len(string)

print(string_length("Hello"))
print(string_length("World"))
print(string_length(""))
print(string_length("45000"))


def greater_than_5(number):
    if number <= 5:
        return 6
    else:
        return number
    
    print(greater_than_5(3))
print(greater_than_5(6))
print(greater_than_5(9))
print(greater_than_5(16))

