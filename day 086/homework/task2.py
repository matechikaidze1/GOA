N = int(input("enter the amount of numbers (N): "))

numbers = []

print(f"enter {N} numbers:")
for i in range(N):
    num = int(input(f"number {i + 1}: "))
    numbers.append(num)

print("odd elements:")
for i in range(1, len(numbers), 2):
    print(f"Element at index {i}: {numbers[i]}")
