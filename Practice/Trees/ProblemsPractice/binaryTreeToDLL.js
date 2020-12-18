function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var head =null;
const binaryTreeToDLL = function (root, head) {
  if (!root || root == null) return;
  binaryTreeToDLL(root.right, head);
  root.right = head;
  if (head) head.left = root;
  head = root;
  binaryTreeToDLL(root.left, head);
};

const printDLL = function (head) {
  if (!head) return;
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.right;
  }
};
const root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(7);
root.left.right = new TreeNode(6);
root.left.left = new TreeNode(5);
binaryTreeToDLL(root, head);
printDLL(head);
