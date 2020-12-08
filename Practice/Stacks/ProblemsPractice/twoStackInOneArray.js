/**
 * This program implement two stacks in one array only
 *
 */

class Stack {
  constructor() {
    this.MAXSIZE = 10;
    this.stack = new Array(this.MAXSIZE);
    this.top1 = -1;
    this.top2 = this.MAXSIZE;
  }
  getStackSize() {
    return this.stack.length;
  }
  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.stack[++this.top1] = x;
    } else console.log("Stack OverFlow");
  }
  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.stack[--this.top2] = x;
    } else console.log("Stack OverFlow");
  }
  pop1() {
    if (this.top1 >= 0) {
      return this.stack[this.top1--];
    } else console.log("Stack UnderFlow");
  }
  pop2() {
    if (this.top2 < this.MAXSIZE) {
      return this.stack[this.top2++];
    } else console.log("Stack UnderFlow");
  }
}

const st = new Stack();
const arr1 = [1, 2, 3, 4, 5];
for (element of arr1) {
  st.push1(element);
}
const arr2 = [1, 2, 3, 4, 5, 6];
for (element of arr2) {
  st.push2(element);
}
console.log(st.stack);
