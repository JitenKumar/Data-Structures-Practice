class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (!this.head) {
      this.head = newNode;
    }else{
        let current = this.head;
        while (current.next !== null){
            current=current.next;
        }
        current.next=newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: null };
    if (this.head) {
      newNode.next = this.head.next;
    }
    this.head = newNode;
  }

  deleteElement(value) {
    if (!this.head) {
      return;
    }
    
    while(this.head===value && this.head.value===value) {
        this.head=this.haed.next;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next == current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  findElement(element){
    let current = this.head;
    while (current){
        if(current.value === element){
            return current;
        }
        current=current.next;
    }
  }

  printLinedList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(223);
linkedList.append(224);
linkedList.append(2324);
linkedList.printLinedList();
console.log(linkedList.findElement(223));
