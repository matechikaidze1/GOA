def sumDigits(number):
    number = number if number > 0 else -number
    if number==0: return 0
    sum = 0
    while number>0:
        sum += number%10
        number//=10
    return sum