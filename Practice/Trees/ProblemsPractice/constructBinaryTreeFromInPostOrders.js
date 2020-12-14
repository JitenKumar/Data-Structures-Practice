function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Given postorder and inorder construct the binary Tree
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let inHash = {};
var construct = function (inorder, postorder) {
  inorder.forEach(function (item, index) {
    inhash[item] = index;
  });
};
