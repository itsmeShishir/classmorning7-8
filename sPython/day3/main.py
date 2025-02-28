# Operators in python
# Arithmetic operators -> +, -, *, /, %, **, //, %
print(5+5) #10
print(5-5) #0
print(5*5) #25
print(5/5) #1.0
print(5%5) #0
print(5**5) #3125
print(5//5) #1 -> floor division -> int value 

a = 5/5
print('a',int(a)) #int

a = 1.9
print('a',int(a)) #int

#Comparison operators -> ==, !=, >, <, >=, <=
a = 3
print(a == 5) #False
print(a != 5) #True
print(a > 5) #False
print(a < 5) #True
print(a>=5) #False
print(a<=5) #True

#assignment operators -> =, +=, -=, *=, /=, %=, **=, //=
a = 5
a+=2 # a = a + 2
print(a)
a-=2 # a = a - 2
print(a) #5
a*=2 # a = a * 2
print(a) #10
a/=2 # a = a / 2
print(a) #5.0
a%=2 # a = a % 2
print(a) #1
a**=2 # a = a ** 2
print(a) #1
a//=2 # a = a // 2
print(a) #0

#Logical operators -> and, or, not
a = 5
b = 10
print(a==5 and b==10) #True
print(a==10 and b==5) #False

print(a==10 or b==5) #False
print(a==10 or b==5) #False
print(a==5 or b==10) #True

print(not(a==10)) #true

#Identity operators -> is, is not
a = 5
b = 6
print(a is b)
print(a is not b)


# Membership operators -> in , not in
a = [1,2,3,4,5]
print(3 in a) #true
print(6 in a) #false

print(3 not in a) #false
print(6 not in a) #true


a = "hari is a boy"
a = "hari's is a boy"
print(a[0:8])
print(a[0:8])
print(a[-3])
print(a[0:10:2])
print(a[:-3])
print(len(a))

# for loop
for b in range(10):
    print(b)
for b in a: #isto for loop
    print(b)

# String methods
print(a.upper())
print(a.lower())
print(a.replace("hari","ram"))
print(a.split(" "))
print(a.strip())

print(a.find("is"))
print(a.count("is"))
print(a.index("is"))

# Concat in string
a = "hari"
b = "ram"
print(a +" "+b)
# format string -> f
print(f"{a} {4+5} and {b}")

# a = 5
# b = "6"
# print(a +b)

# Type casting -> int(), float(), str(), bool()
a = 5
b = "6"
print(str(a) + b) #56
print(a + int(b)) #11

#List -> [] -> mutable -> add, update, delete
#mutalbe -> change
a = [1,2,3,4,5]
# a = [0,1,2,3,4]
print(a[0])
print(a.__len__())
print(len(a))
print(a[4])
print(a[-1])
print(a[0:4:2])

a.append(6)
print(a)
print(a.index(6))

