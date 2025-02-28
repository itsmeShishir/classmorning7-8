# What is comment -> code ko describe, explain karne ke liye use hota hai -> compiler/interpreter ise ignore it 
# 1. Single line comment -> #
    #  this is a comment -> single line comment
# 2. Multi line comment -> ''' ''' or """ """
"""
this is a multi
 line comment
"""

# inbuild function -> print() -> output -> console
print("Hello world") # String -> "" -> "Hello world"


# Variables -> container  -> RAM -> store data
a = 10 # int -> 4 byte
print(a) #10

# Data Type -> type() -> int, float, complex,  str, bool, list, truple, set, dict, None, bytes, bytearray, range, frozenset
# int -> number -> 10, 20, 30, 40, 50 -> 4 byte
a = 20
print(a) # 20
print(type(a)) # int
# float -> 10.20, 20.30, 30.40, 40.50 -> 8 byte
a = 10.20
print(a) # 20
print(type(a)) # float
# complex -> 1 + 3j-> 16 byte
a = 3j + 1
print(a) # 1 + 3j
print(type(a)) # complex
# str -> "Hello world" -> 1 byte -> 1 char -> '', "", """ """
a = "hari"
a = 'hari \nram'
a = """hari 
        and \n
        ram
    """  # multi line string
print(a) # "hari"
print(type(a)) # complex
# bool -> True, False -> 1 byte
a = True
print(a) # True
print(type(a)) # bool
# list -> [10, 20, 30, 40, 50] -> 1 byte -> 1 element
a = [10, 20, 30, 40, 50]
print(a)
print(type(a)) # list
# tuple -> (10, 20, 30, 40, 50) -> 1 byte -> 1 element
a = (10, 20, 30, 40, 50)
print(a)
print(type(a)) # tuple
# set -> {10, 20, 30, 40, 50} -> 1 byte -> 1 element - > unique
a = {10, 10, 20, 30, 40, 50}
print(a)
print(type(a)) # set
# dict -> {key:value} -> {"name":"Ram"} -> 1 byte -> 1 element
a = {
    "name":"Ram",
    "age":20
}
print(a)
print(type(a)) # dict
# None -> None -> 1 byte
a = None
print(a)
print(type(a)) # None
# forzenset -> {10, 20, 30, 40, 50} -> 1 byte -> 1 element - > unique

# type() -> check data type