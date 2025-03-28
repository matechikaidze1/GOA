def comfortable_word(word):
    left, right = set('qwertasdfgzxcvb'), set('yuiophjklnm')
    p1, p2 = set(word[::2]), set(word[1::2])
    
    return (p1 <= left and p2 <= right) or (p2 <= left and p1 <= right)