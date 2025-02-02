def XO(s):
    s = s.lower()
    return s.count('x') == s.count('o')

print(XO("ooxx"))  # T
print(XO("xooxx"))  # F
print(XO("ooxXm"))  # T
print(XO("zpzpzpp"))  # T
print(XO("zzoo"))  # F
