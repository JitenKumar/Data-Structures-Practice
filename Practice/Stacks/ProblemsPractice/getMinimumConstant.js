class StackOpInConstantTime {
  constructor() {
    this.stack = [];
    this.minElement;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  push(x) {
    if (this.isEmpty()) {
      this.stack.push(x);
      this.minElement = x;
    } else {
      if (x < this.minElement) {
        this.stack.push(2 * x - this.minElement);
        this.minElement = x;
      } else {
        this.stack.push(x);
      }
    }
  }
  pop(){
      if(this.isEmpty){
          return -1;
      }
      let temp= this.stack.pop();
      let out=temp;
      if(temp<this.minElement){
          out=this.minElement;
          this.minElement = (2*this.minElement)-temp;
      }
      return out;
  }
}
const stop = new StackOpInConstantTime();
stop.push(2);
stop.push(1);
stop.push(4);
stop.push(6);
stop.push(-1);
stop.push(7);
console.log(stop.pop());
console.log(stop.pop());
console.log(stop.stack);
console.log(stop.minElement);
