x = int(input())

for i in range(2, x + 1):
    if(x % i == 0): 
        print(i) 
        break
    else: continue
    #ans = i if x % i else 0
    #if(ans): break