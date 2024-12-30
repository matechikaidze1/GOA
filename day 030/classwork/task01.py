def filter_odd(numbers_list):
    even_numbers = []

    for number in numbers_list:
        if number % numbers_list:
           even_numbers.append(number)   
           print(number)


    filter_odd([1,2,3,4,5,6,7,8,9,10])