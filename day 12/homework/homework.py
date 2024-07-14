num = 5

# print(True and True) # True
# print(True and False) # False
# print(False and True) # False
# print(False and False) # False 

# print(True or True) # True
# print(True or False) # True
# print(False or True) # True
# print(False or False) # False

print("----------- AND -----------")

print(num >= 1 and num <= 10) # True
print(num >= 1 and num <= 4) # False
print(num > 5 and num <= 10) # False
print(num > 5 and num > 10) # False

print("----------- OR -----------")

print(num >= 1 or num <= 10) # True
print(num >= 1 or num <= 4) # True
print(num > 5 or num <= 10) # True
print(num > 5 or num > 10) # False


# ====================================================================================


def manual_isidentifier(s):
    keywords = ["False", "None", "True", "and", "as", "assert", "async", "await", 
        "break", "class", "continue", "def", "del", "elif", "else", "except", 
        "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", 
        "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", 
        "yield"]
    

    functions = ["abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", 
        "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", 
        "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", 
        "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", 
        "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", 
        "list", "locals", "map", "max", "memoryview", "min", "next", "object", 
        "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", 
        "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", 
        "super", "tuple", "type", "vars", "zip"]

    if s in functions or s in keywords:
        return False
    
    for char in s:
        if  char != '_' and not('a' <= char.lower() <= 'z') and not('0' <= char <= '9'):
            return False
    
    return True

print(manual_isidentifier('int'))