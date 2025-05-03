def password(st):
    return  any(c.isupper() for c in st) and \
            any(c.islower() for c in st) and \
            any(c.isdigit() for c in st) and \
            len(st)>7