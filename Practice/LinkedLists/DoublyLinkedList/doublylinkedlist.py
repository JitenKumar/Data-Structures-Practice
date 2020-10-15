
class Node:
    
    def __init__(self,info,prev=None,next=None):
        self.info=info
        self.prev=prev
        self.next=next
        
        
class DoublyLinkedList:
    
    def __init__(self):
        self.head=None
    
    def insert_at_begining(self,info):
        newNode = Node(info)
        if self.head==None:
            self.head=newNode
        else:
            newNode.next=self.head
            self.head.prev=newNode
            self.head=newNode
    
    def insert_at_end(self,info):
        newNode = Node(info)
        if self.head==None:
            self.head=newNode
        else:
            current=self.head
            while current.next is not None:
                current=current.next
            current.next=newNode
            newNode.prev=current
            
    def delete_node(self,elem):
        if self.head==None:
            print('Linked List is empty')
            return
        #If only one element is present
        if self.head.next==None:
            if self.head.info==elem:
                temp=self.head
                self.head=None
                temp=None
                return
            else:
                print('Element Not Found in Linked List')
                return
        #If more than one element present but we want to delete the first element 
        temp=self.head
        if temp.info==elem:
            self.head=temp.next
            temp.next.prev=None
            temp=None
            return
        #If more than one elements are present in the list and element is present in between
        current=self.head.next
        while current.next is not None:
            if current.info==elem:
                current.prev.next= current.next
                current.next.prev =current.prev
                current=None
                return
            current=current.next
        #If element to delete is the last element
        if current.info==None:
            current.prev.next=None
            current=None
            return
        #else element is not present in the list
        print("Element is not present in the linked List!!!")
                
            
    def display(self):
        current=self.head
        while current is not None:
            print(current.info)
            current=current.next

dll = DoublyLinkedList()
dll.insert_at_begining(10)
dll.insert_at_begining(5)
dll.insert_at_end(15)
dll.insert_at_begining(1)
dll.insert_at_begining(-1)
dll.insert_at_end(20)
dll.delete_node(5)
dll.display()
print("#########################")
dll.delete_node(-1)
dll.delete_node(-1)
dll.display()