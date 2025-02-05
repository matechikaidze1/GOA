def series_sum(n):
    if n == 0:
        return "0"
    
    total = sum(1 / (1 + 3 * i) for i in range(n))
    
    return f"{total:.2f}"

print(series_sum(1))
print(series_sum(2))
print(series_sum(5))
