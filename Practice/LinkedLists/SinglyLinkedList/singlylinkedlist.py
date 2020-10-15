'''
Author : Jitender Kumar
Module : Singly Linked List Operation
'''
class Node:
    
    def __init__(self,info,link=None):
        self.info = info
        self.link = link

class SinglyLinkedList:
    
    def __init__(self):
        self.head=None
    
    def insert_at_begining(self,info):
        #create new Node
        newNode = Node(info)
        
        #if self.head is None -> it means linked List is emmpty other wise insert at the begining
        if self.head is not None:
            newNode.link = self.head
            self.head = newNode
        else:
            self.head = newNode
            
    def insert_at_end(self,info):
        newNode = Node(info)
        if self.head is not None:
            current = self.head
            while current.link is not None:
                current= current.link
            current.link = newNode
        else:
            self.head = newNode
            
    def insert_at_position(self,info,position):
        newNode = Node(info)
        if position==1:
            #insert at begining
            newNode.link = self.head
            self.head = newNode
            return
        current=self.head
        counter=1
        while current.link is not None:
            if counter==position-1:
                newNode.link,current.link = current.link,newNode
                return
            current= current.link
            counter+=1
        if counter==position-1:
            newNode.link,current.link = current.link,newNode
        else:
            print('Given position not found in linked List')
            
    def delete_node(self,ele):
        if self.head==None:
            print('Linked List is Empty')
            return
        if self.head.info==ele:
            temp = self.head
            self.head = self.head.link
            temp=None
            return
        current = self.head
        while current.link is not None:
            if current.link.info==ele:
                temp = current.link
                current.link = temp.link
                temp=None
                return
            current=current.link
        print('Element to delete not found in the Linked List')

    def search(self,ele):
        if self.head==None:
            print('Linked List is Empty')
            return
        current = self.head
        while current is not None:
            if current.info==ele:
                print('Element is present in the Linked List')
                return
            current= current.link
        print('Element to search is not present in the Linked List')
    
    def displaylist(self):
        if self.head==None:
            print('Linked List is Empty')
            return
        current = self.head
        while current is not None:
            print(current.info)
            current=current.link

sll = SinglyLinkedList()
sll.insert_at_begining(10)
sll.insert_at_begining(20)
sll.insert_at_end(100)
sll.insert_at_begining(5)
sll.insert_at_end(110)
sll.insert_at_position(1,1)
sll.delete_node(120)
sll.search(34534)
sll.search(100)
sll.displaylist()

#output
'''
Element to delete not found in the Linked List
Element to search is not present in the Linked List
Element is present in the Linked List
1
5
20
10
100
110
'''
