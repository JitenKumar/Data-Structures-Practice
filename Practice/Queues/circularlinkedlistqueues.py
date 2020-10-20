import sys
class Node:
    
    def __init__(self,info,next=None):
        self.info=info
        self.next = None
        
class CircularLinkedListQueue:
    
    def __init__(self):
        self.head=self.tail=None
    
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
        while temp.next != self.head:
            print(temp.info)
            temp=temp.next
        print(temp.info)
        
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
        self.tail.next=self.head
        
    
    def dequeue(self):
        if self.isEmpty():
            print('Queue Underflow')
            sys.exit(0)
        d=self.peek()
        temp=self.head
        if self.head==self.tail:
            self.head=self.tail=None
        else:
            self.head=temp.next
            self.tail=self.head
        return temp.info
    
llq = CircularLinkedListQueue()
llq.enqueue(20)
llq.enqueue(30)
val= llq.dequeue()
print('Deleted Element is ={}'.format(val))
llq.enqueue(30)
llq.enqueue(40)
llq.enqueue(50)
val= llq.dequeue()
print('Deleted Element is ={}'.format(val))
llq.enqueue(70)
llq.display()  