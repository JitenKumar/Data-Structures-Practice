#Program to convert an Infix notation to the Postfix notation
'''
# Intution Behing the Infix to Prefix
# Get the Infix notation into the postfix notation by startinf from the end of the expression
#1. Reverse the expression by changing the '(' to ')' and ')' to '('
2. Appy the Postfix notation method on the this reversed string
3. After that reverse the postfix notation and it will the prefix notation

'''

class conversion:
    
    def __init__(self):
        self.stack=[]
        self.result = []
        self.precedence ={')':0,'+':1,'-':1,'*':2,'/':2,'^':3}

    def push(self,ele):
        self.stack.append(ele)
    
    def isEmpty(self):
        return self.stack == []
    
    def peek(self):
        if not self.isEmpty():
            return self.stack[-1]
        else:
            return '$'
        
    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        else:
            return '$'
    
    def notGreater(self,c):
        try:
            a=self.precedence[self.peek()]
            b=self.precedence[c]
            return True if a >= b else False
        except KeyError:
            return False
        
    def addtoResult(self,c):
        self.result.append(c)
        
    def infixtoprefix(self,exp):
        n = len(exp)-1
        for i in range(n,-1,-1):
            c=exp[i]
            if c==')':
                self.push(c)
            elif c=='(':
                x=self.pop()
                while x!=')':
                    self.addtoResult(x)
                    x=self.pop()
            elif c == '-' or c == '+' or c == '*' or c == '/' or c == '^':
                while (not self.isEmpty() and self.notGreater(c)):
                    self.addtoResult(self.pop())
                self.push(c)
            else:
                self.addtoResult(c)
                
        while not self.isEmpty():
            self.addtoResult(self.pop())
            
        self.result.reverse()
        return "".join(self.result)
cv = conversion()
cv1 = conversion()
print(cv.infixtoprefix('(2+(3*4)*6)'))
print(cv1.infixtoprefix('2+3*4/5-6*7'))
