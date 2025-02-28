# static methods and static classes

class Bus:
    busbrand = "Tata"

    @staticmethod
    def hariBus(eletric):
        if(eletric == True):
            print("It is eletric")
        else:
            print("it is not")
    
    @classmethod
    def brands(cls, busbrand):
        cls.busbrand = busbrand
        

Bus.hariBus(True)
Bus.hariBus(False)
bus1 = Bus()
Bus.brands("Toyota")
print(bus1.busbrand)

#polymorphism -> having many forms
class MaleBride:
    def Marry(self):
        print("he is marring by hari ")
    def Divorce(self):
        print("he is getting divorce by hari")
     
class FemaletwoBride(MaleBride):
    def Marry(self):
        super().Marry()
        print("he is marring another women")

class FemaleoneBride(MaleBride):
    def Divorce(self):
        super().Divorce()
        print("he is divorce first women")
    
hari = MaleBride()
hari.Marry()
hari.Divorce()
print("Divorce ")
sita = FemaleoneBride()
sita.Divorce()
print("Marry")
laxmi = FemaletwoBride()
laxmi.Marry()

# incapsulation -> data hidding 

class One:
    def __init__(self, abc, bcd):
        self.abc = abc
        self.__bcd = bcd
    # get ya set
    def changeValue(self):
        print(self.__bcd)
    def __hideMethods(self):
        print("Hello")
    def updatevalue(self, bcd):
        self.__bcd = bcd

one = One(1,2)
print(one.abc)
one.changeValue()
one.updatevalue(9)
one.changeValue()


# abstraction 
from abc import ABC, abstractmethod

class Ok(ABC):
    @abstractmethod
    def ol(self):
        pass
class Bye(Ok):
    def ol(self):
        print("hello")

class Shy(Ok, Bye):
    def ol(self):
        print("shying")
    # @abstractmethod
    # def okd(self):
    #     print("OK Self")


    
bye = Bye()
bye.ol()
shy = Shy()
print(shy.ol())
