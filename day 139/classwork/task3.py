def count_red_beads(n):
    red = 2
    if n < 2:
        return 0
    else:
        n -= 1
        red = n * red
        return red
    