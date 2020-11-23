class Node {
  constructor(info) {
    this.info = info;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var newNode = new Node(element);
    let current;
    if (this.head == null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.info);
      current = current.next;
    }
  }
}

var kthNodeBruteForce = function (llist, k) {
  let temp = llist.head;
  l = llist.size - k;
  for (let i = 0; i < l; i++) {
    temp = temp.next;
  }
  return temp.info;
};

var kthNodeFromEnd = function (llist, k) {
  let temp1 = llist.head;
  let temp2 = llist.head;
  for (let i = 0; i < k; i++) {
    temp2 = temp2.next;
  }
  while (temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  return temp1.info;
};



const llItems = [1, 2, 3, 4, 5];
var ll = new LinkedList();
llItems.forEach(function (item, index) {
  ll.add(item);
});
//ll.printList();
console.log(kthNodeBruteForce(ll, 1));
console.log(kthNodeFromEnd(ll, 3));
