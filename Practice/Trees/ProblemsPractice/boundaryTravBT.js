function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const printLeftBoundary = function (root) {
  if (!root) return;
  if (root.left) {
    console.log(root.val);
    printLeftBoundary(root.left);
  } else if (root.right) {
    console.log(root.val);
    printLeftBoundary(root.right);
  }
};

const printLeaves = function (root) {
  if (!root) return;
  printLeaves(root.left);
  if (!root.left && !root.right) console.log(root.val);
  printLeaves(root.right);
};
const printRightBoundary = function (root) {
  if (!root) return;
  if (root.right) {
    printRightBoundary(root.right);
    console.log(root.val);
  } else if (root.left) {
    printLeftBoundary(root.left);
    console.log(root.val);
  }
};
const printBoundary = function (root) {
  if (!root) return;
  // print the root data
  console.log(root.val);
  // traverse the left Boundary nodes
  printLeftBoundary(root.left);
  //print the leaves nodes on Left Boundary and Right Boundary
  printLeaves(root.left);
  printLeaves(root.right);
  //print the Nodes on the right Boundary in reverse mannger
  printRightBoundary(root.right);
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.left.left = new TreeNode(9);
root.right.left.right = new TreeNode(10);
root.right.right = new TreeNode(6);
root.right.right.left = new TreeNode(11);
printBoundary(root);
