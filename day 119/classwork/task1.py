def multi_table(number):
    if not (1 <= number <= 10):
        return "only numbers between 1 and 10 allowed"
    
    result = ""
    
    for i in range(1, 11):
        result += str(i) + " * " + str(number) + " = " + str(i * number) + "\n"

    return result.strip()

num = 3
print(multi_table(num))
