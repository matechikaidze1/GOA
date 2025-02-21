def find_short(s):
    arr = s.split(" ")
    ans = len(arr[0])
    for i in range(1, len(arr)):
        if len(arr[i]) < ans:
            ans = len(arr[i])
    return ans
