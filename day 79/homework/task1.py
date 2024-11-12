import math

def count_area(shape, *dimensions):
    if shape == "rectangle":
        if len(dimensions) == 2:
            width, height = dimensions
            return width * height
        else:
            return "invalid input for rectangle"
    
    elif shape == "circle":
        if len(dimensions) == 1:
            radius = dimensions[0]
            return math.pi * radius ** 2
        else:
            return "invalid input for circle"
    
    elif shape == "triangle":
        if len(dimensions) == 3:
            base, height, _ = dimensions
            return 0.5 * base * height
        else:
            return "invalid input for triangle"
    
    else:
        return "unrecongizable shape"
    
    
# ----------------------------------------------------

print(count_area("rectangle", 5, 10))

print(count_area("circle", 5)) 

print(count_area("triangle", 10, 5, 6))
