class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    if (this.queue.length > 0) return this.queue.shift();
    console.log("Undeflow");
  }
  peek() {
    if (this.queue.length > 0) return this.queue[0];
    console.log("Undeflow");
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
var getNewNode = function (key) {
  return new Node(key);
};

const levelOrderTraversal = function (root) {
  if (root) {
    let q = new Queue();
    q.enqueue(root);
    while (!q.isEmpty()) {
      let p = q.dequeue();
      console.log(p.data);
      if (p.left) q.enqueue(p.left);
      if (p.right) q.enqueue(p.right);
    }
  } else {
    return -1;
  }
};

const root = getNewNode(10);
root.left = getNewNode(20);
root.right = getNewNode(30);
root.left.left = getNewNode(40);
root.right.left = getNewNode(50);
root.right.right = getNewNode(60);
levelOrderTraversal(root);
