# "join()" გამოიყენება მოცემული სიტყვების რაიმე ტექსტით, ნიშნით და ა.შ. შესაერთებლად, მაგალითად:
def join_list(list):
    print(list)
    return "$".join(list)

print(join_list(["GOA", "IS", "BEST"]))

# "replace()" კი ნიშნის ჩასანაცვლებლად, მაგალითად:
def replace_(string):
    return string.replace("$", " ")


print(replace_("GOA$IS$BEST"))