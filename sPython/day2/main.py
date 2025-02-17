print("Hello world")

if(True):
 print("Hi ")
 print("hi")



x = 3
" ok "
y =  "hello"
'''
    This is a comment
'''
# this is a comment
print(x)
l = y
print(f'l {l}')


a = str(4)
print(type(a))
a = float(4)
print(type(a))

myName = "hari"
print(myName)
MyName = "shyam"
print(MyName)

# 4a = 1
# print(4a)

b,c,d = "hello", "hi", "bye"
print(b)
print(c)
print(d)

e = f = g = "hello"
print(e)
print(f)
print(g)

h = ["1","2",3]
i,j,k = h
print(i,j,k)
print(i+j+str(k))

l = input("Ask input from the user")
print(type(l)) #string

m = 10
# Varibale scope -> global scope and function scope
def hello():
    m = 5
    global n
    n = 40
    print(m) 
    print(n) 
    print(l)

hello()
print(n)

mycar = "TVS"
bike = mycar
print(bike)