function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const morrissTraversal = function (root) {
  let current = root;
  while (current !== null) {
    if (current.left === null) {
      console.log(current.val);
      current = current.right;
    } else {
      // find the inorder predecessor of currentMax
      let pre = current.left;
      while (pre.right !== current && pre.right !== null) {
        pre = pre.right;
      }
      if (pre.right === null) {
        pre.right = current;
        current = current.left;
      } else {
        pre.right = null;
        console.log(current.val);
        current = current.right;
      }
    }
  }
};

const root = new TreeNode(10);
root.left = new TreeNode(6);
root.right = new TreeNode(15);
root.right.left= new TreeNode(13);
root.right.right= new TreeNode(20);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(9);
morrissTraversal(root);
