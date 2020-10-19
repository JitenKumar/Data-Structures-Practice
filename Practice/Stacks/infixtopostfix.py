#Program to convert an Infix notation to the Postfix notation
class conversion:
    
    def __init__(self):
        self.stack=[]
        self.result = []
        self.precedence ={'(':0,'+':1,'-':1,'*':2,'/':2,'^':3}
        
    
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
        
    def infixtopostfix(self,exp):
        for c in exp:
            if c.isalnum():
                self.addtoResult(c)
            elif c=='(':
                self.push(c)
            elif c==')':
                x=self.pop()
                while x!='(':
                    self.result.append(x)
                    x=self.pop()
            else:
                while (not self.isEmpty() and self.notGreater(c)):
                    self.addtoResult(self.pop())
                self.push(c)
            
        while not self.isEmpty():
            self.addtoResult(self.pop())
        
        return "".join(self.result)
cv = conversion()
cv.infixtopostfix('(2*3+4*(5-6))')
#Output
'''
23*456-*+
'''