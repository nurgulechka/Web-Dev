a = int(input())
b = int(input())

for i in range(a, b + 1):
    if not i**0.5 % 1: print(i, end = " ")
