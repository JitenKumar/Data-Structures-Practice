function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * GIven a binary tree return the count of the leaf nodes
 */
var countLeaves = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return countLeaves(root.left) + countLeaves(root.right);
};

const root = new TreeNode(20);
root.left = new TreeNode(12);
root.right = new TreeNode(8);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(6);
console.log(countLeaves(root));
