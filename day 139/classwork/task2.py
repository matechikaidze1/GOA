def count_zeros(n):
    count, x = 0, 1
    while (x := x + 1) <= n:
        y = x * 10
        while (y := y // 10) > 1:
            count += not y % 10
    return count
