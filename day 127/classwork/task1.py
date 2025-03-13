def char_concat(word):
    
    output = ''
    i = 0
    j = -1
    num = 1

    while i < len(word) // 2:
        output += word[i]
        output += word[j]
        output += str(num)

        i += 1
        j -= 1
        num += 1
        
    print(output)
    return output
