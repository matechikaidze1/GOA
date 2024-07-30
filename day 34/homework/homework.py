def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))

# ---------------------------------------------------------------------------------------

#ამ კოდის საფეხურები:
# 1. ფუნქციის მნიშვნელობა
# 2. სტრინგის დაყოფა
# 3. მინიმალური სიგრძის გამოთვლა
# 4. ყველაზე მოკლე სიტყვის პოვნა
# 5. ყველაზე მოკლე სიტყვის სიგრძის დაბრუნება
# 6. ფუნქციის გამოძახება და output