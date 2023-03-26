x = int(input())
y = x
cnt = 0
for i in range(1, x + 1):
    if(not x % i): 
        cnt += 1
print(cnt)