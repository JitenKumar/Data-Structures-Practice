function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root.val === p || root.val === q) {
    return root;
  }
  let leftSearch = lowestCommonAncestor(root.left, p, q);
  let rightSearch = lowestCommonAncestor(root.right, p, q);
  if (leftSearch && rightSearch) {
    return root;
  }
  return leftSearch !== null ? leftSearch : rightSearch;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);
console.log(lowestCommonAncestor(root, 7, 8));

var lowestCommonAncestor1 = function (root, p, q) {
  // this function get the p and q references
  if (root === null) return null;
  if (root === p || root === q) {
    return root;
  }
  let leftSearch = lowestCommonAncestor(root.left, p, q);
  let rightSearch = lowestCommonAncestor(root.right, p, q);
  if (leftSearch && rightSearch) {
    return root;
  }
  return leftSearch !== null ? leftSearch : rightSearch;
};
