function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const verticalOrderHelper = function (root, map, h_dist = 0, depth = 0) {
  if (!root) return;
  if (!map.get(h_dist)) {
    map.set(h_dist, []);
  }
  map.get(h_dist).push({ val: root.val, depth });
  verticalOrderHelper(root.left, map, h_dist - 1, depth + 1);
  verticalOrderHelper(root.right, map, h_dist + 1, depth + 1);
};

var verticalTraversal = function (root) {
  var map = new Map();
  verticalOrderHelper(root, map);
  const res = Array.from(map.keys())
    .sort((a, b) => a - b)
    .map((a) =>
      map.get(a).sort((a, b) => {
        if (a.depth === b.depth) return a.val - b.val;
        return a.depth - b.depth;
      })
    );
  return res.map((a) => {
    return a.map((n) => n.val);
  });
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
verticalOrder(root);
