bin = input()
num = 0
for i in range(len(bin)):
    num += 2**(len(bin) - i -1) if bin[i] == '1' else 0
print(num)
