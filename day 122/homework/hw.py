def bouncing_ball(h, bounce, window):
    if h <= 0 or not (0 < bounce < 1) or window >= h:
        return -1
    count = 0
    while h>window:
        h *= bounce
        count += 2
    return count-1
