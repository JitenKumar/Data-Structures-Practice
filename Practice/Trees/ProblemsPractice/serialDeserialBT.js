function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const serialize = function (root) {
  if (!root) return root;
  arr = [];
  var serial = function (root, arr) {
    if (!root) {
      arr.push("/");
      return;
    }
    arr.push(String(root.val));
    serial(root.left, arr);
    serial(root.right, arr);
    return arr;
  };
  arr = serial(root, arr);
  return arr.join(",");
};

const deserialize = function (stringData) {
  var deserial = function (data) {
    if (data[0] === null) {
      return null;
    }
    let val = data.shift();
    if (val === "/") {
      return null;
    }
    const root = new TreeNode(Number(val));
    root.left = deserial(data);
    root.right = deserial(data);
    return root;
  };
  if (stringData === null) {
    return null;
  }
  let root = deserial(stringData.split(","));
  return root;
};

const root = new TreeNode(10);
root.left = new TreeNode(-1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(-2);

let str = serialize(root);
console.log(deserialize(str));
