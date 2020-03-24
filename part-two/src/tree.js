const Tree = function(value) {
  const newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = new Tree(value);

  this.children.push(tree);
};

treeMethods.contains = function(target) {
  let container = function(children, target) {
    for (let i = 0; i < children.lenght; i++) {
      if (children[i].value === target) {
        return true;
      } else {
        container(children[i].children, target);
      }
    }
  };
  container(this.children, target);
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
