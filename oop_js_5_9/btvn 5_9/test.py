from abc import ABC, abstractclassmethod
class Toys:
    def __init__(self, name):
        self.name = name
    @abstractclassmethod
    def speak(self):
        pass
    
class RobotToy(Toys):
    def speak(self):
        print(f'{self.name} says beep beep book! I am a robot!')
        
class TeddyBearToy(Toys):
    def speak(self):
        print(f'{self.name} says hug me! I am cuddle')
        
class DinosaurToy(Toys):
    def speak(self):
        print(f'{self.name} says ROOR!')
        
rusty = RobotToy("Rusty")
fluffy = TeddyBearToy("Fluffy")
rex = DinosaurToy("Rex")

toys = [rusty, fluffy, rex]
for toy in toys:
    toy.speak()
