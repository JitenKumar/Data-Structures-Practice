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

var countNoOfNodes = function (root) {
  if (root === null || root === undefined) {
    return 0;
  }
  return 1 + countNoOfNodes(root.left) + countNoOfNodes(root.right);
};

const countNodeCountInConstantSpaceMorrisAlgo = function (root) {
  let current = root;
  let count = 0;
  while (current != null) {
    if (current.left === null) {
      count += 1;
      current = current.right;
    } else {
      let pred = current.left;
      while (pred !== current && pred.right !== null) {
        pred = pred.right;
      }
      if (pred.right === null) {
        pred.right = current;
        current = current.left;
      } else {
        pred.right = null;
        count += 1;
        current = current.right;
      }
    }
  }
  return count;
};

const root = getNewNode(10);
root.left = getNewNode(20);
root.right = getNewNode(30);
root.left.left = getNewNode(40);
root.right.left = getNewNode(50);
root.right.right = getNewNode(60);

console.log(countNoOfNodes(root));
console.log(countNodeCountInConstantSpaceMorrisAlgo(root));
