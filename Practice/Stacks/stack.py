'''
Stack implementation using the dynamic lists

'''

class Stack:
    
    def __init__(self):
        self.stack=[]
        
    def isEmpty(self):
        return self.stack==[]

    def push(self,element):
        self.stack.append(element)
    
    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        else:
            print("Stack is Empty")
    
    def peek(self):
        if not self.isEmpty():
            return self.stack[-1]
        else:
            print("Stack is Empty")
    
    def display(self):
        if not self.isEmpty():
            print([i for i in self.stack])
        else:
            print("Stack is Empty")
        
s = Stack()
s.pop()
s.push(1)
s.push(2)
s.push(4)
s.pop()
s.display()

#Output
'''
Stack is Empty
[1, 2]

'''