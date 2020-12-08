/**
 * This program recursively reverse the stack 
 * 
 */


class Stack {
  constructor() {
    this.stack = [];
  }
  getStackSize() {
    return this.stack.length;
  }
  pushElement(x) {
    this.stack.push(x);
  }
  reverse() {
    if (this.getStackSize() > 0) {
      let c = this.stack.pop();
      this.reverse();
      this.insert(c);
    } else return;
  }
  insert(x) {
    if (this.getStackSize() === 0) {
      this.stack.push(x);
    } else {
      let c = this.stack.pop();
      this.insert(x);
      this.stack.push(c);
    }
  }
}

const st = new Stack();
const arr = [1, 2, 3, 4, 5];
for (element of arr) {
  st.pushElement(element);
}
st.reverse();
console.log(st.stack);
