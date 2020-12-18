function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var currSum;
var bestSum;
var bestNode = new TreeNode(0);
const maxSumPathHelper = function (root, currSum, bestSum, bestNode) {
  if (!root) return null;
  currSum += root.val;
  if (!root.left && !root.right) {
    if (currSum > bestSum) {
      bestSum = currSum;
      bestNode = root;
    }
  }
  maxSumPathHelper(root.left, currSum, bestSum, bestNode);
  maxSumPathHelper(root.right, currSum, bestSum, bestNode);
};

const maxSumPath = function (root) {
  currSum = 0;
  maxSumPathHelper(root, currSum, bestSum, bestNode);
  printPath(root, bestNode);
  return bestSum;
};

const printPath = function (root, bestNode) {
  if (!root) return false;
  if (
    root === bestNode ||
    printPath(root.left, bestNode) ||
    printPath(root.right, bestNode)
  ) {
    console.log(root.val);
    return true;
  }
  return false;
};

const printTree = function (root) {
  if (root == null) {
    return;
  }
  printTree(root.left);
  console.log(root.val);
  printTree(root.right);
};

const root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(10);
root.left.right = new TreeNode(-100);
root.left.left = new TreeNode(-4);
root.left.left.left = new TreeNode(6);
console.log(maxSumPath(root));
