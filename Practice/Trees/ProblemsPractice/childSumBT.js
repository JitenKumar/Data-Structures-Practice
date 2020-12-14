function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * GIven a binary tree check if the children sum of the binary tree is equal to it parent
 */

var childSumProperty = function (root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }
  let l = 0,
    r = 0;
  if (root.left !== null) l = root.left.val;
  if (root.right !== null) r = root.right.val;
  if (
    root.val === l + r &&
    childSumProperty(root.left) &&
    childSumProperty(root.right)
  ) {
    return true;
  } else return false;
};

const root = new TreeNode(20);
root.left = new TreeNode(12);
root.right = new TreeNode(8);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(6);
console.log(childSumProperty(root));
