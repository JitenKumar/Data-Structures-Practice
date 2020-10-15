class Node:
    
    def __init__(self,info,next=None):
        self.info=info
        self.next=next

class CircularSinglyLinkedList:
    
    def __init__(self):
        self.head=None
    
    def insert_at_begining(self,info):
        newNode = Node(info)
        #if linked list is empty
        if self.head==None:
            self.head=newNode
            newNode.next=self.head
        else:
            current=self.head
            while current.next != self.head:
                current=current.next
            current.next=newNode
            newNode.next=self.head
            self.head=newNode
            
    def insert_at_end(self,info):
        newNode = Node(info)
        #if linked list is empty
        if self.head==None:
            self.head=newNode
            newNode.next=self.head
        else:
            current=self.head
            while current.next != self.head:
                current=current.next
            current.next=newNode
            newNode.next=self.head
            
    def delete_node(self,elem):
        if self.head==None:
            print('Linked List is empty')
            return
        #only one item in the linked this 
        if self.head.next==self.head:
            if self.head.info==elem:
                self.head=None
                return
            else:
                print('Element Not Found in the Linked List')
                return
        if self.head.info==elem:
            current = self.head
            while current.next != self.head:
                current=current.next
            current.next=self.head.next
            self.head=self.head.next
            return
        current=self.head
        while current.next != self.head:
            if current.next.info==elem:
                temp=current.next
                current.next=temp.next
                temp=None
                return
            current=current.next
        
    def displaylist(self):
        current=self.head
        if current==None:
            print('List is Empty')
            return
        while current.next != self.head:
            print(current.info)
            current=current.next
        print(current.info)
        

csll = CircularSinglyLinkedList()
csll.insert_at_begining(10)
csll.delete_node(20)
csll.insert_at_end(20)
csll.insert_at_begining(5)
csll.insert_at_end(30)
csll.delete_node(20)
csll.delete_node(5)
csll.insert_at_end(40)
csll.insert_at_begining(1)
csll.displaylist()

#output
'''
Element Not Found in the Linked List
1
10
30
40


'''