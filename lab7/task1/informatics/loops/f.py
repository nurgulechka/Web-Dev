x = input()
num = ''
for i in range(len(x) - 1, -1, -1):
    num += x[i]
print(int(num))