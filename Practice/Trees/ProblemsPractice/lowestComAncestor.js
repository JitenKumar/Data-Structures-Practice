function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const LCABST = function (root, x, y) {
  if (root === null || !root) {
    return null;
  }
  if (root.val > x && root.val > y) {
    return LCABST(root.left, x, y);
  } else {
    if (root.val < x && root.val < y) {
      return LCABST(root.right, x, y);
    }
    return root;
  }
};
const printTree = function (root) {
  if (root == null) {
    return;
  }
  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
};
const root = new TreeNode(20);
root.left = new TreeNode(8);
root.right = new TreeNode(22);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(12);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(14);

console.log(LCABST(root, 10, 14).val);
console.log(LCABST(root, 4, 14).val);
console.log(LCABST(root, 8, 12).val);
