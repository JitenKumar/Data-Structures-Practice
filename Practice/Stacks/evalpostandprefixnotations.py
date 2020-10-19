#Program to Evaluate a Postfix notation

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
        
    def evaluatePostFix(self,exp):
        #expr = '234*6*+'
        for i in exp:
            if i.isdigit():
                self.push(i)
            else:
                a=self.pop()
                b=self.pop()
                self.push(str(eval(b+i+a)))
        return self.pop()
    def evaluatePrefix(self,exp):
        #expr = '+2**346'
        for j in range(len(exp)-1,-1,-1):
            i=exp[j]
            if i.isdigit():
                self.push(i)
            else:
                a=self.pop()
                b=self.pop()
                self.push(str(eval(b+i+a)))
        return self.pop()
cv = conversion()
print(cv.evaluatePostFix('234*6*+'))
expr = '100 200 + 2 / 5 * 7 +'
print(cv.evaluatePostFix(expr.split(' ')))


expr = '+2**346'
print(cv.evaluatePrefix(expr))