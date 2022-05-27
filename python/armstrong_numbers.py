# How can you make this more scalable and reusable later?
def find_armstrong_numbers(num):
    result = []
    for i in num:
        total = 0
        toStr = str(i)
        for char in toStr:
            total += pow(int(char), len(toStr))
        if total == i:
            result.append(i)
    
    return result
        
            