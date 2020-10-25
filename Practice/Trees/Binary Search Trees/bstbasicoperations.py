'''
Implementation of the basic operations of BST
1. Search
2. Minimum Element
3. Maximum Element
4. Insert an element
5. Inorder Traversal
'''
import sys
class Node:
    
    def __init__(self,data,left=None,right=None):
        self.data=data
        self.left=left
        self.right=right

def insert(root,key):
    if root==None:
        return Node(key)
    if key<root.data:
        root.left=insert(root.left,key)
    else:
        root.right=insert(root.right,key)
    return root

def search(root,ele):
    if root is None:
        print('Key Not Found')
    if ele<root.data:
        root.left=search(root.left,ele)
    elif ele>root.data:
        root.right=search(root.right,ele)
    else:
        return root

def minelement(root):
    if root==None:
        return None
    elif root.left is None:
        return root
    else:
        return minelement(root.left)

def maxelement(root):
    if root==None:
        return None
    elif root.right is None:
        return root
    else:
        return maxelement(root.right)