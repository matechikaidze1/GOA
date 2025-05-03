def square_color(file, rank):
    odd = (ord(file) + rank) % 2
    return 'white' if odd else 'black'