def longest_vowel_chain(s):
    vowels = set('aeiouAEIOU')
    max_chain = 0
    current_chain = 0

    for char in s:
        if char in vowels:
            current_chain += 1
            max_chain = max(max_chain, current_chain)
        else:
            current_chain = 0

    return max_chain

text = "iiaaamthelooooongestcableeee" #  iiaaamthel --->>> ooooo <<<----  ngestcableeee (5 xmovani)
print(longest_vowel_chain(text))
