# file handling in Python
# read , write , append , clear and delete -> import os 
# 

file = open("hello.txt")
print(file)
# for read 
content  = file.read()
print(content)
file.close()

file = open("hello.txt", "r+")
print(file)
content  = file.readline()
print(content)
file.close()

file = open("hello.txt", "r+")
print(file)
content  = file.readlines()
print(content)
file.close()

file = open("hello.txt", "r+")
print(file)
contentone  = file.readlines()
print(contentone)
file.close()

# if hami la file close gara se read garna ya aaru kehi operation use
# garayu bhana value error auxa: due to the Operation on close file 
# print(file.read())


file = open("bye.txt", "w")
content  = file.write("""
    nippon
    hari
    shyam
    laxman
    laxmi chip fund   
""")

fileone = open("bye.txt", "r+")
content = fileone.read()
print(content)

file = open("bye.txt", "a")
content  = file.write("""    shishir""")

file = open("bye.txt", "r+")
content = file.read()
print(content)

# how to write file in fileone
file = open("bye.txt", "a")
content  = file.write(content)

file = open("bye.txt", "r+")
content = file.read()
print(content)

import os
os.remove("bye.txt")

# exception handline -> 
#  Syntax Error 
# - NameError
# - ValueError
# - TypeError
# - ZeroDivisionError
# - FileNotFoundError
# - IndentationError

try:
        os.remove("bye.txt")
except FileNotFoundError:
        print("IndentationError error occure")
else:
        print("other error found")
finally:
        print("if error came problem can be resolved")


# so wap to ask name input from the user and write this is a file name as 
# Studentdetails.txt need to add the student name nad student age also interested 
# can use the db error and exception handling in python



