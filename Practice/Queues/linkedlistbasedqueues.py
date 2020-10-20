import sys
class Node:
    
    def __init__(self,info):
        self.info=info
        self.next = None
        
class LinkedListQueue:
    
    def __init__(self):
        self.head=None
        self.tail=None
    
    def isEmpty(self):
        if self.head is None:
            return True
        return False

    def peek(self):
        if self.isEmpty():
            print('Queue Underflow')
            sys.exit(0)
        return self.head.info
    
    def display(self):
        if self.isEmpty():
            print('Queue Underflow')
            sys.exit(0)
        temp=self.head
        while temp is not None:
            print(temp.info)
            temp=temp.next
    #Enqueue will alway happend at the end of the tail
    def enqueue(self,ele):
        newNode = Node(ele)
        if newNode is None:
            print('Memory Error')
            sys.exit(0)
        if self.head is None:
            self.head = newNode
        else:
            self.tail.next=newNode
        self.tail=newNode
    
    def dequeue(self):
        if self.isEmpty():
            print('Queue Underflow')
            sys.exit(0)
        d=self.peek()
        self.head = self.head.next
        if self.head==None:
            self.rear=None
        return d
llq = LinkedListQueue();
llq.enqueue(20)
llq.enqueue(30)
llq.enqueue(40)
llq.enqueue(50)
llq.dequeue()
llq.enqueue(70)
llq.display()  