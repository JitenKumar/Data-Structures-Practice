function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const ancestor = function (root, key) {
  if (root === null) {
    return false;
  }
  if (root.val === key) {
    return true;
  }
  if (ancestor(root.left, key) || ancestor(root.right, key)) {
    console.log(root.val);
    return true;
  }
  return false;
};
const printTree = function (root) {
  if (root == null) {
    return;
  }
  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
};
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(8);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
const key = 7;
console.log(ancestor(root, key));
