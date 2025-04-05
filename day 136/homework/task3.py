def palindrome(n):
    if type(n)!=int or n<0:
        return 'invalid'
    if n<10:
        return 0
    n = str(n)
    if len(n)==2 and len(set(n))==1:
        return 1
    if len(set(n))==1:
        return len(n)
    return sum(len(set(n[i:i+3]))<3 for i in range(0, len(n)-2))