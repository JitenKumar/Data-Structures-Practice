import sys

class ArrayBasedQueue:
    
    def __init__(self):
        self.MAX_SIZE=5
        self.queue=[None]*self.MAX_SIZE
        self.front=-1
        self.rear=-1
    
    def isEmpty(self):
        if self.front==-1:
            return True
        return False

    def isFull(self):
        if (self.front==0 and self.rear==self.MAX_SIZE) or self.front==self.rear+1:
            return True
        return False
    
    def enqueue(self,data):
        if self.isFull():
            print('Queue Overflow')
            sys.exit(0)
        if self.front==-1:
            self.front=0
        if self.rear==self.MAX_SIZE-1:
            self.rear=0
        else:
            self.rear+=1
            self.queue[self.rear]=data
            
    def dequeue(self):
        if self.isEmpty():
            print('Queue UnderFlow')
            sys.exit(0)
        item=self.queue[self.front]
        if self.front==self.rear:
            self.front=-1
            self.rear=-1
        elif self.front==self.MAX_SIZE:
            self.front=0
        else:
            self.front+=1
        return item
        
            
    def peek(self):
        if self.isEmpty():
            print('Queue UnderFlow')
            sys.exit(0)
        d=self.queue[self.front]
        return d
    
    def display(self):
        if self.isEmpty():
            print('Queue UnderFlow')
            sys.exit(0)
        self.temp=self.front
        if self.front <self.rear:
            while self.temp<=self.rear:
                print(self.queue[self.temp])
                self.temp+=1
        else:
            while self.temp < self.MAX_SIZE:
                print(self.queue[self.temp])
                self.temp+=1
            self.temp=0
            while self.temp <= self.rear:
                print(self.queue[self.temp])
                self.temp+=1
            
        