function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const toSumTree = function (root) {
  if (!root) return 0;
  let l = toSumTree(root.left);
  let r = toSumTree(root.right);
  let v = root.val;
  root.val = l + r;
  return l + r + v;
};

const printTree = function (root) {
    if (root == null) {
      return;
    }
    printTree(root.left);
    console.log(root.val);
    printTree(root.right);
  };

const root = new TreeNode(10);
root.left = new TreeNode(-1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(-2);
toSumTree(root);
printTree(root);
