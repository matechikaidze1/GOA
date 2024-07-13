def to_string(value):
    print(str(value))

to_string(42) 
to_string(3.14) 
to_string("Hello, world!") 
to_string([1, 2, 3]) 

def calculate_average(numbers):
    if not numbers:
        return 0  # If the list is empty, average is considered as 0
    
    total_sum = sum(numbers)
    average = total_sum / len(numbers)
    return average

numbers = [1, 2, 3, 4, 5]
average = calculate_average(numbers)
print(f"The average of {numbers} is: {average}")

numbers2 = [10, 20, 30, 40, 50, 60]
average2 = calculate_average(numbers2)
print(f"The average of {numbers2} is: {average2}")

def calculate_average():
    numbers = [10, 20, 30, 40, 50]
    
    if len(numbers) > 0:
        average = sum(numbers) / len(numbers)
        return average
    else:
        return 0 