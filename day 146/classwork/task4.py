def my_languages(results):
    list=[]
    for i in results:
        if results[i]>=60 and i not in list:
            list.append(results[i])
    
     
    list.sort()
    list2=[]
    for i in list:
        for c in results:
            if i==results[c]:
                list2.append(c)
    list2=list2[::-1]
            
    
    return list2