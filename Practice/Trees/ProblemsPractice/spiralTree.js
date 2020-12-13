/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const isEmpty = function (st) {
  return st.length === 0;
};
var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  let stack1 = [];
  let stack2 = [];
  let out = [];
  stack1.push(root);
  while (!isEmpty(stack1) || !isEmpty(stack2)) {
    let c1 = [];
    while (!isEmpty(stack1)) {
      let p = stack1.pop();
      c1.push(p.val);
      if (p.left) stack2.push(p.left);
      if (p.right) stack2.push(p.right);
    }
    if (c1.length > 0) out.push(c1);
    let c2 = [];
    while (!isEmpty(stack2)) {
      let p = stack2.pop();
      c2.push(p.val);
      if (p.right) stack1.push(p.right);
      if (p.left) stack1.push(p.left);
    }
    if (c2.length > 0) out.push(c2);
  }
  return out;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(zigzagLevelOrder(root));
