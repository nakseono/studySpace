const Tree = function (value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function (value) {
  const tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function (target) {
  const container = function (children, target) {
    for (let i = 0; i < children.length; i++) {
      if (target === children[i].value) {
        return true;
      }
      container(children[i].children, target);
    }
  };
  container(this.childern, target);
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
