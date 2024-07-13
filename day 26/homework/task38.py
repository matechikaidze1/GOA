s = {1, 2, 3}
iterator = iter(s)
while True:
    try:
        print(next(iterator))
    except StopIteration:
        break
