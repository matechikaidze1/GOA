array = []

print("put 10 integers:")
for i in range(10):
    num = int(input(f"enter a number {i+1}: "))
    array.append(num)

doubled_array = [num * 2 for num in array]

print("\ndoubled numbers:")
for num in doubled_array:
    print(num)
