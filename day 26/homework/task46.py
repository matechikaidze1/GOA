nested_list = [[1, 2], [3, 4]]
i = 0
while i < len(nested_list):
    j = 0
    while j < len(nested_list[i]):
        print(nested_list[i][j])
        j += 1
    i += 1
