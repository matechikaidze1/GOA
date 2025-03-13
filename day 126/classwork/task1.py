def sort_it(words, n):
    def bred(s):
        return s[n-1]
    return ", ".join(sorted(words.split(", "), key = bred))
        