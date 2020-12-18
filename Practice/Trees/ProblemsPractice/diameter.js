function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var diameter = Number.MIN_VALUE;
const height = function (root) {
  if (!root) return -1;
  let l = height(root.left);
  let r = height(root.right);
  // computer dia for each node of the tree
  diameter = Math.max(diameter, l + r + 2);
  return 1 + Math.max(l, r);
};

const printTree = function (root) {
  if (root == null) {
    return;
  }
  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
};

const root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(10);
root.left.right = new TreeNode(-100);
root.left.left = new TreeNode(-4);
root.left.left.left = new TreeNode(6);
height(root)
console.log(diameter);