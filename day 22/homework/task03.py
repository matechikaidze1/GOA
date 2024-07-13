def lengths_of_strings(string_list):
    lengths = [len(string) for string in string_list]
    return lengths

print(lengths_of_strings(["apple", "banana", "cherry"]))
print(lengths_of_strings(["hello", "world"])) 
print(lengths_of_strings([])) 
print(lengths_of_strings(["Python", "is", "awesome"]))
