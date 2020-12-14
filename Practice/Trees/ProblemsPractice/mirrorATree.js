function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const mirrorTree = function (root) {
  if (root == null) {
    return;
  }
  mirrorTree(root.left);
  mirrorTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
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
console.log(mirrorTree(root));
console.log(printTree(root));
console.log(root);
