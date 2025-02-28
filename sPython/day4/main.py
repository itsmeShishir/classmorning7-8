lists = [1,2,3,4, "hari", "shyam", True, 5.5]
# list -> onorder collection of items, mutable
print(lists)
# index -> (0, n-1) -> n = length
print(type(lists))
print(len(lists))
print(lists[6])
lists[6] = False
print(lists)
a,b,*c = lists
print(a,b,c)
print(lists[3:6])

# append, insert, pop, remove, index, 
lists.append(6.6)
print(lists)
lists.insert(0, "Hari")
print(lists)
lists.pop() # index -> last value remove 
print(lists)
lists.pop(0)
print(lists)
lists.remove(False)
print(lists)
#[1, 2, 3, 4, 'hari', 'shyam', 5.5]
print(lists.index(5.5))
print(lists.index(2))
print(lists.index(3))

lists = [9,6,5,4,3,2,1,7,8]
#remove, sort
lists.sort() #asc 
print(lists)
#desc 
lists.sort(reverse= True)
print(lists)

# clear
lists.clear()
print(lists)


#Tuple -> imutable-> once write 
# value cannot be change, 
tup = ()
print("tup", type(tup))
tup = (1,2,3,4,5, "hari","hari", 4, 4,4,5, "hari")
print(tup)
print(tup.index(5))
print(tup.count(4))
print(tup.count(5))
print(tup.count("hari"))

# tup to list 
# list to tup

list1 = list(tup)
print(list1)
list1.append(7)
tup2 = tuple(list1)
print(tup2)

#set -> mutable, unique
st = set()
print("st", type(st))

set1 = set(tup2)
set1.add(8)
set1.pop()
set2 = set1.copy()
print(set1)
set2.add(9)
set2.add(0)
set2.add(1)
print(set2)
print(
set2.union(set1)
)
print(set2.intersection(set1))
print(set2.difference(set1))
print(set2.symmetric_difference(set1))
set1.remove(8)
print(set1)
set1.clear()
print(set1)

#dict -> key and value pair
let = {

}
print(let, type(let))
let = {
    "name": "hari",
    "age": 28,
    "isMale": True
}
print(let)
# key and value
print(let["name"])
print(let["age"])
let["name"] = "shyam"
print(let)
print(let.get("name"))
print(let.values())
print(let.keys())
for keys in let:
    print(keys)
for keys, values in let.items():
    print(f"{keys} : {values}")

#dic
let.fromkeys('name')
const = let.copy()

print(let)
let.clear()  
print(let)
print(const)
print(const.items())
const.popitem()
print(const)


# wap to loop the list, tuple, set ok 
