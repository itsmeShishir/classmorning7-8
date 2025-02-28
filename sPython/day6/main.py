# function -> a block of code does the certaine thing when it is called 
# return/ print
# def -> function , def functionName(): body
# how to call a function -> functionName() -> camelCase

#wap to print the name of a student
def printName():
    print("Student is Hari")
printName()
printName()
printName()
printName()
printName()

def returnName():
    print("Student1")
    return "Sita is a student"
print(returnName())
print(returnName())
print(returnName())
print(returnName())

#pass
def passName():
    pass

# Parameter and argument -> parameter -> variable call inside a function 
#                        -> Argument -> passes the value in the parameter

def paraName(name, age, gender):
    print(f"student name is {name} and age is {age} and gender is {gender}")

paraName("Shishir", 27, "Male")
paraName("Sita", 22, "Female")
paraName("Tilak", 24, "Male")

# function scope -> how you create a variable and where 
#global scope
# local scope
name = "laxman" # global scope
def scopeFun(name, age, gender):
    print(name)
    print(f"student name is {name} and age is {age} and gender is {gender}")
print("local scope")
scopeFun("Shishir", 27, "Male")
scopeFun("Sita", 22, "Female")
scopeFun("Tilak", 24, "Male")
print(name) #laxman

# 4 types of function with parament 
# function with no parameter and no return type
# function with no parameter and  return type
# function with parameter and no return type
# function with parameter and return type

# function with no parameter and no return type
def npnrt():
    print("function with no return type and no parameters")

npnrt()

# function with no parameter and  return type
def nprt():
   return "function with  return type and have no parameters"

print( nprt() )

# function with parameter and have return type
def prt(a,b):
   return f"function with  return type and have parameters {a+b}"
print( prt(10,30) )

# function with parameter and have no return type
def pnrt(a,b):
   print( f"function with no return type and have  parameters {a+b}")
print( pnrt(10,30) )
print(pnrt(40,80))

#parameter type
# positional parameter def (a,b)
# default parameter def (a = 10, b = 20) +
# keyword parameter def (a, b) -> keyword parameter
# variable length parameter def (*args) -> *args
# variable length keyword parameter def (**kwargs) -> **kwargs

#positional parameter
def PosPar(a,b):
    print(a+b)
PosPar(50,60)

# default parameter
def defpar(a, b = 40):
    print(a+b)

defpar(50)
defpar(40,70)

# keyword parameter
def keypar(a,b, c):
    print(a+b+c)
keypar(b = 50, c = 30, a = 60)

# variable length parameter -> *argsa -> tuple
def varpar(a,b,*args):
    print(args)
    for i in args:
        print(i)

varpar(10,20,30,40,50,60,70,80,90,100)

# variable length keyword parameter def (**kwargs) -> **kwargs
def varlkpar(**kwargs):
    print(kwargs)
    print(kwargs.items())
    for Keys, Values in kwargs.items():
        print(Keys, Values)

varlkpar(a = 10,b = 20, c =30, d = 40, e = 50,f = 60,g = 70,h = 80,i = 90,j = 100)

# anormous function -> lambda expression
# lambda arguments: expression
# there should be argument in lambda expression
# add two numbers

x = lambda a,b : a+b
print(x(10,20))

# lamda without argument
x = lambda : "hello"
print(x())

# function map, filter
# map
let = [1,2,3,4,5]
let2 = list(map(lambda x : x % 2 == 0, let))
print(let2)

# filter
let = [1,2,3,4,5]
let2 = list(filter(lambda x : x % 2 == 0, let))
print(let2)

#list comprehension - > write a loop in single line
let3 = []
for i in range(1,11):
    if(i%2 == 0):
        let3.append(i)
print(let3)

# cover to list comprehension
let4 = [i for i in range(1,12) if i % 2 == 0]
print(let4)

import math
import random

let5 = random.randint(1,5)
print(let5)
let6 = math.pi
print(let6)
let7 = math.sqrt(16)
print(let7)
let8 = "shishir"
print(let8.upper())
let8 = "SHISHIR"
print(let8.lower())
let8 = "shishir"
print(let8.title())

