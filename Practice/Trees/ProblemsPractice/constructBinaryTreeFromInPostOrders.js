function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Given postorder and inorder construct the binary Tree
 */

var inHash = {};
var construct = function (inorder, postorder) {
  inorder.forEach(function (item, index) {
    inHash[item] = index;
  });
  let root = buildBinaryTree(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1
  );
  return root;
};

var buildBinaryTree = function (
  inOrder,
  postOrder,
  startIn,
  endIn,
  startPost,
  endPost
) {
  if (startIn > endIn) return null;
  if (startIn === endIn) return new TreeNode(inOrder[startIn]);
  let newNode = new TreeNode(postOrder[endPost]);
  let idx = inHash[postOrder[endPost]];
  newNode.left = buildBinaryTree(
    inOrder,
    postOrder,
    startIn,
    idx - 1,
    startIn,
    idx - 1
  );
  newNode.right = buildBinaryTree(
    inOrder,
    postOrder,
    idx + 1,
    endIn,
    idx - 1,
    endPost - 1
  );
  return newNode;
};

const printTree = function (root) {
  if (root == null) {
    return;
  }
  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
};
const inOrder = [4, 8, 2, 5, 1, 6, 3, 7];
const postOrder = [8, 4, 5, 2, 6, 7, 3, 1];
const root = construct(inOrder, postOrder);
printTree(root);
