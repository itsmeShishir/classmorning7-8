class House:
    # rooms = "hari" #properties / attributes 
    # age = 57

    def __init__(self, rooms, age):
        self.rooms = rooms
        self.age = age

    #methods
    def UserDetails(self):
        print(self.rooms, self.age)
    
    # dumper methods ->
    # magic methods -> __init__, __str__, __repr__, __len__
#object
house1 = House(17, 45)
print(house1.rooms)
print(house1.age)
print(house1.UserDetails())

house2 = House(5, 1)
print(house2.rooms)
print(house2.age)
print(house2.UserDetails())


#static methods -> @staticmethod -> you cannot access the value of class variable
# class methods -> @classmethod -> cls -> you can access the value of class variable

class Car:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    @classmethod
    def from_string(cls, string):
        name, price = string.split("-")
        return cls(name, price)
    
    @staticmethod
    def is_expensive(price):
        if price >= 10000:
            return True
        else:
            return False
        
car1 = Car("BMW", 10000)
car2 = Car("Audi", 5000)
car3 = Car.from_string("BMW-10000")
print(car1.name, car1.price)
print(car2.name, car2.price)
print(car3.name, car3.price)

print(Car.is_expensive(10000))

# inheritance
# -> passing the methods , properties 
# from parent class to child class
# types of inheritance -> 
# single, multi, multiple, hierarchical

# single inheritance -> one parent to one child

class Parent:
    def __init__(self, name):
        self.name = name

# super keyword -> get access to parent class
class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

child1 = Child("hari", 45)
print(child1.name, child1.age)

#multi inheritance -> more than one parent to one child
class Parent1:
    def __init__(self, lastname):
        self.lastname = lastname

class Parent2:
    def __init__(self, lastParent):
        self.lastParent = lastParent

class childone(Parent1, Parent2):
    def __init__(self, name, lastname, lastParent):
        super().__init__(lastname)
        super().__init__(lastParent)
        self.name = name
    
    def show(self):
        print(self.name, self.lastname)

child2 = childone("hari", "kumar", "singh")
child2.show()