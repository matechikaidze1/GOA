def greater_than_5(number):
    if number <= 5:
        return 6
    else:
        return number
    
    print(greater_than_5(3))
print(greater_than_5(7))
print(greater_than_5(5))
print(greater_than_5(10))



def multiply(a, b):
    return a * b

print(multiply(3, 5))
print(multiply(-2, 4))
print(multiply(0, 100))
print(multiply(-7, -3))


def string_length(string):
    return len(string)

print(string_length("Hello"))
print(string_length("Python"))
print(string_length(""))
print(string_length("123456789"))


def lengths_of_strings(string_list):
    lengths = [len(string) for string in string_list]
    return lengths

print(lengths_of_strings(["apple", "banana", "cherry"]))
print(lengths_of_strings(["hello", "world"])) 
print(lengths_of_strings([])) 
print(lengths_of_strings(["Python", "is", "awesome"]))
