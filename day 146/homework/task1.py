def getCount(s):
    num_vowels = 0
    for char in s:
        if char in "aeiouAEIOU":
           num_vowels = num_vowels + 1
    return num_vowels