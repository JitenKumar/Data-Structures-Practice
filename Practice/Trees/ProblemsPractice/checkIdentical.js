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

var checkIdenticalTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return 1;
  }
  return (
    root1.data === root2.data &&
    checkIdenticalTrees(root1.left, root2.left) &&
    checkIdenticalTrees(root1.right, root2.right)
  );
};

var checkIdenticalTreesIterative = function (root1, root2) {
  if (root1 && root2) {
    return true;
  }
  if (root1 || root2) {
    return false;
  }
  let q1 = new Queue();
  let q2 = new Queue();
  q1.enqueue(root1);
  q2.enqueue(root2);
  while (!q1.isEmpty() && !q2.isEmpty()) {
    let p1 = q1.dequeue();
    let p2 = q2.dequeue();
    if (p1.data != p2.data) {
      return false;
    }
    if (p1.left && p2.left) {
      q1.enqueue(p1.left);
      q2.enqueue(p2.left);
    } else if (p1.left || p2.left) {
      return false;
    }
    if (p1.right && p2.right) {
      q1.enqueue(p1.right);
      q2.enqueue(p2.right);
    } else if (p1.right || p2.right) {
      return false;
    }
  }
  return true
};

const root = getNewNode(10);
root.left = getNewNode(20);
root.right = getNewNode(30);
root.left.left = getNewNode(40);
root.right.left = getNewNode(50);
root.right.right = getNewNode(60);

const root1 = getNewNode(10);
root1.left = getNewNode(20);
root1.right = getNewNode(30);
root1.left.left = getNewNode(40);
root1.right.left = getNewNode(50);
root1.right.right = getNewNode(60);
console.log(checkIdenticalTrees(root, root1));
console.log(checkIdenticalTreesIterative(root, root1));
