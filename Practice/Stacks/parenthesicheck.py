'''
Parenthesis Check using the Stack
'''

class Stack:
    
    def __init__(self):
        self.stack=[]
    
    def check(self,exp):
        if len(exp)==0:
            print("Parenthesis expression is blank")
            return False
        for i in range(len(exp)):
            if exp[i] in ['{','(','[']:
                self.stack.append(exp[i])
                continue
            #Till now no data inserted into stack means expression is invalid
            if len(self.stack)==0:
                return False
            if exp[i]=='}':
                if self.stack.pop()!='{':
                    return False
            if exp[i]==')':
                if self.stack.pop()!='(':
                    return False
            if exp[i]==']':
                if self.stack.pop()!='[':
                    return False
        if len(self.stack):
            return False
        else:
            return True

def checkParen(exp):
    s = Stack()
    if s.check(exp):
        print("Expression is balanced")
    else:
        print("Expression is not balanced")

checkParen('{}')
checkParen('{([])}')
checkParen('{([(])}')