'''
Recursive and Iterative Approach of Building a Binary Search Tree
'''

class Node:
    
    def __init__(self,data,left=None,right=None):
        self.data=data
        self.left=left
        self.right=right

class BST:
    
    def __init__(self):
        self.root=None
        
    def buildBSTRecusively(self,root,data):
        if root==None:
            return Node(data)
        if data < root.data:
            root.left=self.buildBSTRecusively(root.left,data)
        else:
            root.right=self.buildBSTRecusively(root.right,data)
        return root
        
    def printInorder(self,root):
        if root==None:
            return
        self.printInorder(root.left)
        print(root.data)
        self.printInorder(root.right)
        
    def buildBSTIterative(self,root,data):
        current=root
        parent=None
        if root==None:
            return Node(data)
        while current:
            parent=current
            if data<current.data:
                current=current.left
            else:
                current=current.right
        if data < parent.data:
            parent.left = Node(data)
        else:
            parent.right=Node(data)        
        return root
