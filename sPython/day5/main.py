age = int(input("Enter your age: "))
# if(conition): #     body
if(age > 18 and age < 70):
    # nested if
    if (age > 20):
        print("you can vote")
    else:
        print("you cannot vote")
    print("you are above 18")
elif (age == 18):
    print("You are 18")
elif (age >= 71):
    print("this person is allready dead")
else:
    print("You are below 18")
print("ok")
#wap to check if the number is even or odd (number % 2 == 0) is even
# wap to check if the number is positive or negative (number > 0) is positive
# wap to check if the number is divisible by 5 (number % 5 == 0) is divisible by 5
# wap to check if the number is divisible by 5 and 3 # nested if
# wap to check today day -> if today is sunday print "today is holiday"
# wap to check if the year is leap year or not (year % 4 == 0) is leap year
# wap to check if the number is prime or not (number % 1 == 0) is prime
# wap to check if the user can vote or not need to be above 18 and below 70


# for loop
# for anyvariablename in condition:
    # body
    # print("hello")

#list -> range
for i in range(0,10):
    print(i)

for i in range(-30,100,3):
    print(i)
#string
name = "hari sharma"
for i in name:
    print(i)

print("in list")
#list 
list1 = [1,2,3,4,5,6]
for i in list1:
    print(i)

print("in tuple")
#tuple
tup = (1,2,3,4,5,6)
for i in tup:
    print(i)
print("in set")
#set
set1 = {1,2,3,4,5,6}
for i in set1:
    print(i)
#dict
print("in dict")
dict = {
    "name": "hari",
    "age": 28,
    "isMale": True,
    "address": "ktm"
}
for values, keys in dict.items():
    print(values, keys)

# print all the even number up to 55
for i in range(0,55):
    if i % 2 == 0:
        print(i)

# break  -> break the loop, exit the loop, stop the loop
# continue -> skip the current iteration, go to the next iteration
# pass
# while loop

# for break and continue
for i in range(0,55):
    if i == 50:
        break # break the loop
    print(i)

# for  continue
for i in range(1,55):
    if i % 2 == 0:
        continue # continue the loop
    print(i)

for i in range(1,33):
    pass
    # pass -> do nothing
    # pass is used when you want to do nothing
print("hello ")

# while loop
# while condition:
    # body

# wap to print the number from 0 to 10
i = 0
while i<10:
    print(i)
    i += 1

# nested loop -> loop inside loop
# wap to print the multiplication table of 1 to 10
for i in range(1, 11):
    print(f"Table of {i}")
    for j in range(1,11):
        print(f"{i} * {j} = {i*j}")

# wap to print the pattern
# *
# **    
# ***
# ****
# *****

#wap to print the all the odd number up to 100
# wap to print the all the even number up to 100
# wap to print the all the number divisible by 5 up to 100
# wap to print the all the number divisible by 5 and 3 up to 100
# wap to print the all the prime number up to 100
