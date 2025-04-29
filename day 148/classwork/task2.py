def function(n):
    if n < 10:
        return 0
    
    count = 0
    while n >= 10:
        product = 1
        for digit in str(n):
            product *= int(digit)
        n = product
        count += 1

    return count

print(function(39)) # (3x9=27; 2x7=14; 1x4=4) ---- 3
print(function(74)) # (7x4=28; 2x8=16; 1x6=6) ---- 3
print(function(15)) # (1x5=5) ---- 1
print(function(7))   # 0
