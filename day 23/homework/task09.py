def count_consonants(s):
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    count = 0
    for char in s:
        if char in consonants:
            count += 1
    return count

print(count_consonants("Hello World!"))  # Output: 7
print(count_consonants("Python"))        # Output: 5
print(count_consonants("Programming"))   # Output: 7