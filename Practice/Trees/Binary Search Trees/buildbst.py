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
        
    def inorderRecursively(self,root):
        #left,root,right
        if root==None:
            return
        self.inorderRecursively(root.left)
        print(root.data)
        self.inorderRecursively(root.right)
    
    def inorderIteratively(self,root):
        #left,root,right expilicit Stack
        current=root
        stack=[]
        while True:
            #Reach the leftmost node of the tree
            if current is not None:
                stack.append(current)
                current=current.left
            elif stack:
                current=stack.pop()
                print(current.data)
                current=current.right
            else:
                break
            
    
        
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
    
    def preorderRecursively(self,root):
        #root->left->right
        if root is None:
            return
        print(root.data)
        self.preorderRecursively(root.left)
        self.preorderRecursively(root.right)
        
    def preorderIteratively(self,root):
        #root->left->right
        if root is None:
            return
        else:
            stack=[]
            stack.append(root)
            while stack:
                current=stack.pop()
                print(current.data)
                #we will push the right node first because it will be down to the left node
                if current.right is not None:
                    stack.append(current.right)
                if current.left is not None:
                    stack.append(current.left)
                    
    def postorderRecursevily(self,root):
        #left->right->root
        if root is None:
            return
        self.postorderRecursevily(root.left)
        self.postorderRecursevily(root.right)
        print(root.data)
    
    def postorderIteratively(self,root):
        #left->right->root
        #Using two stack to keep the track of recusivecalls and one for the result stack
        if root is None:
            return
        recursiveStack,resultStack=[],[]
        recursiveStack.append(root)
        while recursiveStack:
            current=recursiveStack.pop()
            resultStack.append(current)
            if current.left is not None:
                recursiveStack.append(current.left)
            if current.right is not None:
                recursiveStack.append(current.right)
            while resultStack:
                print(resultStack.pop().data)
                
    def postorderUsingOneStack(self,root):
        if root is None:
            return
        stack=[]
        prev=None
        stack.append(root)
        while stack:
            #get the top of the stack
            current=stack[-1]
            if prev is None or prev.left==current or prev.right==current:
                if current.left:
                    stack.append(current.left)
                elif current.right:
                    stack.append(current.right)
                else:
                    print(current.data)
                    stack.pop()
            elif prev==current.left:
                if current.right:
                    stack.append(current.right)
            else:
                print(current.data)
                stack.pop()
            prev=current
            

    def search(self,root,key):
        if root is None:
            return
        elif root.data==key:
            return root
        elif key<root.data:
            return self.search(root.left,key)
        else:
            return self.search(root.right,key)
        
    def deleteNode(self,root,key):
        if root is None:
            return None
        root=self.search(root,key)
        if not (root.left or root.right):
            root=None
        #if it has one child on the right
        #find the inorder successor of this node
        elif root.right:
            root.data=self.inordersuccessor(root)
            root.right=self.deleteNode(root.right,root.data)
        else:
            root.data=self.inorderpredecessor(root)
            root.left=self.deleteNode(root.left,root.data)
        return root
                
    def inordersuccessor(self,root):
        root=root.right
        while root.left:
            root=root.left
        return root.data
    
    def inorderpredecessor(self,root):
        root=root.left
        while root.right:
            root=root.right
        return root.data
        
                

root=None     
bst= BST()
lst = [10,5,25,2,7,30]
for data in lst:
    root = bst.buildBSTRecusively(root,data)
print('#######Inorder Recursively ######')
bst.inorderRecursively(root)
print('#######Inorder Iteratively ######')
bst.inorderIteratively(root)
print('#######Preorder Recursively ######')
bst.preorderRecursively(root)
print('#######Preorder Iteratively ######')
bst.preorderIteratively(root)
print('#######PostOrder Recursively ######')
bst.postorderRecursevily(root)
print('#######PostOrder Iteratively USing two stack######')
bst.postorderRecursevily(root)
print('#######PostOrder Iteratively using one Stack######')
bst.postorderUsingOneStack(root)
print("####Deleting 7 from BST#####")
bst.deleteNode(root,7)
print('After Deletion Data left is')
bst.inorderRecursively(root)