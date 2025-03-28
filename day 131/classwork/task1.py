def find_missing_letter(chars):
    list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v', 'w', 'x', 'y', 'z']
    indexes = []
    for char in chars:
        indexes.append(list1.index(char.lower()))
    i = 0
    final_index = 0
    for index in indexes:
        if(indexes[i]-indexes[i-1] > 1):
            final_index = indexes[i]-1
        i += 1
    for char in chars:
        if char.isupper():
            return list1[final_index].upper()
        else:
            return list1[final_index]
        